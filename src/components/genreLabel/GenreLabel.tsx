import {FC} from 'react';
import {IGenre} from "../../interfaces/IGenre";
import css from './GenreLabel.module.css'
interface IProps {
    genre:IGenre
}


const GenreLabel: FC<IProps> = ({genre}) => {
    return (
        <div className={css.GenreLabel}>
            {genre.name}
        </div>
    );
};

export {GenreLabel};