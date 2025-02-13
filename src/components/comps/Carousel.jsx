import React from 'react';
import { Carousel } from 'antd';

import cssGame from '../../styles/views/local/game.css';

const { CarouselContainer, Slide } = cssGame;


const PhotoCarousel = (props) => {

    const { photo } = props;

    return (        
        <CarouselContainer>
            <Carousel arrows infinite={false}>
                {photo?.map(ph => (
                    <Slide key={ph.id} background={ph.image} />                                  
                ))}
            </Carousel>
        </CarouselContainer>      
    )
}

export default PhotoCarousel;