/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  pathPrefix: "/rhytest",
  siteMetadata: {
    title: `Rhymry`,
    titleTemplate: `%s | Rhymry`,
    siteUrl: `https://burraksumer.github.io/rhytest/`,
    description: `A poem site founded by a bunch of literature student who wants to share their works hoping that they are good at writing pretty much, anything.`,
    author: `Rhymry`,
    twitterUsername: `@twt`,
    viewport: "width=device-width, initial-scale=1.0",
    charset:"UTF-8",
    keywords: [
      "poems",
      "poets",
      "blog posts",
      "literature",
      "english literature",
      "contemporary literature",
    ],
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rhymry - A lovely poem site`,
        short_name: `Rhymry`,
        start_url: `/rhytest`,
        background_color: `#0027EC`,
        theme_color: `#0027EC`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 600,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/images`,
      },
    },
  ],
}
