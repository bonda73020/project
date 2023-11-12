import {FC} from 'react';

import {SearchPanel} from "../components/SearchPanel/SearchPanel";
import {Movies} from "../components/MoviesContainer/Movies";

interface IProps {
}


const SearchPage: FC<IProps> = () => {
    return (
        <div>
            <SearchPanel></SearchPanel>
            <Movies></Movies>
        </div>
    );
};

export {SearchPage};