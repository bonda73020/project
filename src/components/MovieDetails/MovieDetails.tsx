import React, {FC, useEffect, useState} from 'react';
import {IMovie} from "../../interfaces/IMovie";
import css from './MovieDetails.module.css'
import {posterBaseURL} from "../../constants/urls";
import {useAppContext} from "../../hooks/useAppContext";
import {Cast} from "./Cast";
import {movieService} from "../../services/movieService";
import {ICredits} from "../../interfaces/ICredits";
import {GenreLabel} from "../genreLabel/GenreLabel";
import {MovieRating} from "../movieCard/MovieRating";
interface IProps {
    movie:IMovie
}


const MovieDetails: FC<IProps> = ({movie}) => {


    const isDark = useAppContext().isDark
    const genresInternal = useAppContext().genres

    const {title,id,original_title,poster_path,overview,genres,vote_average,vote_count} = movie
    const [credits,setCredits] = useState<ICredits>(null)

    useEffect(() => {
        movieService.getCreditsById(`${id}`).then(({data})=>setCredits(data))
    }, []);


    console.log(genres)
    return (
        <div className={`${css.Container} ${isDark?css.dark:''}`}>

           <div className={css.TopPanel}>
               <div className={css.title}>
                   <div>
                       <h1>{title}</h1>
                       <h4>{original_title}</h4>
                   </div>

                   <img src={`${posterBaseURL}/${poster_path}`} alt=""/>
               </div>
               <div className={css.RightTopPanel}>

                   <div>
                       <h2>Overview</h2>
                       {overview}
                   </div>
                   {credits&&<Cast cast={credits.cast}/>}
               </div>
           </div>

            <div className={css.Genres}>
                <h3>Genres</h3>
                <div className={css.GenresContainer}>
                    {genres.map(i=><GenreLabel key={i.id} genre={i}/>)}
                </div>
            </div>

            <div className={css.RatingContainer}>
                    <h3>Rating</h3>
                    <MovieRating vote_average={vote_average}></MovieRating>
                    <div>Voted: {vote_count}</div>
            </div>

        </div>
    );
};

export {MovieDetails};