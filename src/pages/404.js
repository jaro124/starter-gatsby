import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/core/layout"

const NotFoundPage = () => (
  <Layout>
    <div className="px-4">
      <div className="max-w-3xl bg-white rounded-lg mx-auto my-16 p-16">
        <h1 className="text-2xl font-medium mb-2">404: Not found</h1>
        <h2 className="font-medium text-sm text-indigo-400 mb-4 uppercase tracking-wide">Page not found</h2>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        <div className="mt-4">
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            <Link to="/">Back to home page</Link>
          </button>
        </div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
