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
            width: 76px;
            aspect-ratio: 1 / 1;
            background-color: #fff;
 
        `,
        SiteName: styled.div`
            font-size: 2rem;
            color: var(--color-1);
            text-shadow: 0px 4px 4px rgba(128, 0, 0, 0.79);
            text-align: center;
            flex-grow: 1;

        `,
        
    }

}

export default cssHeader;