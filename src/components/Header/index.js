import React from 'react'
import user from '../../assets/user.png'

import { Container, Search, User } from './styles'

const Header = () => (
  <Container>
    <Search>
      <input placeholder="search" />
    </Search>

    <User>
      <img src={user} alt="user" />
      username
    </User>
  </Container>
)

export default Header
