import {FC} from 'react';
import {IMovie} from "../../interfaces/IMovie";
import {useAppContext} from "../../hooks/useAppContext";
import {MovieRating} from "./MovieRating";
import {posterBaseURL} from "../../constants/urls";
import css from './MovieCard.module.css'
interface IProps {
    movie:IMovie
}


const Movie: FC<IProps> = ({movie}) => {
    const {title,poster_path,vote_average} = movie

    const genres = useAppContext().genres
    return (
        <div className={css.Movie}>
            <div>
                <img src={`${posterBaseURL}/${poster_path}`} alt=""/>
            </div>
            <div>{title}</div>
            <MovieRating vote_average={vote_average}></MovieRating>


        </div>
    );
};

export {Movie};