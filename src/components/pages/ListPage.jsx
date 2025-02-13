import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { changeGamesList } from '../../redux-state/redusers/data';
import { changeCurrentPage, changeSize } from '../../redux-state/redusers/pagination-gamelist';

import CardGame from '../views/local/CardGame';
import Pagination from '../comps/Pagination';
import Loader from '../views/local/Loader';
import ErrorBlock from '../views/local/ErrorBlock';

import fetchData from '../../services/fetch';
import { abortController, reinitController } from '../../services/abortController';

import cssMain from '../../styles/views/global/main.css';
import cssSections from '../../styles/views/local/sections.css';
import cssCards from '../../styles/views/local/cards.css';

const { MainContainer } = cssMain;
const { FilterSection, CardsSection } = cssSections;
const { CardsContainer } = cssCards;

const ListPage = () => {

    const gamesList = useSelector(state => state.dataSlice.gamesList);
    const currentPage = useSelector(state => state.paginationSlice.currentPage);
    const pageSize = useSelector(state => state.paginationSlice.pageSize);
    const isLoading = useSelector(state => state.dataSlice.isLoading);
    const error = useSelector(state => state.dataSlice.error);
    const dispatch = useDispatch();


    useEffect(() => {
        !gamesList.length && fetchData('/games', changeGamesList);
        return () => {
            abortController();
            reinitController();
        };
    }, []);


    const renderPaginationData = () => {
        const lastDataIndex = currentPage * pageSize;
        const firstDataIndex = lastDataIndex - pageSize;
        const paginationData = Object.keys(error).length === 0 && gamesList.slice(firstDataIndex, lastDataIndex);
        return (
            paginationData?.map(game => (
                <CardGame key={game.id}
                    thumbnail={game.thumbnail}
                    title={game.title}
                    genre={game.genre}
                    publisher={game.publisher}
                    releaseDate={game.release_date.split("-").reverse().join(".")}
                    gameID={game.id}
                />                                   
            ))
        );
    };

    const changePaginate = (pageNumber) => {
        dispatch(changeCurrentPage(pageNumber));
    }

    const changePageSize = (numberCards) => {
        dispatch(changeSize(numberCards));
    }
    
    return (      
        <MainContainer>
            {Object.keys(error).length !== 0 ? <ErrorBlock /> :
            <>
                <FilterSection>
                    ФИЛЬТРЫ                   
                </FilterSection>
                <CardsSection>
                    <h1>Список игр</h1>
                    <CardsContainer>
                        {isLoading ? <Loader /> : renderPaginationData()} 
                    </CardsContainer>
                    {!isLoading && <Pagination 
                        total={gamesList.length}
                        currentPage={currentPage}
                        pageSize={pageSize}
                        arrSizes={[10, 20, 50]}
                        changePaginate={changePaginate}
                        changePageSize={changePageSize}
                    />}                                
                </CardsSection>
            </>
            }                
        </MainContainer>     
    )
}
  
export default ListPage;