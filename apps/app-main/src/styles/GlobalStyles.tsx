import { Global, css } from '@emotion/react'

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        @font-face {
          font-family: 'Cabin';
          font-style: normal;
          font-weight: 400;
          src: url('/Cabin-Regular.ttf') format('truetype');
        }

        @font-face {
          font-family: 'Cabin';
          font-style: normal;
          font-weight: 700;
          src: url('/Cabin-Bold.ttf') format('truetype');
        }

        @font-face {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 400;
          src: url('/Roboto-Regular.ttf') format('truetype');
        }

        @font-face {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 700;
          src: url('/Roboto-Bold.ttf') format('truetype');
        }

        :root {
          /* Colors */
          --richBlack: '#00171F';
          --eerieBlack: '#272727';
          --battleshipgrey: '#8c8c8c';
          --rust: '#A44200';
          --redcrayola: '##f03252';
          --fireenginered: '#C1292E';
          --sunglow: '#F9CB40';
          --brightyellocrayola: '#FCAB10';
          --snow: '#FFFCFF';
          --cultured: '#FCFAFA';

          /* Typography */
          --headingFont: 'Cabin', sans-serif;
          --bodyFont: 'Cabin', sans-serif;

          --baseFontSize: 1.6rem;
          --smallFontSize: 1.28rem;
          --smallestFontSize: 0.819rem;

          --heading-1: 3.125rem;
          --heading-2: 2.5rem;
          --heading-3: 2rem;
          --heading-4: var(--baseFontSize);
          --heading-5: var(--smallFontSize);
          --heading-6: 1.024rem;
          --heading-7: var(--smallestFontSize);

          /* z-index */
          --headerLevel: 10;
          --highestLevel: 100;
        }

        html {
          font-size: 62.5%;
          box-sizing: border-box;
          scroll-behavior: smooth;
        }

        body {
          font-family: 'Cabin', sans-serif;
          font-weight: 400;
          line-height: 1.75;
          padding: 0;
          margin: 0;
        }

        *,
        *::before,
        *::after {
          box-sizing: inherit;
        }

        p {
          margin-bottom: 1rem;
        }

        h1,
        h2,
        h3,
        h4,
        h5 {
          margin: 3rem 0 1.38rem;
          font-family: 'Cabin', sans-serif;
          font-weight: 400;
          line-height: 1.3;
        }

        h1 {
          margin-top: 0;
          font-size: var(--heading-1);
        }

        h2 {
          font-size: var(--heading-2);
        }

        h3 {
          font-size: var(--heading-3);
        }

        h4 {
          font-size: var(--heading-4);
        }

        h5 {
          font-size: var(--heading-5);
        }

        h6 {
          font-size: var(--heading-6);
        }

        ul {
          list-style: none;
        }

        #nprogress {
          pointer-events: none;
        }

        #nprogress .bar {
          position: fixed;
          z-index: 1000;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 5px;
          background: var(--fireEngineRed);
        }

        #nprogress::after {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 0.5rem;
          background: transparent;
        }
      `}
    />
  )
}

export default GlobalStyles
