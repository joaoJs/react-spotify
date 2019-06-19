import React from 'react'

import { Container, Title, List, Playlist } from './styles'

import cd from '../../assets/cd.jfif'

const Browse = () => (
  <Container>
    <Title>Navegar</Title>

    <List>
      <Playlist>
        <img src={cd} alt="cd" />
      </Playlist>
      <Playlist>
        <img src={cd} alt="cd" />
      </Playlist>
      <Playlist>
        <img src={cd} alt="cd" />
      </Playlist>
      <Playlist>
        <img src={cd} alt="cd" />
      </Playlist>
    </List>
  </Container>
)

export default Browse
