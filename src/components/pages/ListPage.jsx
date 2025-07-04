import React from 'react';
import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { changeGamesList } from '../../redux-state/redusers/data';
import { changeCurrentPage, changeSize } from '../../redux-state/redusers/pagination-gamelist';
import { changeisShowFilters } from '../../redux-state/redusers/filters';
import { changeScroll } from '../../redux-state/redusers/scroll';

import { useResize, useUpdateEffect } from '../../custom-hooks/custom-hook-lib';

import CardGame from '../views/local/CardGame';
import Pagination from '../comps/Pagination';
import Loader from '../views/local/Loader';
import ErrorBlock from '../views/local/ErrorBlock';
import Filters from '../views/local/Filters';
import ButtonShow from '../comps/ButtonShow';
import ButtonLoading from '../comps/ButtonLoading';
import SwitchSanctions from '../comps/SwitchSanctions';

import fetchData from '../../services/fetch';

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
    const isShowFilters = useSelector(state => state.filtersSlice.isShowFilters);
    const platform = useSelector(state => state.filtersSlice.platform);
    const genre = useSelector(state => state.filtersSlice.genre);
    const sort = useSelector(state => state.filtersSlice.sort);
    const isSanctions = useSelector(state => state.dataSlice.sanctions);
    const dispatch = useDispatch();

    const { isScreenTablet } = useResize();

    const request = useRef(``);

    const applyFilters = () => {
        request.current = `/games?platform=${platform}&sort-by=${sort}`;
        genre !== 'all' && (request.current += `&category=${genre}`);

        fetchData(request.current, changeGamesList, isSanctions);
        // сворачивание на малых экранах
        !isScreenTablet && dispatch(changeisShowFilters(false));
        // сброс пагинации
        dispatch(changeCurrentPage(1));
    }

    useEffect(() => {
        dispatch(changeisShowFilters(isScreenTablet));
    }, [isScreenTablet]);

    useEffect(() => {
        !gamesList.length && applyFilters();

        const handleScroll = (e) => {
            dispatch(changeScroll(window.scrollY));      
          }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useUpdateEffect(() => {
        applyFilters();
    }, [isSanctions]);


    const colorCard = (gameID) => {
        if (sessionStorage.getItem(`${gameID}`) !== null &&
            JSON.parse(sessionStorage.getItem(`${gameID}`))[1] >= new Date().getTime()) {
            return 'var(--color-1)';
        }
        return 'var(--color-3)';
    }

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
                    colorCard={colorCard(game.id)}
                />                                   
            ))
        );
    };

    const changePaginate = (pageNumber) => {
        dispatch(changeCurrentPage(pageNumber));
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }

    const changePageSize = (numberCards) => {
        dispatch(changeSize(numberCards));
    }   
    
    return (      
        <>
            <MainContainer>
                {Object.keys(error).length !== 0 ? <ErrorBlock /> :
                <>
                    <FilterSection>
                        <div>
                            <h3 onClick={() => dispatch(changeisShowFilters(!isShowFilters))}>ФИЛЬТРЫ</h3>
                            <ButtonShow action={() => dispatch(changeisShowFilters(!isShowFilters))} show={isShowFilters}/>
                        </div>
                        {isShowFilters && (
                            <>
                                <Filters />
                                <ButtonLoading action={applyFilters}>
                                    Применить фильтры
                                </ButtonLoading>
                                {isSanctions && <SwitchSanctions />}                                
                            </>
                        )} 
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
        </>
           
    )
}
  
export default ListPage;