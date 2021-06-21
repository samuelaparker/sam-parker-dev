import * as React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import { image, layoutWrapper } from '../components/layout.module.css'

const IndexPage = () => {
    
  return (
    <Layout pageTitle="Home">
    <div className={layoutWrapper}>
      <p>This site is a showcase of my development skills.</p>
      </div>
      <div>
      <StaticImage className={image} 
      src="https://images.unsplash.com/photo-1601512417103-2547f446b3cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3300&q=80" 
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

//test deploy