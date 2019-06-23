import api from '../../services/api'
import { call, put } from 'redux-saga/effects'
import { Types as PlaylistDetailsTypes } from '../ducks/playlistDetails'

export function* getPlaylistDetails(action) {
  try {
    const response = yield call(
      api.get,
      `/playlists/${action.payload.id}?_embed=songs`
    )
    console.log('======')
    console.log(response)
    yield put({ type: PlaylistDetailsTypes.GET_SUCCESS, payload: response })
  } catch (error) {
    console.log(error)
  }
}
