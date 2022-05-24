/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

 module.exports = {
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Gianvito Difilippo',
        short_name: 'Gianvito Difilippo',
        start_url: '/',
        icon: 'src/assets/favicon.png',
        display: 'standalone'
      }
    },
    'gatsby-plugin-offline'
  ],
}
