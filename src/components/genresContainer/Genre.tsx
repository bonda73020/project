import {FC, useState} from 'react';
import {IGenre} from "../../interfaces/IGenre";
import css from './Genres.module.css'
import {useAppContext} from "../../hooks/useAppContext";
import {boolean} from "joi";
import {IState} from "../../types/stateType";
interface IProps {
    genre:IGenre,
    change:(id:number)=>void,
    state:boolean
}


const Genre: FC<IProps> = ({genre,change,state}) => {
    const {isDark} =  useAppContext()

    const [selected,setSelected] = useState<boolean>(false)


    const callback=(id:number):void=>{
        change(id)
    }

    return (
        <div onClick={()=>callback(genre.id)} className={`${css.Genre} ${state?css.selected:''} ${isDark?css.dark:''}`}>
            {genre.name}
        </div>
    );
};

export {Genre};