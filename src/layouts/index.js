import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { ThemeProvider } from 'styled-components';

import { theme } from './styles';

const Layout = ({ children, data }) => (
  <main>
    <Helmet title={data.site.siteMetadata.title} />
    <ThemeProvider theme={theme}>
      {children()}
    </ThemeProvider>
  </main>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout;

export const query = graphql`
  query TemplateQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
