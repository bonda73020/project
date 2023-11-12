import {FC} from 'react';
import {NavLink} from "react-router-dom";

import {IGenre} from "../../interfaces/IGenre";
import css from './GenreLabel.module.css'

interface IProps {
    genre:IGenre
}


const GenreLabel: FC<IProps> = ({genre:{name,id}}) => {
    return (
        <NavLink className={css.GenreLabel} to={`/genres/?genres=%2C${id}`}>
            <div >
                {name}
            </div>
        </NavLink>
    );
};

export {GenreLabel};