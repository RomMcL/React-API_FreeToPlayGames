import React from 'react';

import { useNavigate } from 'react-router-dom';

import cssCards from '../../../styles/views/local/cards.css';

const { Card, Image, Title, Info } = cssCards;

const CardGame = (props) => {
  
    const { thumbnail, title, genre, publisher, releaseDate, gameID, colorCard } = props;

    const navigate = useNavigate();


    const selectGameCard = (gameID) => {
      navigate(`/game/${gameID}`)
    }

    return (
      <>
        <Card onClick={selectGameCard.bind(this, gameID)} $colorCard={colorCard} >
            <Image $background={thumbnail} />
            <Title>{title}</Title>
            <Info>
                <p><span>Жанр:</span>{genre}</p>
                <p><span>Издатель:</span>{publisher}</p>
                <p><span>Дата релиза:</span>{releaseDate}</p>
            </Info>            
        </Card>        
      </>
    )
  }
  
  export default CardGame;