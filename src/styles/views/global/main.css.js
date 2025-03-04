import styled from "styled-components";

const cssMain = {
    MainContainer: styled.main`
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: flex-start;
        flex-grow: 1;
        width: 100%;
        z-index: 1;

        @media (max-width: 960px) {
            flex-flow: column nowrap;
            align-items: center;            
        }
    `,
   
}

export default cssMain;