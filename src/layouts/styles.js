import { injectGlobal } from 'styled-components';
import 'sanitize.css/sanitize.css';

export const theme = {
  color: {
    codGray: '#1e1e1e',
    anakiwa: '#9cdcfe',
    danube: '#5192c8',
    akaroa: '#d3d3a3',
  },
  font: {
    family: `'Merriweather', serif`,

    tiny: '0.75em',
    small: '0.85em',
    base: '1em',
    medium: '1.125em',
    large: '1.5em',

    light: '300',
    normal: '400',
    bold: '700',
  },
};

injectGlobal`
  body {
    background: ${theme.color.codGray};
    color: ${theme.color.anakiwa};
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
`;
