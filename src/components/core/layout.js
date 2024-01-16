import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
        site {
            id
            siteMetadata {
                title
            }
        }
    }
  `)
  
  return (
    <div>
      <Header />
      <div>
        <main>{children}</main>
        <Footer siteTitle={data.site.siteMetadata.title} />
      </div>
    </div>
  )
}

export default Layout