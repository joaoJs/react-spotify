import React, { Component } from 'react'

import { Container, Title, List, Playlist } from './styles'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as PlaylistActions } from '../../store/ducks/playlists'
import { Link } from 'react-router-dom'

class Browse extends Component {
  componentDidMount() {
    this.props.getPlaylistRequest()
  }

  render() {
    return (
      <Container>
        <Title>Navegar</Title>

        <List>
          {this.props.playlists.data.map(playlist => (
            <Playlist key={playlist.id}>
              <Link to={`/playlists/${playlist.id}`}>
                <img
                  src={playlist.thumbnail}
                  alt={playlist.title}
                  to={`/playlists/${playlist.id}`}
                />
              </Link>
              <strong>{playlist.title}</strong>
            </Playlist>
          ))}
        </List>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  playlists: state.playlists
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(PlaylistActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Browse)
