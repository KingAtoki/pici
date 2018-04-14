import React from 'react'
import Link from 'gatsby-link'
import './navbar.css'

export default class NavBar extends React.Component {
  render() {
    return (
      <div className="NavBar">
        <Link to="/donate/">Donate</Link>
        <Link to="/stories/">Successes</Link>
      </div>
    )
  }
}

{
  /* <div
      style={{
        margin: '0 auto',
        padding: '1.45rem 1.0875rem',
        display: 'flex',
        justifyContent: 'space-around',
        width: '50%',
      }}
    >
      <Link
        to="/donate/"
        style={{
          color: 'blue',
          textDecoration: 'none',
        }}
      >
        Donate
      </Link>
      <Link
        to="/stories/"
        style={{
          color: 'white',
          textDecoration: 'none',
        }}
      >
        Success Stories
      </Link>
    </div> */
}
