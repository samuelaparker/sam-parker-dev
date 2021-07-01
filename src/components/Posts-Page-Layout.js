
//THIS FILE IS THE TEMPLATE FOR MDX FILES (BLOG POSTS)
import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/Layout"
import components from "./mdxComponents"

export default function PageTemplate({ data: { mdx } }) {
  return (
    <Layout>
      <div style={{ padding: "0 1rem", marginBottom: "10rem" }}>
        <h1>{mdx.frontmatter.title}</h1>
        <h4
          style={{
            color: "gray",
            fontWeight: "normal",
          }}
        >{`${mdx.frontmatter.date} by ${mdx.frontmatter.author}`}</h4>
        <MDXProvider components={components}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </div>
    </Layout>
  )
}
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
      }
    }
  }
`

