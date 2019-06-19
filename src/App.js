import React from 'react'
import './App.css'
import GlobalStyle from './styles/global'
import Sidebar from './components/Sidebar'
import Player from './components/Player'

import { Wrapper, Container } from './styles/components'

function App() {
  return (
    <div>
      <GlobalStyle />
      <Wrapper>
        <Container>
          <Sidebar />
        </Container>
        <Player />
      </Wrapper>
    </div>
  )
}

export default App
