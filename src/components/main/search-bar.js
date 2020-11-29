import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
  padding: 0 20px;
`

const InputBox = styled.div`
  border: 1px solid #0bde8b;
  height: 54px;
  background-color: #fff;
  border-radius: 2px;
`

function SearchBar() {
  return (
    <Container>
      <Link to="/search">
        <InputBox />
      </Link>
    </Container>
  )
}

export default SearchBar
