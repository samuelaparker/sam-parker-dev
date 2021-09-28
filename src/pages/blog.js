//  THIS PAGE LISTS ALL THE BLOGS

import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import styled from "styled-components";

const BlogIndex = ({ data }) => {

  console.log(data.allMdx.nodes[0].frontmatter.slug);
  return (
    <Layout pageTitle="Blog">
      <BlogListWrapper>
        {data.allMdx.nodes.map(node => (
          <article key={node.frontmatter.id}>
            <BlogLink to={`${node.frontmatter.slug}`}>
              <h2>{node.frontmatter.title}</h2>
              <h4 style={{ lineHeight: "1.7", fontWeight: "normal" }}>
                {node.frontmatter.preview}
              </h4>
              <h4>Read more →</h4>
            </BlogLink>
          </article>
        ))}
      </BlogListWrapper>
    </Layout>
  );
};
// const BlogIndex = ({ data }) => {
//   return (
//     <Layout pageTitle="My Blog Posts">
//       <BlogListWrapper>
//       {
//         data.allMdx.nodes.map((node) => (
//           <article key={node.id}>
//             <BlogLink>{node.frontmatter.title}</BlogLink>
//             <p>Posted: {node.frontmatter.date}</p>
//           </article>
//         ))
//       }
//       </BlogListWrapper>
//     </Layout>
//   )
// }

// export const pageQuery = graphql`
//   query blogIndex {
//     allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
//       edges {
//         node {
//           id
//           body
//           frontmatter {
//             title
//             preview
//             slug
//           }
//         }
//       }
//     }
//   }
// `

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          preview
          slug
        }
        id
        body
      }
    }
  }
`;

export default BlogIndex;

const BlogListWrapper = styled.div`
  max-width: 750px;
  height: 100vh;
  padding-top: 2em;
  margin: auto;
`;
const BlogLink = styled((props) => <Link {...props} />)`
  color: black;
  &:hover {
    color: rgb(92, 92, 92);
  }
`;
