import React, { Fragment } from 'react'
import {
  Container,
  Current,
  Volume,
  Controls,
  Progress,
  Time,
  ProgressSlider
} from './styles'
import cd from '../../assets/cd.jfif'
import volume from '../../assets/volume.png'
import Slider from 'rc-slider'
import shuffle from '../../assets/shuffle.png'
import playIcon from '../../assets/play.png'
import pauseIcon from '../../assets/pause.png'
import backward from '../../assets/backward.png'
import forward from '../../assets/forward.png'
import repeat from '../../assets/repeat.png'
import Sound from 'react-sound'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as PlayerActions } from '../../store/ducks/player'

const Player = ({ player, play, pause }) => (
  <Container>
    {!!player.currentSong && player.status === Sound.status.PLAYING && (
      <Sound
        url={player.currentSong.file}
        playStatus={player.status}
        alt="Song"
      />
    )}

    {player.currentSong ? (
      <Current>
        <img src={cd} alt="Cover" />
        <div>
          <span>{player.currentSong.album}</span>
          <small>{player.currentSong.title}</small>
        </div>
      </Current>
    ) : (
      <Current>
        <img src={cd} alt="Cover" />
        <div>
          <span>Album</span>
          <small>Title</small>
        </div>
      </Current>
    )}

    <Progress>
      <Controls>
        <button>
          <img src={shuffle} alt="shuffle" />
        </button>
        <button onClick={play}>
          <img src={playIcon} alt="play" />
        </button>
        <button onClick={pause}>
          <img src={pauseIcon} alt="pause" />
        </button>
        <button>
          <img src={backward} alt="backward" />
        </button>
        <button>
          <img src={forward} alt="forward" />
        </button>
        <button>
          <img src={repeat} alt="repeat" />
        </button>
      </Controls>

      <Time>
        <span>..</span>
        <ProgressSlider>
          <Slider
            railStyle={{ background: '#404040', borderRadius: 10 }}
            trackStyle={{ background: '#1ED760' }}
            handleStyle={{ border: 0 }}
            //value={100}
          />
        </ProgressSlider>
        <span>..</span>
      </Time>
    </Progress>

    <Volume>
      <img src={volume} alt="volume" />
      <Slider
        railStyle={{ background: '#404040', borderRadius: 10 }}
        trackStyle={{ background: '#FFF' }}
        //handleStyle={{ display: 'none' }}
        //value={100}
      />
    </Volume>
  </Container>
)

const mapStateToProps = state => ({
  player: state.player
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(PlayerActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player)
