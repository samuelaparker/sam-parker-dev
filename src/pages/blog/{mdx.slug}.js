import React from "react";
import Layout from "../../components/layout";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

//blog posts are created with the gatsby File System Route API

const BlogPost = ({ data }) => {
  
  let { title } = data.mdx.frontmatter;
  let { body } = data.mdx;
  console.log(title);

  return (
    <Layout pageTitle={title}>
      <MDXRenderer>{body}</MDXRenderer>
    </Layout>
  );
};

export default BlogPost;

export const query = graphql`
  query($id: String = "") {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        date(formatString: "YYYY/MM/DD")
        slug
        preview
        title
      }
      body
    }
  }
`;
