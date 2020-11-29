import React, { useState } from 'react'
import styled from 'styled-components'
import { useHistory, Link } from 'react-router-dom'

import { requestSignup } from './service'

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
  const history = useHistory()
  const [formValues, setformValues] = useState({
    id: '',
    password: '',
    rePassword: '',
    name: '',
  })

  const { id, password, rePassword, name } = formValues

  const handleSubmit = async () => {
    try {
      if (await requestSignup({ id, password, name })) {
        window.alert('회원가입 성공')
      } else {
        window.alert('일시적인 오류로 회원가입에 실패했습니다.')
      }
    } catch (e) {
      window.alert(e)
    }
  }
  const handleformValues = ({ target: { name, value } }) => {
    setformValues({
      ...formValues,
      [name]: value,
    })
  }

  const isMatchedPassword = password && rePassword && password === rePassword
  const isSubmittable = isMatchedPassword && id && name

  return (
    <Container>
      <Input
        name="id"
        value={id}
        placeholder="아이디를 입력해주세요"
        onChange={handleformValues}
      />
      <Input
        name="password"
        type="password"
        value={password}
        placeholder="비밀번호를 입력해주세요"
        onChange={handleformValues}
      />
      <Input
        name="rePassword"
        type="rePassword"
        placeholder="비밀번호를 다시 입력해주세요"
        onChange={handleformValues}
      />
      <Input
        name="name"
        value={name}
        placeholder="이름을 입력해주세요"
        onChange={handleformValues}
      />
      <Button
        disabled={!isSubmittable}
        onClick={isSubmittable ? handleSubmit : () => {}}
      >
        회원가입
      </Button>

      {/**
       * 회원가입 버튼
       */}
    </Container>
  )
}

export default Form
