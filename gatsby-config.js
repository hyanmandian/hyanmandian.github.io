module.exports = {
  siteMetadata: {
    title: 'Hyan Mandian',
    author: 'Hyan Mandian',
    description: 'A simple tool to help me share things I learned.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'Lato\:300,400,700',
        ],
      },
    },
  ],
};
