import React, { useRef, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowButtonWithTooltip } from '../global/ArrowButtonWithTooltip';
import { SETUP_PAGE } from '../global/globalConstants';
import { SubTitle, Title } from '../global/globalStyledComponents';
import { GameBoard } from './GameBoard';
import {
  GAME_TITLE,
  RANDOM_NUMBER_GENERATION_INTERVAL,
  RANDOM_NUMBER_RESULT,
  TOTAL_NUMBER_OF_VALUES,
  RESTART_GAME_BUTTON_TITLE
} from './gameConstants';
import { GameContent } from './gameStyledComponents';
import { RandomNumberGenerator } from './RandomNumberGenerator';

export default function Game() {
  const { state: questionAnswers } = useLocation();
  const [currentRandomNumber, setCurrentRandomNumber] = useState();
  const [chosenRandomNumber, setChosenRandomNumber] = useState();
  const [isGameOver, setGameOver] = useState(false);
  const randomNumberGenerationInterval = useRef();

  const navigate = useNavigate();

  const startNumberGeneration = () => {
    const intervalId = setInterval(() => {
      setCurrentRandomNumber(Math.floor(Math.random() * TOTAL_NUMBER_OF_VALUES) + 2);
    }, RANDOM_NUMBER_GENERATION_INTERVAL);

    randomNumberGenerationInterval.current = intervalId;
  };

  useEffect(() => {
    startNumberGeneration();
  }, []);

  const onStopNumberGenerationButtonClick = () => {
    setChosenRandomNumber(currentRandomNumber);
    clearInterval(randomNumberGenerationInterval.current);
  };

  const onRestartGameClick = () => {
    navigate(SETUP_PAGE);
  };

  if (!chosenRandomNumber) {
    return (
      <RandomNumberGenerator
        currentRandomNumber={currentRandomNumber}
        onStopClick={onStopNumberGenerationButtonClick}
      />
    );
  }

  return (
    <GameContent>
      <Title>{GAME_TITLE}</Title>
      <SubTitle>{`${RANDOM_NUMBER_RESULT}${chosenRandomNumber}`}</SubTitle>
      <GameBoard
        chosenRandomNumber={chosenRandomNumber}
        questionAnswers={questionAnswers}
        setGameOver={setGameOver}
      />

      {isGameOver && 
        <ArrowButtonWithTooltip
          buttonTitle={RESTART_GAME_BUTTON_TITLE}
          onClick={onRestartGameClick}
        />
      }
    </GameContent>
  );
}
