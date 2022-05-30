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
        icons: [
          {
            src: `icons/manifest-icon-192.maskable.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `icons/manifest-icon-512.maskable.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
        display: 'fullscreen'
      }
    },
    'gatsby-plugin-offline'
  ],
}
