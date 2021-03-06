import { Global, css } from '@emotion/react'
import { colors } from './variables/colors'

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

        html,
        body,
        p,
        ol,
        ul,
        li,
        dl,
        dt,
        dd,
        blockquote,
        figure,
        fieldset,
        legend,
        textarea,
        pre,
        iframe,
        hr,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          margin: 0;
          padding: 0;
        }

        ul {
          list-style: none;
        }

        button,
        input,
        select,
        textarea {
          margin: 0;
        }

        html {
          box-sizing: border-box;
          font-size: 62.5%;
          font-family: 'Cabin', sans-serif;
          scroll-behavior: smooth;
        }

        *,
        *::before,
        *::after {
          box-sizing: inherit;
        }

        img,
        video {
          height: auto;
          max-width: 100%;
        }

        iframe {
          border: 0;
        }

        table {
          border-collapse: collapse;
          border-spacing: 0;
        }

        td,
        th {
          padding: 0;
        }

        td:not([align]),
        th:not([align]) {
          text-align: left;
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
          background: ${colors.fireEngineRed};
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
