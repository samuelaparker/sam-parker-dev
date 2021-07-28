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
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        typekit: {
          id: process.env.TYPEKIT_ID,
        },
      },
    },
    {
      resolve: `gatsby-plugin-recaptcha`,
      options: {
         async: false,
         defer: false,
         args: ``,
      },
   },
   {
    resolve: `gatsby-plugin-styled-components`,
    options: {
      // Add any options here
    },
  },
    `gatsby-plugin-mdx`,
  ],
};
