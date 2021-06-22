import * as React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'

const BlogPage = ({ data }) => {
    console.log(data)

    return (
      <Layout pageTitle="My Blog Posts">
        <div>
        {
            data.allFile.nodes.map(node => (
                <p key={node.name}>{node.name}</p>
            ))
        }
        </div>
      </Layout>
    )
  }

  export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
  `
  export default BlogPage
  


