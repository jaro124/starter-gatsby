import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/core/layout"

const IndexPage = () => {
  return (
    <Layout>
      <h1 className="px-4"  >Strona index</h1>
      <Link to='./blog/install'>Install</Link>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
