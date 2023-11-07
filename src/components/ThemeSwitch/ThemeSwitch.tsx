import React from 'react';

import css from './ThemeSwitch.module.css'
import sun from '../../img/sun.png'
import moon from '../../img/moon.png'
import {useAppContext} from "../../hooks/useAppContext";


const ThemeSwitch = () => {
    const value = useAppContext()

    const handleChange = ()=>{
        value.setIsDark(prevState => !prevState)
    }

    return (
        <div className={`${css.SwitchBody} ${value.isDark&&css.dark}`} onClick={handleChange}>
            <img className={css.img} src={moon} alt=""/>
            <img className={css.img} id={css.white} src={sun} alt=""/>
            <div className={`${css.switcher} ${value.isDark?css.ToRight:css.ToLeft}`}></div>
        </div>
    );
};

export {ThemeSwitch};