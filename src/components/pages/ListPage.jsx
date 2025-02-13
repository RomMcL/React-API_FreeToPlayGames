import React from 'react';

import { useSelector, useDispatch } from "react-redux";
import { changeGamesList, changeSelectedGame } from '../../redux-state/redusers/data';

import cssMain from '../../styles/views/global/main.css';

const { MainContainer } = cssMain;

const ListPage = () => {

    const gamesList = useSelector(state => state.dataSlice.gamesList);
    const selectedGame = useSelector(state => state.dataSlice.selectedGame);
    const dispatch = useDispatch();
    
    return (      
    <MainContainer>
        <h1>List Page</h1>

        <div>
            <h2 onClick={() => dispatch(changeGamesList('есть список'))}>Список</h2>
            <h2 onClick={() => dispatch(changeSelectedGame('есть игра'))}>Игра</h2>
            <p>Список: {gamesList}</p>
            <p>Игра: {selectedGame}</p>
        </div>
        
    </MainContainer>     
    )
}
  
export default ListPage;