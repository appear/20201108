import React, { useState } from 'react'

import SearchBar from '../components/search/search-bar'
import History from '../components/search/history'

function SearchPage() {
  const [keywords, setKeywords] = useState([
    {
      id: Date.now(),
      text: '아이유',
    },
  ])

  return (
    <div>
      <SearchBar />
      <History keywords={keywords} />
    </div>
  )
}

export default SearchPage
