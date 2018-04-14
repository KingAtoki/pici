import React from 'react'
import Link from 'gatsby-link'

const SecondPage = ({ data }) => {
  return (
    <div>
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
      <div>
        {data.allAirtablePeopleHelped.edges.map(({ node }, index) => {
          return (
            <div key={index}>
              <h1>{node.Name}</h1>
              <p>{node.Notes}</p>
              {node.Attachments ? (
                <img src={node.Attachments[0].url} alt="" />
              ) : null}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SecondPage

export const query = graphql`
  query SecondPageQuery {
    allAirtablePeopleHelped {
      edges {
        node {
          Name
          Notes
          Attachments {
            url
          }
        }
      }
    }
  }
`
