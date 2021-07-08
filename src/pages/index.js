import * as React from 'react'
import Layout from '../components/Layout'
import { Helmet } from 'react-helmet';
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components';

/*
NOTE RE StaticImage plugin:
The StaticImage component does not support higher-order components, which includes the styled function from 
libraries such as Emotion and styled-components. The parser relies on being able to identify StaticImage 
components in the source, and passing them to a function means this is not possible.
*/
const imageStyle = {
  marginTop: '1em'
}

const LayoutWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <Helmet
        title='Sam Parker / Samuel Parker - Developer'
        meta={[
          {
            name: 'Samuel Parker',
            content: 'Portfolio - samparker.dev',
          },
          {
            name: 'Sam Parker',
            content:
              'Sam Parker - samuelaparker - Front End Developer',
          },
        ]}>
      </Helmet>
      <LayoutWrapper>
        <p>Welcome</p>
      </LayoutWrapper>
      <div>
        <StaticImage style={imageStyle}
          src="../images/maine-coast.jpeg"
          alt="photo of the Maine coast."
        />
        <StaticImage style={imageStyle}
          src="../images/karl-magnuson-oFB97KdJBFk-unsplash.jpg"
          alt="photo of a beautiful lake in Maine."
        />
      </div>

    </Layout>
  )
}

export default IndexPage

