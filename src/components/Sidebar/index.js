import React from 'react'
import { NewPlaylist, Container, Nav } from './styles'

const Sidebar = () => (
  <Container>
    <div>
      <Nav main>
        <li>
          <a href="">Link</a>
        </li>
        <li>
          <a href="">Link</a>
        </li>
        <li>
          <a href="">Link</a>
        </li>
      </Nav>

      <Nav>
        <li>
          <a href="">
            <span>playlists </span>
          </a>
        </li>
        <li>
          <a href="">Seu daily mix</a>
        </li>
        <li>
          <a href="">Tocados recentemente</a>
        </li>
      </Nav>

      <Nav>
        <li>
          <a href="">
            <span>Sua Biblioteca</span>
          </a>
        </li>
        <li>
          <a href="">Seu daily mix</a>
        </li>
        <li>
          <a href="">Tocados recentemente</a>
        </li>
        <li>
          <a href="">Músicas</a>
        </li>
        <li>
          <a href="">Músicas</a>
        </li>
        <li>
          <a href="">Músicas</a>
        </li>
        <li>
          <a href="">Músicas</a>
        </li>
        <li>
          <a href="">Músicas</a>
        </li>
      </Nav>
    </div>
    <NewPlaylist>Add playlist</NewPlaylist>
  </Container>
)

export default Sidebar
