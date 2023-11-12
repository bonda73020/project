import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {IMovie} from "../interfaces/IMovie";
import {movieService} from "../services/movieService";
import {MovieDetails} from "../components/MovieDetails/MovieDetails";

const MoviePage = () => {

    const {id} = useParams()


    const [movie,setMovie] = useState<IMovie>(null)

    useEffect(() => {
        movieService.getMovieById(id).then(({data})=>{setMovie(data)})
    }, [id]);



    return (
        <div>
            {movie&&<MovieDetails movie={movie}></MovieDetails>}
        </div>
    );
};

export {MoviePage};