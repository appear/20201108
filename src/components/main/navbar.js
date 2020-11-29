import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
  padding: 15px 20px;
`

const Hamburger = styled(Link)`
  width: 23px;
  height: 17px;
  background-position: -240px -307px;
  display: block;
  overflow: hidden;
  background-image: url(https://s.pstatic.net/static/www/m/uit/2020/sp_search.623c21.png);
  background-size: 467px 442px;
  background-repeat: no-repeat;
`

function Navbar() {
  return (
    <Container>
      <Hamburger to="/myinfo" />
    </Container>
  )
}

export default Navbar
