import React, { useState } from 'react';
import SelectNumber from './SelectNumber';
import styled from 'styled-components';
import RollDice from './RollDice';
import Rules from './Rules'; // Ensure you have a Rules component

function PlayGame() {
    const [score, setScore] = useState(0);
    const [diceValue, setDiceValue] = useState(1);
    const [selectValue, setSelectValue] = useState(0);
    const [ruleFlag, setRuleFlag] = useState(false);
    const [match, setMatch] = useState(0);
    const [selectNumberError, setSelectNumberError] = useState(false);

    const resetScore = () => {
        setScore(0);
    };

    function getRandomNumber() {
        if (selectValue === 0) {
            setSelectNumberError(true);
            return;
        } else {
            setSelectNumberError(false);
        }

        const val = Math.floor(Math.random() * 6) + 1;
        setDiceValue(val);

        if (val === selectValue) {
            setScore((src) => src + val);
            setMatch(1); // Matched
        } else {
            setMatch(2); // Mismatched
        }
        setSelectValue(0);
    }

    const selectedNumber = (val) => {
        setSelectValue(val);
    };

    return (
        <Container>
            <div className="Top">
                <div className="score">
                    <p>{score}</p>
                    <p>Total Score</p>
                </div>
                <div>
                    <SelectNumber value={selectValue} setValue={selectedNumber} />
                    {selectNumberError && <p className="error">Select a number</p>}
                </div>
            </div>
            <div>
                {match === 1 && <p className="matched">Matched</p>}
                {match === 2 && <p className="mismatched">Mismatched</p>}
            </div>
            <div className="Bottom">
                <RollDice diceNumber={diceValue} RandomNumber={getRandomNumber} />
                <StyledButton onClick={resetScore}>Reset Score</StyledButton>
                <StyledButton onClick={() => setRuleFlag(!ruleFlag)}>
                    {ruleFlag ? 'Hide Rules' : 'Show Rules'}
                </StyledButton>
                {ruleFlag && <Rules />}
            </div>
        </Container>
    );
}

const Container = styled.div`
    max-width: 800px;
    margin: 0 auto;
    align-items: center;

    .Top {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    p {
        font-size: 25px;
    }

    .Bottom {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }

    .error {
        color: red;
        font-size: 14px;
        margin-top: 5px;
    }

    .matched {
        color: green;
        font-size: 30px;
        font-weight : 20px;
    }

    .mismatched {
        color: red;
        font-size: 25px;
        font-weight : 20px;
    }
`;

const StyledButton = styled.button`
    width: 200px;
    height: 40px;
    background-color: black;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;

    &:hover {
        background-color: #999393; /* Corrected background-color for hover */
    }

    &:active {
        background-color: #7a828a; /* Even darker color on active */
    }
`;

export default PlayGame;
