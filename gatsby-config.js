/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Starter Gatsby Blog`,
    titleTemplate: "%s · Starter bolg",
    description: `Gatsby, Tailwindcss and Mdx starter`,
    keywords: [`gatsby`, `tailwind`, `react`, `tailwindcss`],
    author: `@doe`,
    siteUrl: "https://www.doe.com", // No trailing slash allowed!
    image: "/images/doe.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@doe",
    lang: "en",
  },
  plugins: [
    "gatsby-plugin-postcss", 
    "gatsby-plugin-image", 
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp", 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: "/images/svg-icons/" 
        }
      }
    }
]
};