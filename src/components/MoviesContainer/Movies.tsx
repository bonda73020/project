import {FC, useEffect, useState} from 'react';

import {IMovie} from "../../interfaces/IMovie";
import {movieService} from "../../services/movieService";
import {useSearchParams} from "react-router-dom";
import {Movie} from "../movieCard/Movie";
import css from './Movies.module.css'
import {useAppContext} from "../../hooks/useAppContext";
import leftArrow from '../../img/left-arrow.png'
import rightArrow from "../../img/right-arrow.png"
import arrow_up from '../../img/arrow-up.png'

interface IProps {
    sort_by?:string,
    with_keywords?:string,
    genres?:string[]
}


const Movies: FC<IProps> = ({sort_by='popularity.desc',with_keywords='',genres=[]}) => {
    const [query,setQuery] = useSearchParams({page:"1"})
    const [movies, setMovies] = useState<IMovie[]>([])
    const [prevNext,setPrevNext] = useState<{prev:boolean,next:boolean}>({prev:null,next:null})
    const isDark = useAppContext().isDark
    const [sortBy, setSortBy] = useState<string[]>(sort_by.split('.'))
    const [withKeywords,setWithKeywords] = useState(with_keywords)



    const changeSort = (e: string):void => {
        setSortBy(prevState => [e,prevState[1]]);
    };

    const changeSortDir:()=>void=()=>{
        setSortBy(prevState => [prevState[0],`${prevState[1]==='desc'?'asc':'desc'}`])
    }



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
        movieService.getPage(query.get('page'),{sort_by:sortBy[0]+'.'+sortBy[1],with_keywords:withKeywords,genres:genres}).then(({data})=> {
            setMovies(data.results)
            setPrevNext({prev:query.get('page')!=='1',next:query.get('page')!==`${data.total_pages}`})
        })
    }, [query.get('page'),sortBy,genres]);

    return (

            <div className={`${css.Movies} ${isDark?css.dark:''}`}>
                <div className={css.sorting_container}>
                    <h2>Sort by</h2>
                    <div className={css.sorting_options}>
                        <div onClick={()=>changeSort('popularity')} className={`${isDark?css.dark:''}`} id={sortBy[0]==="popularity"?css.Selected:''}>Popularity</div>
                        <div onClick={()=>changeSort('primary_release_date')} className={`${isDark?css.dark:''}`} id={sortBy[0]==="primary_release_date"?css.Selected:''}>Release date</div>
                        <div onClick={()=>changeSort('vote_average')} className={`${isDark?css.dark:''}`} id={sortBy[0]==="vote_average"?css.Selected:''}>Average vote</div>
                        <div onClick={()=>changeSort('vote_count')} className={`${isDark?css.dark:''}`} id={sortBy[0]==="vote_count"?css.Selected:''}>Vote counts</div>
                        <div onClick={()=>changeSort('revenue')} className={`${isDark?css.dark:''}`} id={sortBy[0]==="revenue"?css.Selected:''}>Revenue</div>
                        <div onClick={()=>changeSortDir()}><img className={`${isDark?css.dark:''}`} id={`${sortBy[1]==='desc'?css.Rotate:''}`} src={arrow_up} alt=""/></div>
                    </div>
                </div>
                <div className={`${css.ButtonsContainer} ${isDark?css.dark:''}`}>
                    <div onClick={handlePrev}><img className={!prevNext.prev?css.inactive:''} src={leftArrow} alt=""/></div>
                    <div>{query.get('page')}</div>
                    <div onClick={handleNext}><img className={!prevNext.next?css.inactive:''}  src={rightArrow} alt=""/></div>
                </div>
                <div className={css.MoviesContainer}>
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