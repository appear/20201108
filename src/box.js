import React, { useState } from 'react'
import styled from 'styled-components'

const BoxConatiner = styled.div`
  width: 200px;
  height: 200px;
  border: 1px solid #bbb;

  ${({ color }) => `background-color: ${color};`}
  ${({ width }) => `width: ${width}px;`}
`

function Box() {
  const [bgColor, setBgColor] = useState('#efefef')
  const [width, setWidth] = useState(200)

  const handleBgColor = (e) => {
    setBgColor(e.target.value)
  }

  return (
    <div>
      <input onChange={handleBgColor} />
      <BoxConatiner color={bgColor} width={width} />
    </div>
  )
}

export default Box
