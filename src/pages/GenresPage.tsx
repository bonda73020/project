import React, {FC} from 'react';
import {Genres} from "../components/genresContainer/Genres";

interface IProps {
}


const GenresPage: FC<IProps> = () => {
    return (
        <div>
            <Genres></Genres>
        </div>
    );
};

export {GenresPage};