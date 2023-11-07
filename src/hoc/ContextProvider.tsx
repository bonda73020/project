import {createContext, FC, ReactNode, useState} from 'react';
import {IContext} from "../interfaces/ContextInterface";

interface IProps {
    children:ReactNode
}

const Context = createContext<IContext>(null)
const ContextProvider: FC<IProps> = ({children}) => {
    const [isDark,setIsDark] = useState<boolean>(false)
    return (
        <Context.Provider value={{isDark,setIsDark}}>
            {children}
        </Context.Provider>
    );
};

export {ContextProvider,
    Context
};