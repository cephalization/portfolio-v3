/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Anthony Powell | Portfolio`,
    siteUrl: `https://www.anthonypowell.me/`,
    description: `Anthony Powell's Portfolio`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Rubik`,
          },
          {
            family: `Roboto`,
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /src\/components\/icons/, // See below to configure properly
        },
      },
    },
  ],
}
