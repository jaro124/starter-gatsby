import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"

import "../../styles/global.css"

import { useTheme } from "./themeContext"

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
  const { theme } = useTheme()
  return (
    <div className={`${theme} content-transition duration-200 bg-background`}>
      <Header />
      <div>
        <main>{children}</main>
        <Footer siteTitle={data.site.siteMetadata.title} />
      </div>
    </div>
  )
}

export default Layout