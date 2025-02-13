import React from 'react';

import ButtonBack from '../comps/ButtonBack';

import cssMain from '../../styles/views/global/main.css';

const { MainContainer } = cssMain;

const GamePage = () => {
    
    return (      
    <MainContainer>
        <h1>Game Page</h1>
        <ButtonBack />
    </MainContainer>
    
    )
}
  
export default GamePage;