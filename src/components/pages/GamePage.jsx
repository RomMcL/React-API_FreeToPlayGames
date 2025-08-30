import React from 'react';
import { useEffect } from 'react';
import { useUpdateEffect } from '../../custom-hooks/custom-hook-lib';

import { useParams } from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux';
import { changeSelectedGame } from '../../redux-state/redusers/data';

import ButtonBack from '../comps/ButtonBack';
import PhotoCarousel from '../comps/Carousel';
import Loader from '../views/local/Loader';
import ErrorBlock from '../views/local/ErrorBlock';

import fetchData from '../../services/fetch';
import replacingImages from '../../services/sanctionsImages';

import cssMain from '../../styles/views/global/main.css';
import cssSections from '../../styles/views/local/sections.css';
import cssGame from '../../styles/views/local/game.css';

const { MainContainer } = cssMain;
const { GameSection } = cssSections;
const { MainInfo, GameImg, GameInfo } = cssGame;

const GamePage = () => {

    const params = useParams();

    const selectedGame = useSelector(state => state.dataSlice.selectedGame);
    const isLoading = useSelector(state => state.dataSlice.isLoading);
    const error = useSelector(state => state.dataSlice.error);
    const isSanctions = useSelector(state => state.dataSlice.sanctions);
    const dispatch = useDispatch();

    useEffect(() => {   
        if (sessionStorage.getItem(`${params.gameID}`) !== null &&
            JSON.parse(sessionStorage.getItem(`${params.gameID}`))[1] >= new Date().getTime()) {
          dispatch(changeSelectedGame(JSON.parse(sessionStorage.getItem(`${params.gameID}`))[0]));    
        } else fetchData(`/game?id=${params.gameID}`, changeSelectedGame, isSanctions);
      }, []);
        
      useUpdateEffect(() => {
        const timeLimit = ((date = new Date()) => {return date.setMinutes(date.getMinutes() + 5)})();
        const storage = [selectedGame, timeLimit];
        sessionStorage.setItem(`${params.gameID}`, JSON.stringify(storage));
      }, [selectedGame]);

    const showScreenshots = () => {
      if (isSanctions) {
        return !!replacingImages(selectedGame.id).screenshots?.length 
        ? <PhotoCarousel 
            photo={isSanctions ? replacingImages(selectedGame.id).screenshots : selectedGame.screenshots}
          />
        : <p>Для этой игры скриншоты отсутствуют</p>
         
      } else if (!!selectedGame.screenshots?.length) {
          return  <PhotoCarousel 
                    photo={selectedGame.screenshots}
                  />        
      } else return <p>Для этой игры скриншоты отсутствуют</p>
    }

    return (      
        <MainContainer>
            {Object.keys(error).length !== 0 ? <ErrorBlock /> :
          <>
            {isLoading ? <Loader /> :
            (
              <GameSection>
                <h1>{selectedGame.title}</h1>
                <MainInfo>
                  <GameImg 
                    $background={isSanctions ? replacingImages(selectedGame.id).thumbnail : selectedGame.thumbnail}
                  />
                  <GameInfo>
                    <h3>Информация:</h3>
                    <p><span>Жанр:</span> {selectedGame.genre}</p>
                    <p><span>Разработчик:</span> {selectedGame.developer}</p>
                    <p><span>Издатель:</span> {selectedGame.publisher}</p>
                    <p><span>Дата релиза:</span> {selectedGame.release_date?.split("-").reverse().join(".")}</p>
                  </GameInfo>
                  <GameInfo>
                    <h3>Системные требования:</h3>
                    {selectedGame.minimum_system_requirements !== undefined ?
                      <>
                        <p><span>Система:</span> {selectedGame.minimum_system_requirements.os}</p>
                        <p><span>Процессор:</span> {selectedGame.minimum_system_requirements.processor}</p>
                        <p><span>Видео карта:</span> {selectedGame.minimum_system_requirements.graphics}</p>
                        <p><span>Память:</span> {selectedGame.minimum_system_requirements.memory}</p>
                        <p><span>Место на диске:</span> {selectedGame.minimum_system_requirements.storage}</p>
                      </>
                      : <p>Нет данных</p>
                    }
                  </GameInfo>
                </MainInfo>
                <h2>Скриншоты:</h2>
                {/* {!!selectedGame.screenshots?.length
                ? <PhotoCarousel 
                    photo={selectedGame.screenshots}
                  />
                : <p>Для этой игры скриншоты отсутствуют</p>
                } */}
                {showScreenshots()}
                <ButtonBack />
              </GameSection>          
            )
            }
          </>        
          } 
        </MainContainer>    
    )
}
  
export default GamePage;