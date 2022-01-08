import React, { useState, useRef, useEffect } from 'react';
import { CenteredContent, SubTitle, Title } from '../global/globalStyledComponents';
import { useNavigate } from 'react-router-dom';
import { Input } from 'semantic-ui-react';
import {
  CAR_QUESTIONS,
  INPUT_EMPTY_ERROR,
  LAST_QUESTION_BUTTON_TITLE,
  MARRY_QUESTIONS,
  MARRY_QUESTIONS_INDEX,
  NEXT_QUESTION_BUTTON_TITLE,
  NUMBER_OF_KIDS_QUESTIONS,
  NUMBER_OF_KIDS_QUESTION_INDEX,
  SETUP_INPUT_PLACEHOLDER,
  SETUP_TITLE,
} from './setupConstants';
import { ArrowButtonWithTooltip } from '../global/ArrowButtonWithTooltip';
import { GAME_PAGE } from '../global/globalConstants';

export default function Setup() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestionTypeIndex, setCurrentQuestionTypeIndex] =
    useState(MARRY_QUESTIONS_INDEX);

  const [questionAnswers, setQuestionAnswers] = useState([]);
  const [currentAnswer, setCurrentAnswer] = useState('');
  const answerInputRef = useRef();
  const navigate = useNavigate();

  const questions = [MARRY_QUESTIONS, NUMBER_OF_KIDS_QUESTIONS, CAR_QUESTIONS];

  const isLastQuestion =
    currentQuestionIndex === questions[currentQuestionTypeIndex].length - 1 &&
    currentQuestionTypeIndex === questions.length - 1;

  const inputType = currentQuestionTypeIndex === NUMBER_OF_KIDS_QUESTION_INDEX ? 'number' : 'text';

  const onInputChange = (_, data) => {
    setCurrentAnswer(data.value);
  };

  const onInputKeyPress = (event) => {
    if (event.key === 'Enter' && currentAnswer) {
      onSubmitAnswer()
    }
  }

  const onSubmitAnswer = () => {
    const currentAnswerTypeArray = [
      ...(questionAnswers[currentQuestionTypeIndex] || []),
      currentAnswer,
    ];
    const currentAnswerArray = [...questionAnswers];
    currentAnswerArray[currentQuestionTypeIndex] = currentAnswerTypeArray;

    if (isLastQuestion) {
      navigate(GAME_PAGE, { state: currentAnswerArray });
    }

    setQuestionAnswers(currentAnswerArray);

    if (currentQuestionIndex === questions[currentQuestionTypeIndex].length - 1) {
      setCurrentQuestionIndex(0);
      setCurrentQuestionTypeIndex(currentQuestionTypeIndex + 1);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }

    setCurrentAnswer('');
    answerInputRef.current.focus();
  };

  useEffect(() => {
    answerInputRef.current.focus();
  }, []);

  return (
    <CenteredContent>
      <Title>{SETUP_TITLE}</Title>
      <SubTitle>{questions[currentQuestionTypeIndex][currentQuestionIndex]}</SubTitle>
      <Input
        onKeyPress={onInputKeyPress}
        type={inputType}
        ref={answerInputRef}
        value={currentAnswer}
        size="big"
        placeholder={SETUP_INPUT_PLACEHOLDER}
        onChange={onInputChange}
      />
      <ArrowButtonWithTooltip
        disabled={!currentAnswer}
        buttonTitle={
          isLastQuestion ? LAST_QUESTION_BUTTON_TITLE : NEXT_QUESTION_BUTTON_TITLE
        }
        tooltipContent={INPUT_EMPTY_ERROR}
        onClick={onSubmitAnswer}
      />
    </CenteredContent>
  );
}
