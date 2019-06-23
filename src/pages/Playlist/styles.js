import styled from 'styled-components'

export const SongItem = styled.div`
  p {
    background: ${props => (props.selected ? '#282828' : 'transparent')};
    color: ${props => (props.playing ? '#1ED760' : '#FFF')};
    margin-top: 10px;
  }
`
