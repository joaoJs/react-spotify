import { all, takeLatest } from 'redux-saga/effects'
import { call, put } from 'redux-saga/effects'

import { Types as PlaylistsTypes } from '../ducks/playlists'
import { Types as PlaylistDetailsTypes } from '../ducks/playlistDetails'

import { getPlaylists } from './playlists'
import { getPlaylistDetails } from './playlistDetails'

// import playlistDetails from '../ducks/playlistDetails'

function* playlist() {
  yield takeLatest(PlaylistsTypes.GET_REQUEST, getPlaylists)
}

function* playlistDetails() {
  console.log('inside playlist details')
  yield takeLatest(PlaylistDetailsTypes.GET_REQUEST, getPlaylistDetails)
}

export default function* rootSaga() {
  yield all([playlist(), playlistDetails()])
}
