import {createContext, FC, ReactNode, useEffect, useState} from 'react';

import {IContext} from "../interfaces/ContextInterface";
import {IGenre} from "../interfaces/IGenre";
import {movieService} from "../services/movieService";

interface IProps {
    children:ReactNode
}

const Context = createContext<IContext>(null)
const ContextProvider: FC<IProps> = ({children}) => {
    const [isDark,setIsDark] = useState<boolean>(false)
    const [genres,setGenres] = useState<IGenre[]>([])

    useEffect(() => {
        movieService.getGenres().then(({data})=>setGenres(data.genres))
    }, []);


    return (
        <Context.Provider value={{isDark,setIsDark,genres}}>
            {children}
        </Context.Provider>
    );
};

export {ContextProvider,
    Context
};