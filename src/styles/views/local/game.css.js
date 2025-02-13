import styled from "styled-components";

const cssGame = {
    MainInfo: styled.div`
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: flex-start;        
        column-gap: 1em;
        row-gap: 1em;
        width: 100%;        
    `,
    GameImg: styled.div`
        background-image: url(${props => props.$background});
        border-radius: 1rem;
        width: 100%;
        max-width: 360px;        
        aspect-ratio: 1.8 / 1;
        background-color: #000;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-position: center;

    `,
    GameInfo: styled.div`
        display: flex;
        flex-flow: column nowrap;
        align-items: flex-start;
        justify-content: center;        
        row-gap: 0.5em;
        width: fit-content;
        > h3 {
            font-size: 1.5rem;
        }
        > p > span {
            font-weight: bold;
        }        
    `,
    CarouselContainer: styled.div`
        width: 100%;
        max-width: 800px;
        aspect-ratio: 1.7 / 1;
        border-radius: 1rem;

    `,
    Slide: styled.div`
        width: 100%;
        aspect-ratio: 1.7 / 1;
        border-radius: 1rem;        
        background-color: #000;
        background-image: url(${props => props.$background});
        background-size: 92% 92%;
        background-repeat: no-repeat;
        background-position:  center;        
    `,   
}

export default cssGame;