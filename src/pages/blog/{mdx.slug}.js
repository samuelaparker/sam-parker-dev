import React from "react";
import Layout from "../../components/layout";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

//blog posts are created with the gatsby File System Route API

const BlogPost = ({ data }) => {
  let { title } = data.mdx.frontmatter;
  let { body } = data.mdx;

  const image = getImage(data.mdx.frontmatter.hero_image);

  console.log(data.mdx.frontmatter.hero_image);

  return (
    <Layout pageTitle={title}>
      <GatsbyImage image={image} alt={data.mdx.frontmatter.hero_image_alt} />
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
        hero_image_alt
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
    }
  }
`;
