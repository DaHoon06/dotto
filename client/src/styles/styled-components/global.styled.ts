import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }

    a {
        cursor: pointer;
        text-decoration: none;
    }


    /* http://meyerweb.com/eric/tools/css/reset/ 
     v2.0 | 20110126
     License: none (public domain)
  */

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
        font-family: "Pretendard", "NanumSquare", "Nanum Gothic", sans-serif, "Noto Serif KR", serif, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    }

    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
        display: block;
    }


    html {
      width: 100%;
      box-sizing: border-box;
      min-width: 320px;
    }

    html, body, #__next {
      height: auto;
      min-height: 100vh;
        background-color: #fff;

          &::-webkit-scrollbar {
                width: 12px;
          }

          &::-webkit-scrollbar-track {
                background: #f1f1f1;
                border-radius: 4px;
          }

          &::-webkit-scrollbar-thumb {
                background-color: #888;
                border-radius: 8px;
                border: 1px solid #f1f1f1;
          }

          &::-webkit-scrollbar-thumb:hover {
                background: #555;
          }

          @media screen and (max-width: 769px) {
                &::-webkit-scrollbar {
                      width: 0;
                }
          }
    }
    
    html, body {
      height: 100%;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    #__next {
      min-height: 100%;
      display: flex;
      flex: 1;
      flex-direction: column;
    }

    html, body {
      width: 100%;
        overflow-y: auto;
        overflow-x: hidden;
        box-sizing: border-box;

        &::-webkit-scrollbar {
          width: 12px;
        }

        &::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 4px;
        }

        &::-webkit-scrollbar-thumb {
          background-color: #888;
          border-radius: 8px;
          border: 1px solid #f1f1f1;
        }

        &::-webkit-scrollbar-thumb:hover {
          background: #555;
        }

        @media screen and (max-width: 769px) {
          &::-webkit-scrollbar {
            width: 0;
          }
        }
    }

    body {
        transition: background 0.2s ease-in, color 0.2s ease-in;
        width: 100%;
        padding: 0;
        color: #222222;
        background-color: #f8f9fb;
    }

    #root {
        width: 100%;
    }

    ol, ul {
        list-style: none;
    }

    blockquote, q {
        quotes: none;
    }

    button {
        cursor: pointer;
        background: none;
        border: none;
        outline: none;
        color: #222;
    }

    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    select {
        appearance:none;
        border: 1px solid #999999;
        background-color: #ffffff;
    }

    input[type=text] {
        border: 1px solid #999999;
        background-color: #ffffff;
    }
    input[type=checkbox] {
        accent-color: #222;
    }

    :root {
      // 색상
      --white000: #fff;
      --white100: #fbfbfb;
      --white150: #f8f8f8;
      --black000: #000;
      --black050: #222;
      
      /**===============
        * 텍스트 색상
      =================**/
      --textDefault: #222;
      // white
      --textWhite000: #fff;

      // black
      --textBlack000: #000;
      --textBlack100: #181818;
      --textBlack200: #222;

      // gray
      --textGray000: #919191;
      --textGray100: #AEAEB2; 
      --textGray200: #C7C7CC;
      --textGray300: #D1D1D6;
      --textGray400: #E5E5EA;
      --textGray500: #F2F2F7;

      // red
      --textRed000: #FF533B;
    }


    html, body, body[data-theme="light"] {
      --white000: #fff;
      --white100: #fbfbfb;
      --white150: #f8f8f8;
      --black000: #000;
      --black050: #222;

      /**===============
        * 텍스트 색상
      =================**/
      --textDefault: #222;
      // white
      --textWhite000: #fff;

      // black
      --textBlack000: #000;
      --textBlack100: #181818;
      --textBlack200: #222;

      // gray
      --textGray000: #919191;
      --textGray100: #AEAEB2; 
      --textGray200: #C7C7CC;
      --textGray300: #D1D1D6;
      --textGray400: #E5E5EA;
      --textGray500: #F2F2F7;

      // red
      --textRed000: #FF533B;
    }

    body[data-theme="dark"] {
      --white000: #fff;
      --white100: #fbfbfb;
      --white150: #f8f8f8;
      --black000: #000;
      --black050: #222;

      // 버튼 색상
      --buttonNavy000: #fff;
      --buttonBlack000: #222222;
      --buttonGray000: rgba(2,2,2, 0.8);

      /**===============
        * 텍스트 색상
      =================**/
      --textDefault: #222;
      // white
      --textWhite000: #fff;

      // black
      --textBlack000: #000;
      --textBlack100: #181818;
      --textBlack200: #222;

      // gray
      --textGray000: #919191;
      --textGray100: #AEAEB2; 
      --textGray200: #C7C7CC;
      --textGray300: #D1D1D6;
      --textGray400: #E5E5EA;
      --textGray500: #F2F2F7;

      // red
      --textRed000: #FF533B;
    }
`;
