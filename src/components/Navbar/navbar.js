import React from 'react'
import Link, { navigateTo } from 'gatsby-link'
import './navbar.less'

import MenuBar from './menubar'

export default class NavBarMenu extends React.Component {
  render() {
    return (
      <div>
        <div className="NavBar">
          <div
            style={{
              background: 'darkgrey',
              padding: '10px',
              borderRadius: 10,
            }}
            onClick={() => navigateTo('/donate/')}
          >
            <Link
              to="/donate/"
              style={{ color: 'white', textDecoration: 'none' }}
            >
              Become a Donor
            </Link>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Link
              to="/stories/"
              style={{ color: 'white', textDecoration: 'none' }}
            >
              Success Stories
            </Link>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Link
              to="/pici-team/"
              style={{ color: 'white', textDecoration: 'none' }}
            >
              Meet the Team
            </Link>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Link
              to="/about-us/"
              style={{ color: 'white', textDecoration: 'none' }}
            >
              About Us
            </Link>
          </div>
        </div>
        <div className="MenuBar">
          <MenuBar />
        </div>
      </div>
    )
  }
}
