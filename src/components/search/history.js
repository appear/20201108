import React from 'react'
import styled from 'styled-components'

const HistoryContainer = styled.div`
  padding: 18px;
`

const HeaderContainer = styled.div`
  overflow: hidden;
`

const Title = styled.span`
  float: left;
  font-weight: 400;
  color: #666;
`

const RemoveText = styled.span`
  float: right;
  color: #a7a7a7;
`

const ListContainer = styled.ul`
  margin: 10px 0;
`
const KeywordContainer = styled.li`
  overflow: hidden;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`

const RemoveButton = styled.button`
  float: right;
  color: #0cde8b;
  border: 1px solid #0cde8b;
  padding: 3px 5px;
  border-radius: 15px;
`

const Keyword = styled.span`
  font-size: 18px;
  font-weight: 400;
`

function History({ keywords, onClearKeywords, onRemoveKeyword }) {
  if (keywords.length === 0) {
    return <HistoryContainer>최근 검색된 기록이 없습니다.</HistoryContainer>
  }

  return (
    <HistoryContainer>
      <HeaderContainer>
        <Title>최근검색어</Title>
        <RemoveText onClick={onClearKeywords}>전체삭제</RemoveText>
      </HeaderContainer>
      <ListContainer>
        {keywords.map(({ id, text }) => {
          return (
            <KeywordContainer key={id}>
              <Keyword>{text}</Keyword>
              <RemoveButton onClick={() => onRemoveKeyword(id)}>
                삭제
              </RemoveButton>
            </KeywordContainer>
          )
        })}
      </ListContainer>
    </HistoryContainer>
  )
}

export default History
