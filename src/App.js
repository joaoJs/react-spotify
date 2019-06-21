import React from 'react'
import './App.css'
import GlobalStyle from './styles/global'
import Sidebar from './components/Sidebar'
import Player from './components/Player'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

import { Wrapper, Container, Content } from './styles/components'
import Header from './components/Header'

import Routes from './routes'

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  )
}

export default App
