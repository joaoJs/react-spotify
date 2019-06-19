import React from 'react'
import './App.css'
import GlobalStyle from './styles/global'
import Sidebar from './components/Sidebar'
import Player from './components/Player'
import { BrowserRouter } from 'react-router-dom'

import { Wrapper, Container, Content } from './styles/components'
import Header from './components/Header'

import Routes from './routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Wrapper>
        <Container>
          <Sidebar />
          <Content>
            <Header />
            <Routes />
          </Content>
        </Container>
        <Player />
      </Wrapper>
    </BrowserRouter>
  )
}

export default App
