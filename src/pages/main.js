import React from 'react'
import Navbar from '../components/main/logo'
import Logo from '../components/main/logo'

import SearchBar from '../components/main/search-bar'
import Weebtoons from '../components/main/webtoons'

import styled from 'styled-components'

const Container = styled.div``

function MainPage() {
  return (
    <Container>
      <Navbar />
      <Logo />
      <SearchBar />
      <Weebtoons />
    </Container>
  )
}

export default MainPage
