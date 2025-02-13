import React from 'react';

import loaderImage from '../../../images/BugAnim.svg';

import cssLoaderError from '../../../styles/views/local/loader-error.css';

const { BlockContainer, BlockImage } = cssLoaderError;

const Loader = () => {

    return (       
        <BlockContainer>
            <h2>Загрузка...</h2>
            <BlockImage $img={loaderImage} />
            <h3>придётся подождать</h3>
        </BlockContainer>        
    )
}

export default Loader;