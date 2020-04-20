import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span style={{ fontSize: '28px' }}>{'{ dev }'}</span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Hi, I'm Jonathan Wynne</h1>
        <p>Senior React/ReactNative Developer</p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool
}

export default Header
