module.exports = {
  siteMetadata: {
    title: 'Jonathan Wynne | Senior React/ReactNative Developer',
    author: 'Jonathan Wynne',
    description: 'Jonathan Wynne site'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/profile.png' // This path is relative to the root of the site.
      }
    },
    'gatsby-plugin-sass'
  ]
}
