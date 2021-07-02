//  THIS PAGE LISTS ALL THE BLOGS

import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import { blogLink, blogListWrapper } from './blog.module.css'


const BlogIndex = ({ data }) => {
  const { edges: posts } = data.allMdx
  
  return (
    <Layout pageTitle="Blog">
    <div className={blogListWrapper}>
      <ul>
        {posts.map(({ node: post }) => (
          <li key={post.id}>
            <Link className={blogLink} to={`${post.frontmatter.slug}`}>
              <h2>{post.frontmatter.title}</h2>
              <h4 style={{ lineHeight: "1.7", fontWeight: "normal" }}>
                {post.frontmatter.preview}
              </h4>
              <h4>Read more →</h4>
            </Link>
          </li>
        ))}
      </ul>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query blogIndex {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            preview
            slug
          }
        }
      }
    }
  }
`

export default BlogIndex