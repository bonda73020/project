import {FC} from 'react';
import {Outlet} from "react-router-dom";

import {Header} from "../components/Header/Header";
import css from './mainLayout.module.css'
import {useAppContext} from "../hooks/useAppContext";

interface IProps {
}


const MainLayout: FC<IProps> = () => {

    const isDark= useAppContext().isDark

    return (
        <div className={`${css.MainLayout} ${isDark?css.dark:''}`}>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export {MainLayout};