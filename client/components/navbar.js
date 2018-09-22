import React from 'react'
import {Menu} from 'semantic-ui-react'

const Navbar = ({handleClick, isLoggedIn}) => (
  <Menu>
    <Menu.Menu>
      <Menu.Item>
        Toolbox
        <img
          src="https://c1.staticflickr.com/9/8025/7188850083_3b6b3852e2.jpg"
          alt="(*)"
          className="NavBar-logo"
        />
      </Menu.Item>
    </Menu.Menu>
  </Menu>
)

export default Navbar
