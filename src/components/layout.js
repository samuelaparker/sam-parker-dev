import * as React from 'react'
import Nav from '../components/nav'

const Layout = ({ pageTitle, children}) => {
    return(
        <main>
            <title>{pageTitle}</title>
            <Nav />
            <h1>{pageTitle}</h1>
            {children}
        </main>
    )
}

export default Layout