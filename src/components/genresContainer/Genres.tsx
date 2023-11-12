import React from 'react';
import {useSearchParams} from "react-router-dom";

import {useAppContext} from "../../hooks/useAppContext";
import {Genre} from "./Genre";
import css from './Genres.module.css'
import {Movies} from "../MoviesContainer/Movies";



const Genres = () => {
    window.scrollTo(0, 0);
    const {genres,isDark} = useAppContext()
    const [query,setQuery] = useSearchParams()
    if (!query.get('genres')){
        query.set('genres','')
    }
    const changeSelectedElement = (id: number): void => {
        setQuery(prev => {
            const values = prev.get('genres').split(',');
            if (values.includes(`${id}`)) {
                // Remove the id if it already exists
                const updatedValues = values.filter(value => value !== `${id}`);
                prev.set('genres', updatedValues.join(','));
            } else {
                // Add the id if it doesn't exist
                const updatedValues = [...values, `${id}`];
                prev.set('genres', updatedValues.join(','));
            }

            return prev;
        });
    };


    return (
        <div>
            <div className={`${css.GenresContainer} ${isDark?css.dark:''}`}>
                <h1>Genres</h1>

                <div className={css.Genres}>
                    {genres.map(i=><Genre state={query.get('genres').split(',').includes(`${i.id}`)} change={changeSelectedElement} genre={i} key={i.id}/>)}
                </div>
            </div>
            <Movies></Movies>
        </div>
    );
};

export {Genres};