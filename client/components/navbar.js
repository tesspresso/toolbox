import React from 'react'
import {Menu} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const Navbar = () => (
  <Menu>
    <Menu.Menu>
      <Menu.Item as={Link} to="/">
        Home
      </Menu.Item>
    </Menu.Menu>
  </Menu>
)

export default Navbar
