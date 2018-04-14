import React from 'react'
import Link from 'gatsby-link'
import './navbar.less'

import MenuBar from './menubar'

export default class NavBarMenu extends React.Component {
  render() {
    return (
      <div>
        <div className="NavBar">
          <Link to="/donate/" style={{ color: 'red' }}>
            Donate
          </Link>
          <Link to="/stories/" style={{ color: 'white' }}>
            Success Stories
          </Link>
        </div>
        <div className="MenuBar">
          <MenuBar />
        </div>
      </div>
    )
  }
}
