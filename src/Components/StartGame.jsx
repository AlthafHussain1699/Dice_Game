import React from 'react';
import styled from 'styled-components';

function StartGame({toggle}) {
  return (
    <Main>
      <div className="GameImage">
        <img src="/images/dices.png" alt="startGameLogo" />
      </div>
      <div className='content'>
        <h1>DICE GAME</h1>
        <div>
        <Button onClick={toggle}>Play Now</Button>
        </div>
      </div>
    </Main>
  );
}

const Main = styled.div`
  max-width: 1100px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;
  overflow: hidden; /* Prevents scrollbars from appearing */
  
  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-end; 
  }
  h1 {
    font-size: 50px;
    white-space: nowrap;
  }
`;



const Button = styled.button`
  padding: 10px 20px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background-color:rgb(177, 179, 183);
  }
`;



export default StartGame;
