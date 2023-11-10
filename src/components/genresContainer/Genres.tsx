import React, {useEffect, useState} from 'react';
import {useAppContext} from "../../hooks/useAppContext";
import {Genre} from "./Genre";
import {movieService} from "../../services/movieService";
import css from './Genres.module.css'
import {Movies} from "../MoviesContainer/Movies";
import {IGenre} from "../../interfaces/IGenre";
import {useSearchParams} from "react-router-dom";

const Genres = () => {

    const {genres,isDark} = useAppContext()

    const [selectedGenreUnits,setSelectedGenreUnits] = useState<string[]>([])

    const changeSelectedElement=(id:number):void=>{
            if (selectedGenreUnits.includes(`${id}`)){
                setSelectedGenreUnits(prevState => prevState.filter(i=> i !==`${id}`))
            }
            else{
                setSelectedGenreUnits(prevState => [...prevState,`${id}`])
            }
    }


    useEffect(() => {

    }, [selectedGenreUnits]);


    return (
        <div>
            <div className={`${css.GenresContainer} ${isDark?css.dark:''}`}>
                <h1>Genres</h1>

                <div className={css.Genres}>
                    {genres.map(i=><Genre state={selectedGenreUnits.includes(`${i.id}`)} change={changeSelectedElement} genre={i} key={i.id}/>)}
                </div>
            </div>
            <Movies genres={selectedGenreUnits}></Movies>
        </div>
    );
};

export {Genres};