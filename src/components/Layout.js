import * as React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import { useStaticQuery, graphql } from 'gatsby'
import { container, heading, siteTitle, layoutWrapper } from './layout.module.css'


const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
    query {
        site {
          siteMetadata {
            title
          }
        }
        siteBuildMetadata {
          buildTime
        }
      }`);
      
      return (
        <main className={container}>
          <title>{pageTitle} | {data.site.siteMetadata.title}</title>
          <p className={`${siteTitle}  ${layoutWrapper}`}>{data.site.siteMetadata.title}</p>
          <Nav />
          <h1 className={heading}>{pageTitle}</h1>
          {children}
          <Footer />
        </main>
      )
}


export default Layout