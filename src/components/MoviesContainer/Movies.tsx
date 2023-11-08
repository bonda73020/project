import {FC, useEffect, useState} from 'react';

import {IMovie} from "../../interfaces/IMovie";
import {movieService} from "../../services/movieService";
import {useSearchParams} from "react-router-dom";
import {Movie} from "../movieCard/Movie";
import css from './Movies.module.css'
import {useAppContext} from "../../hooks/useAppContext";
import leftArrow from '../../img/left-arrow.png'
import rightArrow from "../../img/right-arrow.png"

interface IProps {
}


const Movies: FC<IProps> = () => {
    const [query,setQuery] = useSearchParams({page:"1"})
    const [movies, setMovies] = useState<IMovie[]>([])
    const [prevNext,setPrevNext] = useState<{prev:boolean,next:boolean}>({prev:null,next:null})

    const isDark = useAppContext().isDark

    const handlePrev:()=>void=()=>{
        if (prevNext.prev){
            setQuery(prev => {
                prev.set('page',`${+prev.get('page')-1}`)
                return prev
            })
        }
    }

    const handleNext:()=>void=()=>{
        if (prevNext.next){
            setQuery(prev => {
                prev.set('page',`${+prev.get('page')+1}`)
                return prev
            })
        }
    }


    useEffect(() => {
        movieService.getPage(query.get('page')).then(({data})=> {
            setMovies(data.results);
            setPrevNext({prev:query.get('page')!=='1',next:query.get('page')!==`${data.total_pages}`})
        })
    }, [query.get('page')]);
    return (

            <div className={`${css.Movies} ${isDark?css.dark:''}`}>
                <h1>Discover</h1>
                <div className={`${css.ButtonsContainer} ${isDark?css.dark:''}`}>
                    <div onClick={handlePrev}><img className={!prevNext.prev?css.inactive:''} src={leftArrow} alt=""/></div>
                    <div>{query.get('page')}</div>
                    <div onClick={handleNext}><img className={!prevNext.next?css.inactive:''}  src={rightArrow} alt=""/></div>
                </div>
                <div className={`${css.MoviesContainer} ${isDark?css.dark:''}`}>
                    {movies.map((i=> <Movie key={i.id} movie={i}></Movie>))}
                </div>
                <div className={`${css.ButtonsContainer} ${isDark?css.dark:''}`}>
                    <div onClick={handlePrev}><img className={!prevNext.prev?css.inactive:''} src={leftArrow} alt=""/></div>
                    <div>{query.get('page')}</div>
                    <div onClick={handleNext}><img className={!prevNext.next?css.inactive:''}  src={rightArrow} alt=""/></div>
                </div>
            </div>
    );
};

export {Movies};