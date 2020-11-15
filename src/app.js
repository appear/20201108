import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'

import MainPage from './pages/main'
import LoginPage from './pages/login'
import MyInfoPage from './pages/my-info'
import SearchPage from './pages/search'
import ErrorPage from './pages/error'

const Container = styled.div`
  max-width: 720px;
  margin: 0 auto;
`

function App() {
  return (
    <Container>
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/myinfo" component={MyInfoPage} />
          <Route path="/search" component={SearchPage} />
          <Route component={ErrorPage} />
        </Switch>
      </Router>
    </Container>
  )
}

export default App
