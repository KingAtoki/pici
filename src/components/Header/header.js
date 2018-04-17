import React from 'react'
import Link, { navigateTo } from 'gatsby-link'

import './header.less'

import NavBarMenu from '../Navbar/navbar'

const Header = props => (
  <div className="MainHeader">
    <div className="LargeTitleHeader">
      <h2 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'grey',
            textDecoration: 'none',
          }}
        >
          {props.title}
        </Link>
      </h2>
    </div>
    <div className="SmallTitleHeader">
      <h2 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'grey',
            textDecoration: 'none',
          }}
        >
          PICI
        </Link>
      </h2>
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
