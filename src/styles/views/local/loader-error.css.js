import styled from "styled-components";

const cssLoaderError = {
    BlockContainer: styled.div`
        width: 100%;
        height: fit-content;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: center;
        row-gap: 1em;
        font-size: 1.5rem;
        text-align: center;
        align-self: center;

        @media (max-width: 570px) {            
            font-size: 1.0rem;                       
        }

    `,
    BlockSanctins: styled.div`
        width: 100%;
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
    `,
    BlockImage: styled.div`
        width: 50%;
        max-width: 150px;
        aspect-ratio: 1 / 1.2;
        background-image: url(${props => props.$img});
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;

        @media (max-width: 570px) {            
            max-width: 100px;                       
        }
    `,
  
}

export default cssLoaderError;