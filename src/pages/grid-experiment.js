import React from 'react'
import Layout from '../components/layout'
import { StyledLink } from '../assets/GlobalStyles'
import { Helmet } from 'react-helmet';


const GridExperiment = () => {
    console.log(StyledLink)
    return (
        <Layout>
        <Helmet
        title='grid-experiment'
        meta={[
          {
            name: 'Samuel Parker',
            content: 'grid-experiment - samparker.dev',
          },
          {
            name: 'Sam Parker',
            content:
              '',
          },
        ]}>
      </Helmet>
        <div>
            <h1>Grid Experiment</h1>
            <StyledLink to="/experiments">Go back</StyledLink>
        </div>
        </Layout>
    )
}

export default GridExperiment