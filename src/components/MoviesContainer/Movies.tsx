import {useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";

import {IMovie} from "../../interfaces/IMovie";
import {movieService} from "../../services/movieService";
import {Movie} from "../movieCard/Movie";
import css from './Movies.module.css'
import {useAppContext} from "../../hooks/useAppContext";
import leftArrow from '../../img/left-arrow.png'
import rightArrow from "../../img/right-arrow.png"
import arrow_up from '../../img/arrow-up.png'


const Movies = () => {
    const [query,setQuery] = useSearchParams({page:"1",genres:'',sort_by:'popularity.desc',with_keywords:''})
    const [movies, setMovies] = useState<IMovie[]>([])
    const [prevNext,setPrevNext] = useState<{prev:boolean,next:boolean}>({prev:null,next:null})
    const {isDark} = useAppContext()



    const changeSort = (e: string):void => {
        setQuery(prev => {
            const prevDir = prev.get('sort_by').split('.')[1]
            prev.set('sort_by',`${e}.${prevDir}`)
            return prev
        })
    };

    const changeSortDir:()=>void=()=>{
        setQuery(prev => {
            const prevVal = prev.get('sort_by').split('.')
            prev.set('sort_by',`${prevVal[0]}.${prevVal[1]==='asc'?'desc':'asc'}`)
            return prev
        })
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
        const keyWords = query.get('with_keywords').split(/[+ ]+/);
        if (keyWords[0]===''){
            const genres_ = query.get('genres').split(',')
            movieService.getPage(query.get('page'),{sort_by:query.get('sort_by'),genres:genres_}).then(({data})=> {
                setMovies(data.results)
                setPrevNext({prev:query.get('page')!=='1',next:query.get('page')!==`${data.total_pages}`})
            })
        }
        else{
            movieService.searchByWords(keyWords,query.get('page')).then(({data})=>{
                setMovies(data.results)
                setPrevNext({prev:query.get('page')!=='1',next:query.get('page')!==`${data.total_pages}`})
            })
        }
    }, [query]);

    return (

            <div className={`${css.Movies} ${isDark?css.dark:''}`}>
                {(query.get('with_keywords')=== '')&&<div className={css.sorting_container}>
                    <h2>Sort by</h2>
                    <div className={css.sorting_options}>
                        <div onClick={()=>changeSort('popularity')} className={`${isDark?css.dark:''}`} id={query.get('sort_by').split('.')[0]==="popularity"?css.Selected:''}>Popularity</div>
                        <div onClick={()=>changeSort('primary_release_date')} className={`${isDark?css.dark:''}`} id={query.get('sort_by').split('.')[0]==="primary_release_date"?css.Selected:''}>Release date</div>
                        <div onClick={()=>changeSort('vote_average')} className={`${isDark?css.dark:''}`} id={query.get('sort_by').split('.')[0]==="vote_average"?css.Selected:''}>Average vote</div>
                        <div onClick={()=>changeSort('vote_count')} className={`${isDark?css.dark:''}`} id={query.get('sort_by').split('.')[0]==="vote_count"?css.Selected:''}>Vote counts</div>
                        <div onClick={()=>changeSort('revenue')} className={`${isDark?css.dark:''}`} id={query.get('sort_by').split('.')[0]==="revenue"?css.Selected:''}>Revenue</div>
                        <div onClick={()=>changeSortDir()}><img className={`${isDark?css.dark:''}`} id={`${query.get('sort_by').split('.')[1]==='desc'?css.Rotate:''}`} src={arrow_up} alt=""/></div>
                    </div>
                </div>}
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