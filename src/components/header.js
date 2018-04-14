import React from 'react'
import Link from 'gatsby-link'

import NavBar from './Navbar/navbar.js'

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
      style={{
        padding: '1.45rem 1.0875rem',
        width: '80rem',
      }}
    >
      {props.width >= 600 ? (
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
      ) : (
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
      )}
    </div>

    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
    >
      <NavBar />
    </div>
  </div>
)

export default class MainHeader extends React.Component {
  constructor(props) {
    super(props)
    this.state = { width: 0, height: 0 }
  }

  componentWillMount() {
    this.updateWindowDimensions()
    window.addEventListener('resize', this.updateWindowDimensions)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions)
  }

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight })
  }
  render() {
    return <Header title={this.props.siteTitle} width={this.state.width} />
  }
}
