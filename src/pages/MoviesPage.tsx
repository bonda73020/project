import {FC} from 'react';

import {Movies} from "../components/MoviesContainer/Movies";

interface IProps {
}


const MoviesPage: FC<IProps> = () => {
    return (
        <div>
            <Movies></Movies>
        </div>
    );
};

export {MoviesPage};