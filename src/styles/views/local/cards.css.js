import styled from "styled-components";

const cssCards = {
    CardsContainer: styled.div`
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;
        column-gap: 3rem;
        row-gap: 2rem;
        width: 100%;
    `,
    Card: styled.div`
        background-color: var(--color-3);
        display: flex;
        flex-flow: column nowrap;
        width: 100%;
        max-width: 20rem;
        height: 23rem;
        border-radius: 1rem;
        box-shadow: 0 0 5rem rgba(0,0,0,0.3);
        transition: 0.4s;
        overflow: hidden;
        &:hover {
            background-color: var(--color-2);
            transform: translateY(-50px) rotate(-5deg);
            box-shadow: 0 0 5rem rgba(0,0,0,0.5);
            cursor: pointer;
        }
    `,
    Image: styled.div`
        background-image: url(${({ background }) => background});
        border-radius: 1rem 1rem 0 0;
        height: 11.5rem;
        background-color: #000;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-position: center;
    `,
    Title: styled.h2`
        margin-inline: 0.5em;
        color: var(--color-1);
        font-size: 1.8em;
        text-shadow: 0px 4px 4px rgba(128, 0, 0, 0.79);
        -webkit-text-stroke: 1px black;
        paint-order: stroke fill;
    `,
    Info: styled.div`
        display: flex;
        flex-flow: column nowrap;
        align-items: flex-start;
        justify-content: space-around;
        flex-grow: 1;
        margin-inline: 1em;
        margin-bottom: 0.2em;
        font-size: 1.2em;
        > p > span {
            display: inline-block;
            min-width: 5em;
            font-weight: bold;
        }
    `,    
}

export default cssCards;