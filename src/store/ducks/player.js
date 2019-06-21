import { status } from 'react-sound'
import { tsExpressionWithTypeArguments } from '@babel/types'
import { types } from '@babel/core'

export const Types = {
  LOAD: 'player/LOAD'
}

const INITIAL_STATE = {
  currentSong: null,
  status: false
}

export default function player(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOAD:
      return {
        ...state,
        currentSong: action.payload.song,
        status: status.PLAYING
      }
    default:
      return state
  }
}

export const Creators = {
  loadSong: song => ({
    type: Types.SET,
    payload: { song }
  })
}
