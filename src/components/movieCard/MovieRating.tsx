import {FC} from 'react';
import img from '../../img/star.png'
import css from './MovieCard.module.css'
interface IProps {
    vote_average:number
}


const MovieRating: FC<IProps> = ({vote_average}) => {

    const styles = {
        background: `linear-gradient(90deg, #F5AF7CFF ${vote_average*10}%, #3D3229FF ${vote_average*10}%)`,
        backgroundClip: 'text',
        WebkitBackgroundClip:'text'
    }

    return (
        <div style={styles} className={css.MovieRating}>
            ★★★★★
        </div>
    );
};

export {MovieRating};