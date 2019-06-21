import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as PlaylistDetailActions } from '../../store/ducks/playlistDetails'
import { Creators as PlayerActions } from '../../store/ducks/player'

class Playlist extends Component {
  componentDidMount() {
    console.log('loading playlist component')
    this.loadPlaylistDetails()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.loadPlaylistDetails()
    }
  }

  loadPlaylistDetails = () => {
    console.log('inside loadPlaylistDetails')
    const { id } = this.props.match.params
    console.log(this.props)
    this.props.getPlaylistDetailsRequest(id)
  }

  render() {
    return (
      <div>
        <p>Here</p>
        <h3>{this.props.playlistDetails.data.title}</h3>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  playlistDetails: state.playlistDetails
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...PlaylistDetailActions, ...PlayerActions }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Playlist)
