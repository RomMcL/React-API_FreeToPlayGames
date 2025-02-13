import styled from "styled-components";

const cssFooter = {
    FooterContainer: styled.footer`
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: center;
        column-gap: 1rem;
        row-gap: 0.5rem;
        width: 100%;
        height: fit-content;
        background-color: var(--color-2);
        background: linear-gradient(0deg, var(--color-2) 30%, var(--color-1) 100%);
        padding: 2.5rem 2rem 0.5rem;
        margin-top: -2rem;
        font-size: 1.3rem;

        @media (max-width: 751px) {
            justify-content: space-around;
            & button {
                order: -1;
                width: 70%;
            }
        }
        @media (max-width: 520px) {
            > div:first-child {
                order: 1;
            }
        }
    `,
    FooterElements: {
        CopyrightBlock: styled.div`
            width: max-content;
            display: flex;
            flex-flow: column nowrap;
            align-items: center;
            justify-content: center;
        `,
        ContactsBlock: styled.div`
            width: max-content;
            display: flex;
            flex-flow: row nowrap;
            justify-content: center;
            align-items: flex-start;
            column-gap: 1em;           
            & > div  {
                display: flex;
                flex-flow: column nowrap;
                justify-content: center;
                align-items: center;
                row-gap: 0.3em;
                & > div  {
                    display: flex;
                    flex-flow: row nowrap;
                    justify-content: center;
                    align-items: center;
                    column-gap: 0.5em;
                };
                > * > * > img {
                    max-height: 32px;
                    object-fit: contain;
                };
            }
        `,
    },

}

export default cssFooter;