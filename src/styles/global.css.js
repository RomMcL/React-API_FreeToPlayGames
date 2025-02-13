import { createGlobalStyle } from 'styled-components';

import CaveatTTF from './../font/Caveat-VariableFont_wght.ttf';

export default createGlobalStyle `

    @font-face {
        font-family: 'caveat';
        src: url(${CaveatTTF}) format('truetype');
        font-weight: normal;
        font-style: normal;
    }
   
/* Цветовая схема */
    :root {
    --color-1: rgba(191,180,148,1); /* #bfb494 */
    --color-2: rgba(255,216,107,1); /* #ffd86b */
    --color-3: rgba(255,235,179,1); /* #FFEBB3 */
    
    }

/* Сброс стилей */

    *, *::after, *::before, input, button, textarea {
    box-sizing: border-box;
    }

    body {
    height: 100vh;
    margin: 0;
    font-family: caveat, Arial, Helvetica, sans-serif;
    background-color: var(--color-1);
    }

    h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    }

    a {
    color: inherit;
    }

    ul, ol {
    margin: 0;
    padding: 0;
    list-style: none;
    }

    input, button, textarea, select {
    font-family: inherit;
    }

/* Фиксация футера */

    #root {
    height: 100%;
    display: flex;
    flex-direction: column;
    }
` 