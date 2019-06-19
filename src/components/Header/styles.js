import styled from 'styled-components'
import search from '../../assets/search.png'

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
`

export const Search = styled.div`
  display: flex;
  align-items: center;
  border-radius: 12px;
  height: 24;
  width: 200px;
  padding: 6px 7px 6px 26px;
  background: #fff url(${search}) no-repeat 7px center;

  input {
    flex: 1;
    font-size: 13px;
    color: #121212;
    border: 0;
  }
`

export const User = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;

  img {
    width: 27px;
    height: 27px;
    margin-right: 7px;
  }
`
