import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { changeGamesList, changeSelectedGame } from '../../redux-state/redusers/data';

import cssMain from '../../styles/views/global/main.css';

const { MainContainer } = cssMain;

const ListPage = () => {

    const gamesList = useSelector(state => state.dataSlice.gamesList);
    const selectedGame = useSelector(state => state.dataSlice.selectedGame);
    const dispatch = useDispatch();



    const BASE_URL = 'https://free-to-play-games-database.p.rapidapi.com/api';
    const OPTIONS = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f858958a6amshc313acb38be0fd6p12e43ejsn128ec01297e2',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        },
    };

    const fetchData = async (request) => {
 
        try {            
            const response = await fetch(`${BASE_URL}${request}`, OPTIONS);
            if (!response.ok) throw new Error(response.status);                                                 
            const data = await response.json();
            dispatch(changeGamesList(data));
        } catch (err) {

            console.log(err.message);
             
        } finally {
            console.log(`Запрос обработан`);
        }
    };


    useEffect(() => {
        fetchData('/games');
    }, []);

    console.log(gamesList)

    
    return (      
    <MainContainer>

        <div>
            {
                gamesList?.map(game => (
                    <p key={game.id}>{game.title}</p>                                 
                ))
            }

        </div>

        <h1>List Page</h1>
               
    </MainContainer>     
    )
}
  
export default ListPage;