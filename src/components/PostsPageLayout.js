
//THIS FILE IS THE TEMPLATE FOR MDX FILES (BLOG POSTS)
import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx" 
import Layout from "./layout"
import components from "./mdxComponents"
import styled from "styled-components"

 function PostsPageLayout({ data }) {

//   const data = useStaticQuery(graphql`
//   query BlogPostQuery($id: String) {
//     mdx(id: { eq: $id }) {
//       id
//       body
//       frontmatter {
//         title
//         date
//         author
//         slug
//         preview
//       }
//     }
//   }
// `)

   
  return (
    <>
    <Layout pageTitle={data.mdx.frontmatter.slug}>
      <div style={{ display: "flex", flexDirection: "column", maxWidth: "750px", margin: "auto"}}>
        <div style={{display: "flex", flexDirection: "column", margin: "auto"}}>
        <h1 >{data.mdx.frontmatter.title}</h1>
        <h4
          style={{
            color: "gray",
            fontWeight: "normal",
          }}
        >{`${data.mdx.frontmatter.date} by ${data.mdx.frontmatter.author}`}</h4>
        </div>
        <MDXProvider components={components}>
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </MDXProvider>
      </div>
        <Spacer />
    </Layout>
    </>
  )
  
}

export default PostsPageLayout;

//When your site gets built, Gatsby will run your page query and pass the resulting data into your page component as a prop called data.
export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        date
        author
        slug
        preview
      }
    }
  }
`
 

const Spacer = styled.div`
   height: 9rem;
   `;