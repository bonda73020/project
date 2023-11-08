import {FC} from 'react';
import {useSearchParams} from "react-router-dom";
import {Movies} from "../components/MoviesContainer/Movies";

interface IProps {
}


const MoviesPage: FC<IProps> = () => {

    const [query,setQuery] = useSearchParams({page:"1"})

    return (
        <div>
            <Movies></Movies>
        </div>
    );
};

export {MoviesPage};