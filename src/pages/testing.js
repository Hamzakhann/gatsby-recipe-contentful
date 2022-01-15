import React from "react"
import { graphql } from "gatsby"
const Testing = ({ data }) => {
    console.log(data)
  const auther = data.site.info.author
  return <div>Hello {auther}</div>
}

export const data = graphql`
  {
    site {
      info: siteMetadata {
        title
        description
        author
        person {
          name
          age
        }
        simpleData
        complexData {
          name
          age
        }
      }
    }
  }
`

export default Testing
