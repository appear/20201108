import React, { useState, useEffect } from 'react'

import SearchBar from '../components/search/search-bar'
import History from '../components/search/history'

function SearchPage() {
  const [keywords, setKeywords] = useState(
    JSON.parse(localStorage.getItem('keywords') || '[]'),
  )

  useEffect(() => {
    localStorage.setItem('keywords', JSON.stringify(keywords))
  }, [keywords])

  // 1. 검색어 추가
  const handleAddKeyword = (text) => {
    const newKeyword = {
      id: Date.now(),
      text,
    }

    setKeywords([newKeyword, ...keywords])
  }

  // 2. 검색어 삭제
  const handleRemoveKeyword = (id) => {
    setKeywords(
      keywords.filter((keyword) => {
        return keyword.id !== id
      }),
    )
  }

  // 3. 검색어 전체 삭제
  const handleClearKeywords = () => {
    setKeywords([])
  }

  return (
    <div>
      <SearchBar onAddKeyword={handleAddKeyword} />
      <History
        keywords={keywords}
        onClearKeywords={handleClearKeywords}
        onRemoveKeyword={handleRemoveKeyword}
      />
    </div>
  )
}

export default SearchPage
