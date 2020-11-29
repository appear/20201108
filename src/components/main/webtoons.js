import React, { useState, useEffect, useLayoutEffect } from 'react'

import styled from 'styled-components'
import { fetchRecommendWebtoons, fetchWebtoons } from './service'

import { useUserContext } from '../contexts/user-context'

const ScrollContainer = styled.div`
  padding: 20px;
  white-space: nowrap;
  overflow-x: auto;
`

const WebtoonContainer = styled.div`
  display: inline-block;
  width: 45%;
  border-radius: 5px;
  &:not(:last-child) {
    margin-right: 15px;
  }
`
const Image = styled.img`
  width: 100%;
  vertical-align: top;
`
const Title = styled.div`
  margin-top: 9px;
  font-weight: bold;
`
const Author = styled.div`
  color: #797b84;
  margin-top: 4px;
  font-size: 14px;
`

function Webtoons() {
  const [webtoons, setWebtoons] = useState([])

  const [recommendWebtoons, setRecommendWebtoons] = useState([])
  const { user } = useUserContext()

  useLayoutEffect(() => {
    async function fetchAndSetWebtoons() {
      setWebtoons(await fetchWebtoons())

      if (user) {
        setRecommendWebtoons(await fetchRecommendWebtoons())
      }
    }

    fetchAndSetWebtoons()
  }, [user])

  if (!webtoons.length) {
    return null
  }

  return (
    <div>
      <ScrollContainer>
        {webtoons.map(({ id, title, image, author }) => (
          <WebtoonContainer key={id}>
            <Image src={image} alt={title} />
            <Title>{title}</Title>
            <Author>{author}</Author>
          </WebtoonContainer>
        ))}
      </ScrollContainer>

      {recommendWebtoons.length > 0 && (
        <ScrollContainer>
          {recommendWebtoons.map(({ id, title, image, author }) => (
            <WebtoonContainer key={title}>
              <Image src={image} alt={title} />
              <Title>{title}</Title>
              <Author>{author}</Author>
            </WebtoonContainer>
          ))}
        </ScrollContainer>
      )}
    </div>
  )
}

export default Webtoons
