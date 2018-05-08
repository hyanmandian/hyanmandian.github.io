import { injectGlobal } from 'styled-components';
import 'sanitize.css/sanitize.css';

export const theme = {
  color: {
    codGray: '#1e1e1e',
    anakiwa: '#9cdcfe',
    akaroa: '#d3d3a3',
  },
  font: {
    family: `'Lato', sans-serif`,

    tiny: '0.75rem',
    small: '0.85rem',
    base: '1rem',
    medium: '1.125rem',
    large: '1.5rem',

    light: '300',
    normal: '400',
    bold: '700',
  },
};

injectGlobal`
  body {
    background: ${theme.color.codGray};
    color: ${theme.color.anakiwa};
    font-family: ${theme.font.family};
  }
`;
