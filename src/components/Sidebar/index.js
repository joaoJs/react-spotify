import React, { Component } from 'react'
import { NewPlaylist, Container, Nav } from './styles'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as PlaylistActions } from '../../store/ducks/playlists'

class Sidebar extends Component {
  constructor() {
    super()
    this.state = {}
  }

  componentDidMount() {
    this.props.getPlaylistRequest()
  }

  render() {
    return (
      <Container>
        <div>
          <Nav main>
            <li>
              <Link to="/">Navegar</Link>
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
            {this.props.playlists.data.map(playlist => (
              <li key={playlist.id}>
                <Link to={`/playlists/${playlist.id}`}>{playlist.title}</Link>
              </li>
            ))}
          </Nav>
        </div>
        <NewPlaylist>Add playlist</NewPlaylist>
      </Container>
    )
  }
}

const mapStateToProps = state => ({ playlists: state.playlists })

const mapDispatchToProps = dispatch =>
  bindActionCreators(PlaylistActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar)
