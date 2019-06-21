import { all, takeLatest } from 'redux-saga/effects'
import { call, put } from 'redux-saga/effects'

import { Types as PlaylistsTypes } from '../ducks/playlists'

import { getPlaylists } from './playlists'

function* playlist() {
  console.log('Inside rootSaga')
  yield takeLatest(PlaylistsTypes.GET_REQUEST, getPlaylists)
}

export default function* rootSaga() {
  yield all([playlist()])
}
