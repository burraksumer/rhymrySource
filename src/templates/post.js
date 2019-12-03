import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/SEO"
import Img from "gatsby-image"
import "../scss/main.scss"

export default function Template({ data }) {

  const smallStyle ={
    marginTop: 0,
    fontWeight: 300,
    fontSize: 20,
}

  const { markdownRemark } = data // Object destructuring
  const { frontmatter, html } = markdownRemark // Object destructuring og markdownRemark
  let featuredImgFluid =
    markdownRemark.frontmatter.featuredImage.childImageSharp.fluid

  return (
    <Layout>
      <Seo title={frontmatter.title} description={frontmatter.description} />
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <Img fluid={featuredImgFluid} />
        <h2>{frontmatter.date}</h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <Link 
        to={`/contact#${frontmatter.authorID}`}>
        <button className="btn"><small style={smallStyle}>Written by: {frontmatter.author}</small></button>
        </Link>
      </div>
    </Layout>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        author
        authorID
        date(formatString: "MMMM DD, YYYY")
        path
        title
        description
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
