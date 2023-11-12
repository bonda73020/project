import {FC} from 'react';
import {NavLink} from "react-router-dom";

import {ICastMember} from "../../types/ICastMember";
import css from './MovieDetails.module.css'
import {useAppContext} from "../../hooks/useAppContext";

interface IProps {
    cast:ICastMember[]
}


const Cast: FC<IProps> = ({cast}) => {
    const {isDark} = useAppContext()
    return (
        <div className={css.Cast}>
            Cast:
            {cast.map((i)=><NavLink className={isDark?css.dark:''} key={i.id} to={''}>{i.name}</NavLink>)}
        </div>
    );
};

export {Cast};