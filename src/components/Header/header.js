import React from 'react'
import Link from 'gatsby-link'

import './header.less'

import NavBarMenu from '../Navbar/navbar'

const Header = props => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}
  >
    <div
      className="LargeTitleHeader"
      style={{
        padding: '1.45rem 1.0875rem',
        width: '80rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {props.title}
        </Link>
      </h1>
    </div>
    <div
      className="SmallTitleHeader"
      style={{
        padding: '1.45rem 1.0875rem',
        width: '80rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          PICI
        </Link>
      </h1>
    </div>

    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
    >
      <NavBarMenu />
    </div>
  </div>
)

export default class MainHeader extends React.Component {
  render() {
    return <Header title={this.props.siteTitle} />
  }
}
