//  THIS PAGE LISTS ALL THE BLOGS

import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"



const BlogIndex = ({ data }) => {
  const { edges: posts } = data.allMdx
  console.log(data)
  return (
    <Layout pageTitle="Blog">
    <BlogListWrapper>
      <ul>
        {posts.map(({ node: post }) => (
          <li key={post.id}>
            <BlogLink to={`${post.frontmatter.slug}`}>
              <h2>{post.frontmatter.title}</h2>
              <h4 style={{ lineHeight: "1.7", fontWeight: "normal" }}>
                {post.frontmatter.preview}
              </h4>
              <h4>Read more →</h4>
            </BlogLink>
          </li>
        ))}
      </ul>
    </BlogListWrapper>
    </Layout>
  )
}

export const pageQuery = graphql`
  query blogIndex {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          body
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


const BlogListWrapper = styled.div`
    max-width: 750px;
    padding-top: 2em;
    margin: auto;
    
`;
const BlogLink = styled(props => <Link {...props} />)`
    color: black;
    &:hover {
    color: rgb(92, 92, 92);
    }
`;
