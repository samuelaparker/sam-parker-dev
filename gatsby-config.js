module.exports = {
  siteMetadata: {
    title: "Hello, I'm Sam Parker",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    `gatsby-plugin-styled-components`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images/`,
    //   },
    // },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog/`,
      }
    },
    `gatsby-plugin-mdx`,
  ],
};
