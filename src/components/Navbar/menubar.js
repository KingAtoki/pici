import React from 'react'

import Link, { navigateTo } from 'gatsby-link'

import Modal from 'simple-react-modal'
import './menubar.less'
import menuButton from '../../../assets/three-lines-menu.png'

export default class MenuBar extends React.Component {
  constructor() {
    super()
    this.state = {
      show: false,
    }
  }

  toggleModal = () => {
    this.setState({ show: !this.state.show })
  }
  render() {
    return (
      <div onClick={this.toggleModal}>
        <Modal
          show={this.state.show}
          onClose={this.toggleModal}
          style={{
            marginTop: '100px',
            background: 'white',
          }}
          containerClassName="ModalContainer"
          containerStyle={{
            background: 'white', //will change later
            width: '100%',
            height: '70%',
            marginTop: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div
            className="ModalDonateButton"
            onClick={() => navigateTo('/donate/')}
          >
            <Link
              to="/donate/"
              style={{
                color: 'white',
                textDecoration: 'none',
                fontSize: '30px',
              }}
            >
              Donate
            </Link>
          </div>
          <div className="ModalLink">
            <Link
              to="/"
              style={{
                color: '#c9d6ff',
                textDecoration: 'none',
                fontSize: '30px',
              }}
            >
              Home
            </Link>
          </div>
          <div className="ModalLink">
            <Link
              to="/stories/"
              style={{
                color: '#c9d6ff',
                textDecoration: 'none',
                fontSize: '30px',
              }}
            >
              Success Stories
            </Link>
          </div>
          <div className="ModalLink">
            <Link
              to="/pici-team"
              style={{
                color: '#c9d6ff',
                textDecoration: 'none',
                fontSize: '30px',
              }}
            >
              Meet the Team
            </Link>
          </div>
          <div className="ModalLink">
            <Link
              to="/about-us"
              style={{
                color: '#c9d6ff',
                textDecoration: 'none',
                fontSize: '30px',
              }}
            >
              About Us
            </Link>
          </div>
        </Modal>
        <img src={menuButton} alt="" />
      </div>
    )
  }
}
