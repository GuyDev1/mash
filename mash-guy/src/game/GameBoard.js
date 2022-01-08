import React, { useState, useEffect, useRef } from 'react';
import { SubTitle } from '../global/globalStyledComponents';
import {
  CARS_TYPE_END_INDEX,
  CARS_TYPE_START_INDEX,
  GAME_TILE_STATUS,
  KIDS_TYPE_END_INDEX,
  KIDS_TYPE_START_INDEX,
  MARRY_TYPE_END_INDEX,
  MARRY_TYPE_START_INDEX,
  MASH_TYPE_END_INDEX,
  MASH_TYPE_START_INDEX,
  NUMBER_OF_CATEGORIES,
  RUNNING_NUMBER_INTERVAL,
  TOTAL_NUMBER_OF_VALUES,
} from './gameConstants';
import {
  AnswerValue,
  GameBoardContainer,
  GameColumn,
  GameRow,
  NumberIterationContainer,
  RunningNumber,
} from './gameStyledComponents';
import { parseFortune, prepareAnswerIterationArray } from './gameUtils';

export function GameBoard({ questionAnswers, chosenRandomNumber, setGameOver }) {
  const [currentRunningNumber, setCurrentRunningNumber] = useState(1);
  const [currentAnswerIndex, setCurrentAnswerIndex] = useState(0);
  const [fortune, setFortune] = useState();
  const [answers, setAnswers] = useState(prepareAnswerIterationArray(questionAnswers));

  const runningNumberInterval = useRef();
  const didMountRef = useRef(false);

  const moveToNextTile = () => {
    const chosenAnswers = answers.filter(
      ({ status }) => status === GAME_TILE_STATUS.CHOSEN,
    );

    if (chosenAnswers.length === NUMBER_OF_CATEGORIES) {
      onGameEnd(chosenAnswers);
      return;
    }

    if (currentRunningNumber > chosenRandomNumber) {
      setCurrentRunningNumber(1);
      onRandomNumberReached();
      return;
    }

    const previousAnswer = answers[currentAnswerIndex];
    let nextAnswerIndex = (currentAnswerIndex + 1) % TOTAL_NUMBER_OF_VALUES;
    let currentAnswer = answers[nextAnswerIndex];

    while (currentAnswer.status !== null) {
      nextAnswerIndex = (nextAnswerIndex + 1) % TOTAL_NUMBER_OF_VALUES;
      currentAnswer = answers[nextAnswerIndex];
    }

    currentAnswer.status = GAME_TILE_STATUS.ACTIVE;

    if (previousAnswer.status === GAME_TILE_STATUS.ACTIVE) {
      previousAnswer.status = null;
    }

    setCurrentAnswerIndex(nextAnswerIndex);
    setAnswers(answers);
  };

  const iterateAnswers = () => {
    setCurrentRunningNumber((prevNumber) => prevNumber + 1);
  };

  const onRandomNumberReached = () => {
    const currentAnswer = answers[currentAnswerIndex];
    currentAnswer.status = GAME_TILE_STATUS.CROSSED;

    const answersWithCurrentType = answers.filter(
      ({ type }) => type === currentAnswer.type,
    );
    const crossedAnswersWithCurrentType = answersWithCurrentType.filter(
      ({ status }) => status === GAME_TILE_STATUS.CROSSED,
    );

    if (crossedAnswersWithCurrentType.length === NUMBER_OF_CATEGORIES - 1) {
      const chosenAnswer = answersWithCurrentType.find(
        ({ status }) => status !== GAME_TILE_STATUS.CROSSED,
      );
      chosenAnswer.status = GAME_TILE_STATUS.CHOSEN;
    }

    setAnswers(answers);
  };

  const onGameEnd = (chosenAnswers) => {
    setGameOver(true);
    setFortune(parseFortune(chosenAnswers));
    clearInterval(runningNumberInterval.current);
  };

  const startGame = () => {
    const intervalId = setInterval(iterateAnswers, RUNNING_NUMBER_INTERVAL);
    runningNumberInterval.current = intervalId;
  };

  useEffect(() => {
    if (didMountRef.current) {
      moveToNextTile();
    }
  }, [currentRunningNumber]);

  useEffect(() => {
    startGame();
    didMountRef.current = true;
  }, []);

  return (
    <GameBoardContainer>
      <GameRow>
        {answers
          .slice(MASH_TYPE_START_INDEX, MASH_TYPE_END_INDEX)
          .map((mashLetter, index) => (
            <AnswerValue status={mashLetter.status} key={index}>
              {mashLetter.value}
            </AnswerValue>
          ))}
      </GameRow>
      <GameRow>
        <GameColumn reverse>
          {answers
            .slice(CARS_TYPE_START_INDEX, CARS_TYPE_END_INDEX)
            .map((carOption, index) => (
              <AnswerValue status={carOption.status} key={index}>
                {carOption.value}
              </AnswerValue>
            ))}
        </GameColumn>
        <NumberIterationContainer>
          <div>
            {fortune?.map((sentence, index) => (
              <SubTitle key={index}>{sentence}</SubTitle>
            )) || <RunningNumber> {currentRunningNumber}</RunningNumber>}
          </div>
        </NumberIterationContainer>
        <GameColumn>
          {answers
            .slice(MARRY_TYPE_START_INDEX, MARRY_TYPE_END_INDEX)
            .map((marryOption, index) => (
              <AnswerValue status={marryOption.status} key={index}>
                {marryOption.value}
              </AnswerValue>
            ))}
        </GameColumn>
      </GameRow>
      <GameRow reverse>
        {answers
          .slice(KIDS_TYPE_START_INDEX, KIDS_TYPE_END_INDEX)
          .map((kidsOption, index) => (
            <AnswerValue status={kidsOption.status} key={index}>
              {kidsOption.value}
            </AnswerValue>
          ))}
      </GameRow>
    </GameBoardContainer>
  );
}
