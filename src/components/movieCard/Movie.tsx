import {FC} from 'react';
import {IMovie} from "../../interfaces/IMovie";
import {useAppContext} from "../../hooks/useAppContext";
import {MovieRating} from "./MovieRating";
import {posterBaseURL} from "../../constants/urls";
import css from './MovieCard.module.css'
import {useNavigate, useSearchParams} from "react-router-dom";
interface IProps {
    movie:IMovie
}


const Movie: FC<IProps> = ({movie}) => {
    const isDark = useAppContext().isDark
    const navigate = useNavigate()
    const {title,poster_path,vote_average, id} = movie

    const [query,setQuery] = useSearchParams()



    const goToMoviePage=():void=>{
            navigate(`/Movies/movieDetails`)
            setQuery(prev => {
                prev.set('movieId',`${id}`)
                return prev
            })
    }

    return (
        <div onClick={()=>goToMoviePage()} className={`${css.Movie} ${isDark?css.dark:''}`}>
            <div>
                <img src={`${posterBaseURL}/${poster_path}`} alt=""/>
            </div>
            <div>{title}</div>
            <MovieRating vote_average={vote_average}></MovieRating>


        </div>
    );
};

export {Movie};