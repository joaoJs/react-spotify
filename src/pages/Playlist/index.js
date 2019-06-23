import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as PlaylistDetailActions } from '../../store/ducks/playlistDetails'
import { Creators as PlayerActions } from '../../store/ducks/player'
import { SongItem } from './styles'

class Playlist extends Component {
  state = {
    selectedSong: null,
    playing: false
  }

  componentDidMount() {
    this.loadPlaylistDetails()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.loadPlaylistDetails()
    }
  }

  loadPlaylistDetails = () => {
    const { id } = this.props.match.params
    this.props.getPlaylistDetailsRequest(id)
  }

  render() {
    return (
      <div>
        <h3>{this.props.playlistDetails.data.title}</h3>
        <SongItem
          key={1}
          onClick={() => this.setState({ selectedSong: 1 })}
          onDoubleClick={() =>
            this.props.loadSong(this.props.playlistDetails.data.songs[0])
          }
          selected={this.state.selectedSong === 1}
          playing={this.props.currentSong && this.state.selectedSong === 1}
        >
          <p>Play song</p>
        </SongItem>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  playlistDetails: state.playlistDetails,
  currentSong: state.player.currentSong
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...PlaylistDetailActions, ...PlayerActions }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Playlist)
