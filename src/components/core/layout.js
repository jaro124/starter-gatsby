import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"

import "../../styles/global.css"

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
    <div className="content-transition duration-200 bg-gray-200">
      <Header />
      <div>
        <main>{children}</main>
        <Footer siteTitle={data.site.siteMetadata.title} />
      </div>
    </div>
  )
}

export default Layout