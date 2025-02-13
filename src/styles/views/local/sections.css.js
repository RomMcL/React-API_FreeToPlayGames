import styled from "styled-components";

const cssSections = {
    FilterSection: styled.section`
        display: flex;
        flex-flow: column nowrap;
        
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