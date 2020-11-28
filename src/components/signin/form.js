import React, { useState } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

import { fetchLogin } from './service'
import { useUserContext } from '../contexts/user-context'

const Container = styled.div`
  margin-top: 100px;
  padding: 20px;
`

const Input = styled.input`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 40px;
  margin: 0 0 8px;
  padding: 5px 39px 5px 11px;
  border: solid 1px #dadada;
  background: #fff;
  box-sizing: border-box;
`

const Button = styled.div`
  font-size: 18px;
  font-weight: 700;
  line-height: 49px;
  display: block;
  width: 100%;
  height: 49px;
  margin: 16px 0 7px;
  cursor: pointer;
  text-align: center;
  color: #fff;
  border: none;
  border-radius: 0;
  background-color: #03c75a;
  ${({ disabled }) =>
    disabled &&
    `
    background-color: #efefef;
  `}
`

function Form() {
  const { setUser } = useUserContext()
  const history = useHistory()
  const [loginInfo, setLoginInfo] = useState({
    id: '',
    password: '',
  })

  const { id, password } = loginInfo

  const handleSubmit = async () => {
    try {
      const user = await fetchLogin(loginInfo)
      setUser(user)
      history.replace('/')
    } catch (e) {
      window.alert(e)
    }
  }

  const handleLoginInfo = ({ target: { name, value } }) => {
    setLoginInfo({
      ...loginInfo,
      [name]: value,
    })
  }

  const isSubmittable = id && password

  return (
    <Container>
      <Input
        name="id"
        value={id}
        placeholder="아이디를 입력해주세요"
        onChange={handleLoginInfo}
      />
      <Input
        name="password"
        type="password"
        value={password}
        placeholder="비밀번호를 입력해주세요"
        onChange={handleLoginInfo}
      />
      <Button
        disabled={!isSubmittable}
        onClick={isSubmittable ? handleSubmit : () => {}}
      >
        로그인
      </Button>
      {/**
       * 회원가입 버튼
       */}
    </Container>
  )
}

export default Form
