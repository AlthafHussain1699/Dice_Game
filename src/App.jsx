import { useState } from 'react';
import './App.css';

import PlayGame from './Components/PlayGame';
import StartGame from './Components/startGame';
function App() {
  const [isGameStart, setIsGameStart] = useState(true);

  const toggleComponent = () => {
    setIsGameStart((flag) => !flag);
  };
  return (
    <>
      {isGameStart ? (
        <StartGame toggle={toggleComponent} />
      ) : (
        <PlayGame />
      )}
    </>
  );
}

export default App;
