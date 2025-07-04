import React from 'react';
import { useSelector } from 'react-redux';

import SwitchSanctions from '../../comps/SwitchSanctions';
import Loader from './Loader';

import errorImage from '../../../images/boom.svg';

import cssLoaderError from '../../../styles/views/local/loader-error.css';

const { BlockContainer, BlockSanctins, BlockImage } = cssLoaderError;

const ErrorBlock = () => {

    const error = useSelector(state => state.dataSlice.error);
    const isSanctions = useSelector(state => state.dataSlice.sanctions);

    return (
        <BlockContainer>
            {!isSanctions ? 
                <>
                    <h2>Упс! Что-то сломалось...</h2>
                    <h3>{error.text}</h3>
                    <BlockSanctins>
                        <BlockImage $img={errorImage} />
                        <div>
                            <h4>Возможны санкционные ограничения со стороны API.</h4>
                            <h5>Решения:</h5>
                            <p>- использовать <b>VPN</b></p>
                            <b>или</b>
                            <p>- попробовать использовать</p>
                            <SwitchSanctions />
                        </div>                        
                    </BlockSanctins>
                    {error.type === 'http' ? <h4>Повторим запрос через {error.attempt * 5} секунд...</h4> :
                        <>
                            <h4>Возможные причины:</h4>
                            <p>Код 404 - ресурс не найден.</p>
                            <p>Код 5хх - ошибка сервера.</p>
                            <p>Failed to fetch - отсутствует интернет, санкции.</p>
                            <p>... и ещё сотня причин.</p>
                            <h4>Попробуйте перезагрузить страницу или зайти позже.</h4>
                        </>                
                    }  
                </> : 
                <>
                    {error.text.startsWith('Попытки были прерваны') ? 
                        <>
                            <h2>Обходим санкции...</h2>
                            <Loader />
                        </> : 
                        <>
                            <h2>Не вышло...</h2>
                            <BlockImage $img={errorImage} />
                            <h3>{error.text}</h3>
                            {error.type === 'http' && <h4>Повторим запрос через {error.attempt * 5} секунд...</h4>}
                        </>
                    }
                    
                </>
            }
                       
        </BlockContainer>
    )
}

export default ErrorBlock;