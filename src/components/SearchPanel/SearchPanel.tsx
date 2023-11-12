import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {useSearchParams} from "react-router-dom";

import {searchValidator} from "../../validators/searchValidator";
import css from './SearchPanel.module.css'
import {useAppContext} from "../../hooks/useAppContext";

const SearchPanel = () => {
    const [,setQuery] = useSearchParams()
    const {register,handleSubmit,formState:{errors}} = useForm<{keyWord:string}>({
        mode:'onBlur',
        resolver:joiResolver(searchValidator)
    })
    const {isDark} = useAppContext()
    const save:SubmitHandler<{keyWord:string}> = ({keyWord})=>{
        setQuery(prev => {
            prev.set('with_keywords',keyWord)
            return prev
        })
    }
    return (
        <div>
            <form className={`${css.SearchPanel} ${isDark?css.dark:''}`} onSubmit={handleSubmit(save)}>
                <input type="text" placeholder={'You search request'} {...register('keyWord')}/>
                <button> Search</button>
            </form>
            {errors.keyWord&&<div>{errors.keyWord.message}</div>}
        </div>
    );
};

export {SearchPanel};