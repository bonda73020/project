import React from 'react';
import {Link, useLocation} from "react-router-dom";
import {ThemeSwitch} from "../ThemeSwitch/ThemeSwitch";
import {UserIcon} from "../UserIcon/UserIcon";
import css from './Header.module.css'
import {useAppContext} from "../../hooks/useAppContext";

const Header = () => {

    const links = ['Movies','Genres','Search']
    const value = useAppContext()

    const location = useLocation()

    return (
       <div className={`${css.Header} ${value.isDark?css.dark:''}`}>
           <h1>The MovieDB</h1>
           <div>
               {links.map((i,index)=><Link className={`${value.isDark ? css.dark : ''}`} id={`${location.pathname===`/${i}`?css.active:''}`} to={i} key={index}>{i}</Link>)}
           </div>
           <ThemeSwitch></ThemeSwitch>
           <UserIcon></UserIcon>
       </div>
    );
};

export {Header}