import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { changeGamesList } from '../../redux-state/redusers/data';

import CardGame from '../views/local/CardGame';

import fetchData from '../../services/fetch';

import cssMain from '../../styles/views/global/main.css';
import cssSections from '../../styles/views/local/sections.css';
import cssCards from '../../styles/views/local/cards.css';

const { MainContainer } = cssMain;
const { FilterSection, CardsSection } = cssSections;
const { CardsContainer } = cssCards;

const ListPage = () => {

    const gamesList = useSelector(state => state.dataSlice.gamesList);



    useEffect(() => {
        fetchData('/games', changeGamesList);
    }, []);

  //  console.log(gamesList)

    
    return (      
        <MainContainer>

            <FilterSection>
                ФИЛЬТРЫ
            </FilterSection>

            <CardsSection>
                <h1>Список игр</h1>
                <CardsContainer>
                    {gamesList?.map(game => (
                        <CardGame key={game.id}
                            thumbnail={game.thumbnail}
                            title={game.title}
                            genre={game.genre}
                            publisher={game.publisher}
                            releaseDate={game.release_date.split("-").reverse().join(".")}
                            gameID={game.id}
                        />                                   
                    ))} 
                </CardsContainer>                               
            </CardsSection>
                
        </MainContainer>     
    )
}
  
export default ListPage;