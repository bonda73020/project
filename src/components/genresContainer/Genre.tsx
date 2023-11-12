import {FC} from 'react';

import {IGenre} from "../../interfaces/IGenre";
import css from './Genres.module.css'
import {useAppContext} from "../../hooks/useAppContext";

interface IProps {
    genre:IGenre,
    change:(id:number)=>void,
    state:boolean
}


const Genre: FC<IProps> = ({genre:{name,id},change,state}) => {
    const {isDark} =  useAppContext()


    const callback=(id:number):void=>{
        change(id)
    }

    return (
        <div onClick={()=>callback(id)} className={`${css.Genre} ${state?css.selected:''} ${isDark?css.dark:''}`}>
            {name}
        </div>
    );
};

export {Genre};