import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import styled from 'styled-components'

import GlobalStyles from './components/global-styles'
import MainPage from './pages/main'
import SignIn from './pages/signin'
import MyInfoPage from './pages/my-info'
import SearchPage from './pages/search'
import ErrorPage from './pages/error'
import SignUpPage from './pages/signup'
import Route from './components/auth-route'
import { UserContextProvider } from './components/contexts/user-context'

const Container = styled.div`
  max-width: 720px;
  margin: 0 auto;
`

function App() {
  return (
    <UserContextProvider>
      <Container>
        <GlobalStyles />
        <Router>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/signin" component={SignIn} />
            <Route auth path="/myinfo" component={MyInfoPage} />
            <Route path="/search" component={SearchPage} />
            <Route path="/signup" component={SignUpPage} />
            <Route component={ErrorPage} />
          </Switch>
        </Router>
      </Container>
    </UserContextProvider>
  )
}

export default App
