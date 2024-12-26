import React from 'react'
import styled from 'styled-components'

function RollDice({diceNumber, RandomNumber}) {
  return (
    <Container>
      <img 
        src={`images/dice_${diceNumber}.png`} 
        alt={`Dice showing ${diceNumber}`} 
        onClick={RandomNumber}
      />
    </Container>
  )
}

const Container = styled.div``;
export default RollDice