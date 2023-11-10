import {IState} from "../types/stateType";
import {IGenre} from "./IGenre";

interface IContext{
    isDark:boolean;
    setIsDark:IState<boolean>;
    genres:IGenre[]
}

export type {IContext}