import React from "react"
import { graphql } from "gatsby"
import Header from "../components/Header"
import Footer from "../components/Footer"
import ProjectList from "../components/ProjectList"
import "./index.css"

import SEO from "../components/seo"

class IndexPage extends React.Component {
  render() {
    return (
      <div className="App">
        <SEO />
        <Header />
        <ProjectList data={this.props.data} />
        <Footer />
      </div>
    )
  }
}

export default IndexPage

export const query = graphql`
  query {
    allImageSharp {
      edges {
        node {
          id
          fluid(maxWidth: 500) {
            originalName
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
