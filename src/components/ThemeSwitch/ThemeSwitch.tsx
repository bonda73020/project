import React from 'react';

import css from './ThemeSwitch.module.css'
import sun from '../../img/sun.png'
import moon from '../../img/moon.png'
import {useAppContext} from "../../hooks/useAppContext";


const ThemeSwitch = () => {
    const {isDark,setIsDark} = useAppContext()

    const handleChange = ()=>{
        setIsDark(prevState => !prevState)
    }

    return (
        <div className={`${css.SwitchBody} ${isDark&&css.dark}`} onClick={handleChange}>
            <img className={css.img} src={moon} alt=""/>
            <img className={css.img} id={css.white} src={sun} alt=""/>
            <div className={`${css.switcher} ${isDark?css.ToRight:css.ToLeft}`}></div>
        </div>
    );
};

export {ThemeSwitch};