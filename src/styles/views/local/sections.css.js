import styled from "styled-components";

const cssSections = {
    FilterSection: styled.section`
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: flex-start;
        row-gap: 1em;
        padding: 1em;
        background-color: var(--color-3);
        min-width: fit-content;
        height: fit-content;
        margin-top: 3.7rem;
        border-radius: 0 1rem 1rem 0;
        box-shadow: 0 0 5rem rgba(0,0,0,0.3);
        position: sticky;
        top: 3.7rem;
        z-index: 5;
            > div:first-child {
                display: flex;
                flex-flow: row nowrap;
                justify-content: center;
                align-items: center;
                column-gap: 1rem;
                & h3 {
                    text-shadow: 0px 4px 4px rgba(191,180,148, 0.79);
                    letter-spacing: 0.2em;
                    cursor: pointer;
                }
                & button {
                    display: none;
                }
            }
            > div:nth-of-type(2) {
                display: flex;
                flex-flow: column nowrap;
                align-items: center;
                justify-content: center;
                row-gap: 0.7rem;
                & h4 {
                    margin-bottom: 0.3rem;
                }
            }            
            > button {
                margin: 0.7rem 0;
            }

        @media (max-width: 960px) {           
            top: 0;
            margin-top: 0;
            background-color: var(--color-2);
            background: linear-gradient(0deg, var(--color-1) 30%, transparent 100%);
            border-radius: 1rem;
            box-shadow: none;
            width: calc(100% - 2rem);
            max-width: 43rem;
            > div:first-child {
                & button {
                    display: block;
                }
            }
            > div:nth-of-type(2) {               
                flex-flow: row wrap;
                column-gap: 1rem;
            }            
        }    
        @media (max-width: 736px) { 
            min-width: min-content;          
            width: 20rem;      
        }         
    `,
    CardsSection: styled.section`
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: center;
        row-gap: 1em;
        padding: 1em;
        width: 100%;
        flex-grow: 1;
        > ul {
            flex-wrap: wrap;
            justify-content: center;
            row-gap: 0.5em;
        }

        @media (max-width: 390px) {
            > ul > li:first-child, li:nth-last-child(2) {
                display: none;
            }            
        } 
    `,
    GameSection: styled.section`
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: center;
        row-gap: 1em;
        padding: 1em;
        width: 100%;
        > h1 {
            font-size: 3rem;
            text-shadow: 0px 4px 4px rgba(255,235,179, 0.79);

        }
        > h2 {
            font-size: 1.8rem;
            margin-bottom: -0.8rem;
        }
    `,
   
}

export default cssSections;