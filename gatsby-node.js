//this file will query for MDX files and turn them into blog pages.
//this createPages API allows us to instruct Gatsby to create additional pages based on the criteria we specify.



const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  // destructure the createPage function from the actions object
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  // create blog post pages
  const posts = result.data.allMdx.edges

  // call `createPage` for each result
  posts.forEach(({ node }, index) => {
    createPage({
      path: node.frontmatter.slug,
      component: path.resolve(`./src/components/Posts-Page-Layout.js`),
      // you can use the values in this context in
      // our page layout component
      context: { id: node.id },
    })
  })
}
