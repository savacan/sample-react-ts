import { css } from '@emotion/core';
import { Theme } from './theme';

const globalCss = (theme: Theme) => css`
* {
    font-family: -apple-system, BlinkMacSystemFont, "游ゴシック体", YuGothic, "Yu Gothic M", "游ゴシック Medium", "Yu Gothic Medium", "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN W3", HiraKakuProN-W3, "ヒラギノ角ゴ ProN", "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ Pro", "Hiragino Kaku Gothic Pro", "メイリオ", Meiryo, Osaka, "ＭＳ Ｐゴシック", "MS PGothic", "Helvetica Neue", HelveticaNeue, Helvetica, Arial, "Segoe UI", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    background-color: ${theme.palette.base};
    color: ${theme.palette.primary}
}
html, body, h1, h2, h3, h4, ul, ol, dl, li, dt, dd, p, div, span, img, a, table, tr, th, td {
    margin: 0;
    padding: 0;
    border: 0;
    font-weight: normal;
    font-size: 100%;
    vertical-align:baseline;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  article, header, footer, aside, figure, figcaption, nav, section { 
    display:block;
  }
  body {
    line-height: 1;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }
  ol, ul {
    list-style: none;
    list-style-type: none;
  }`

export default globalCss;