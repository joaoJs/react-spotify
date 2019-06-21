import api from '../../services/api'
import { call, put } from 'redux-saga/effects'
import { Types as PlaylistsTypes } from '../ducks/playlists'

export function* getPlaylists() {
  try {
    const response = yield call(api.get, '/playlists')
    console.log('=======')
    console.log(response)
    yield put({ type: PlaylistsTypes.GET_SUCCESS, payload: response })
  } catch (error) {
    console.log(error)
  }
}
