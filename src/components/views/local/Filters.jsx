import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { changePlatform, changeGenre, changeSort } from '../../../redux-state/redusers/filters';

import RadioButton from '../../comps/RadioButton';
import SelectAntd from '../../comps/Select';

import options from '../../../services/filtersOptions';


const Filters = () => {

    const platform = useSelector(state => state.filtersSlice.platform);
    const genre = useSelector(state => state.filtersSlice.genre);
    const sort = useSelector(state => state.filtersSlice.sort);
    const dispatch = useDispatch();

    const changeFilterPlatform = (event) => {
        dispatch(changePlatform(event.target.value));
    };

    const changeFilterGenre = (value) => {
        dispatch(changeGenre(value));
    };

    const changeFilterSort = (event) => {
        dispatch(changeSort(event.target.value));
    };

    return (
        <div>
            <div>
                <h4>Платформа:</h4>
                <RadioButton 
                    options={options.platformOptions} 
                    defaultValue={platform} 
                    action={changeFilterPlatform} 
                />
            </div>
            <div>
                <h4>Жанр:</h4>
                <SelectAntd 
                    options={options.genresOptions} 
                    defaultValue={genre} 
                    action={changeFilterGenre} 
                />
            </div>
            <div>
                <h4>Сортировка:</h4>
                <RadioButton 
                    options={options.sortOptions} 
                    defaultValue={sort} 
                    action={changeFilterSort} 
                    size={'small'} 
                />
            </div>            
        </div>
    )
}

export default Filters;