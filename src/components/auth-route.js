import React from 'react'
import { Route, useHistory } from 'react-router-dom'

import { useUserContext } from './contexts/user-context'

function AuthRoute({ auth, ...props }) {
  const { user } = useUserContext()
  const history = useHistory()

  if (auth && user === null) {
    history.replace('/login')
    return null
  }

  return <Route {...props} />
}

export default AuthRoute
