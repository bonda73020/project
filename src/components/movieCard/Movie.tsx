import {FC} from 'react';
import {useNavigate} from "react-router-dom";

import {IMovie} from "../../interfaces/IMovie";
import {useAppContext} from "../../hooks/useAppContext";
import {MovieRating} from "./MovieRating";
import {posterBaseURL} from "../../constants/urls";
import css from './MovieCard.module.css'

interface IProps {
    movie:IMovie
}


const Movie: FC<IProps> = ({movie}) => {
    const {isDark} = useAppContext()
    const navigate = useNavigate()
    const {title,poster_path,vote_average, id} = movie



    const goToMoviePage=():void=>{
            navigate(`/Movies/${id}`)
    }

    return (
        <div onClick={()=>goToMoviePage()} className={`${css.Movie} ${isDark?css.dark:''}`}>
            <div>
                {poster_path&&<img src={`${posterBaseURL}/${poster_path}`} alt=""/>}
            </div>
            <div>{title}</div>
            <MovieRating vote_average={vote_average}></MovieRating>


        </div>
    );
};

export {Movie};