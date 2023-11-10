import React, {FC} from 'react';
import {Movies} from "../components/MoviesContainer/Movies";
import {useAppContext} from "../hooks/useAppContext";
import {Genres} from "../components/genresContainer/Genres";

interface IProps {
}


const GenresPage: FC<IProps> = () => {
    const genres = useAppContext().genres
    return (
        <div>
            <Genres></Genres>
        </div>
    );
};

export {GenresPage};