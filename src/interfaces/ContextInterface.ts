import {IState} from "../types/stateType";

interface IContext{
    isDark:boolean;
    setIsDark:IState<boolean>
}

export type {IContext}