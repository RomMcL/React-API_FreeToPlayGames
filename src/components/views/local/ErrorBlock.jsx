import React from 'react';

import { useSelector } from 'react-redux';

import errorImage from '../../../images/boom.svg';

import cssLoaderError from '../../../styles/views/local/loader-error.css';

const { BlockContainer, BlockImage } = cssLoaderError;

const ErrorBlock = () => {

    const error = useSelector(state => state.dataSlice.error);

    return (
        <BlockContainer>
            <h2>Упс! Что-то сломалось...</h2>
            <h3>{error.text}</h3>
            <BlockImage $img={errorImage} />
            {error.type === 'http' ? <h4>Повторим запрос через {error.attempt * 5} секунд...</h4> :
                <>
                    <h4>Возможные причины:</h4>
                    <p>Код 404 - ресурс не найден.</p>
                    <p>Код 5хх - ошибка сервера.</p>
                    <p>Failed to fetch - отсутствует интернет.</p>
                    <p>... и ещё сотня причин.</p>
                    <h4>Попробуйте перезагрузить страницу или зайти позже.</h4>
                </>                
            }               
        </BlockContainer>
    )
}

export default ErrorBlock;