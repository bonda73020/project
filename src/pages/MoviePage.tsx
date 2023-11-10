import React, {useEffect, useState} from 'react';
import {MovieDetails} from "../components/MovieDetails/MovieDetails";
import {useSearchParams} from "react-router-dom";
import {IMovie} from "../interfaces/IMovie";
import {movieService} from "../services/movieService";

const MoviePage = () => {

    const [query,setQuery] = useSearchParams()
    const id = query.get('movieId')


    const [movie,setMovie] = useState<IMovie>(null)

    useEffect(() => {
        movieService.getMovieById(id).then(({data})=>{setMovie(data)})
    }, []);



    return (
        <div>
            {movie&&<MovieDetails movie={movie}></MovieDetails>}
        </div>
    );
};

export {MoviePage};