import styled from "styled-components";

const cssHeader = {
    HeaderContainer: styled.header`
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
        column-gap: 1em;
        width: 100%;
        height: fit-content;
        background-color: var(--color-2);
        background: linear-gradient(0deg, var(--color-1) 0%, var(--color-2)  70%);
        padding: 0.2rem 2rem 2.5rem;
        margin-bottom: -2.3rem;
    `,
    HeaderElements: {
        SiteLogo: styled.div`
            width: 5rem;
            aspect-ratio: 1 / 1;
            background-image: url(${props => props.$background});
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;

            @media (max-width: 465px) { 
                width: 3.5rem;
            }
        `,
        SiteName: styled.div`
            font-size: 2rem;
            color: var(--color-1);
            text-shadow: 0px 4px 4px rgba(128, 0, 0, 0.79);
            text-align: center;
            flex-grow: 1;

            @media (max-width: 570px) { 
                font-size: 1.5rem;
            }
            @media (max-width: 465px) { 
                font-size: 1.0rem;
            }
        `,
        
    }

}

export default cssHeader;