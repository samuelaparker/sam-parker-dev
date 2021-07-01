import * as React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import { image, layoutWrapper } from '../components/layout.module.css'

const IndexPage = () => {
    
  return (
    <Layout pageTitle="Home">
    <div className={layoutWrapper}>
      <p>Welcome</p>
      </div>
      <div>
      <StaticImage className={image} 
      src="../images/maine-coast.jpeg" 
      alt="photo of the Maine coast."
      />
      <StaticImage className={image} 
      src="../images/karl-magnuson-oFB97KdJBFk-unsplash.jpg"
      alt="photo of a beautiful lake in Maine."
      />
      </div>
     
    </Layout>
  )
}

export default IndexPage

