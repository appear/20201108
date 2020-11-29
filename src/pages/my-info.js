import React from 'react'
import { useHistory } from 'react-router-dom'

import { useUserContext } from '../components/contexts/user-context'

function MyInfoPage() {
  const { user, setUser } = useUserContext()
  const history = useHistory()
  console.log(user)
  const { id, name } = user

  const logout = () => {
    // 1. context user 초기화
    //2. 다시 예전페이지로
    setUser(null)
    history.replace('/')
  }

  return (
    <div>
      <h1>
        로그인된 유저 : {id}, 이름:{name}
      </h1>
      <button onClick={logout}>로그아웃</button>
    </div>
  )
}

export default MyInfoPage
