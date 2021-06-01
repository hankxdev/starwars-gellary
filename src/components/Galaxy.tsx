import React from 'react';
import styled from 'styled-components';
import { getRandomInt } from '../utils';

const GalaxyBG = styled.div`
  div{
    position: absolute;
    width: 1px;
    height: 1px;
    background-color: white;
  }
`

type Position ={
  top: number
  left: number
}

const Galaxy = ():JSX.Element => {
  const amount = 100

  const windowWidth = window.innerWidth
  const windowHeight = window.innerHeight
  const getRandomPosition = (): Position => {
    const top = getRandomInt(0, windowHeight)
    const left = getRandomInt(0, windowWidth)
    return { top, left }
  }

  const stars = []
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i <= amount; i++) {
    const { top, left } = getRandomPosition()
    stars.push(<div className="star" key={i} style={{ top, left }} />)
  }

  return (
    <GalaxyBG>
      {stars}
    </GalaxyBG>
  )
}

export default Galaxy
