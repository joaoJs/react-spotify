import React from 'react'
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
import play from '../../assets/play.png'
import pause from '../../assets/pause.png'
import backward from '../../assets/backward.png'
import forward from '../../assets/forward.png'
import repeat from '../../assets/repeat.png'

const Player = () => (
  <Container>
    <Current>
      <img src={cd} alt="Cover" />
      <div>
        <span>CD</span>
        <small>Playlist</small>
      </div>
    </Current>

    <Progress>
      <Controls>
        <button>
          <img src={shuffle} alt="shuffle" />
        </button>
        <button>
          <img src={play} alt="play" />
        </button>
        <button>
          <img src={pause} alt="pause" />
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

export default Player
