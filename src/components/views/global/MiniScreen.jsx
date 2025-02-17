import React from 'react';
import cssMiniScreen from '../../../styles/views/global/mini-screen.css';

const { MiniScreenContainer } = cssMiniScreen;

const MiniScreen = ({ width }) => {
    
    return (      
        <MiniScreenContainer>
            <h1>Упс!</h1>
            <p>Ширина экрана Вашего устройства {width}px.</p>
            <p>Приложению тесно!</p>
            <h4>Возвращайтесь с телефона, планшета, ноутбука или PC.</h4>
        </MiniScreenContainer>
    )
}
  
export default MiniScreen;