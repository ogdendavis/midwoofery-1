import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const DogPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="Our Dogs" />
    <h1>Dawgs!</h1>
  </Layout>
)

export default DogPage