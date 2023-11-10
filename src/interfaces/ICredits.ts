import {ICastMember} from "../types/ICastMember";
import {ICrewMember} from "../types/ICrewMember";

export interface ICredits{
    id:number,
    cast:ICastMember[],
    crew:ICrewMember[]
}