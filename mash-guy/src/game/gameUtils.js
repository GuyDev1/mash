import {
  ANSWER_TYPES,
  CARS_TYPE_START_INDEX,
  GAME_TILE_STATUS,
  KIDS_TYPE_START_INDEX,
  MARRY_TYPE_START_INDEX,
  MASH_LETTER_ARRAY,
} from './gameConstants';

export const prepareAnswerIterationArray = (questionAnswers) => {
  return [MASH_LETTER_ARRAY, ...questionAnswers].flat().map((answer, index) => ({
    type: getAnswerTypeByIndex(index),
    value: answer,
    status: index === 0 ? GAME_TILE_STATUS.ACTIVE : null,
  }));
};

export const parseFortune = (chosenAnswers) => {
  return chosenAnswers.map((answer) => {
    switch (answer.type) {
      case ANSWER_TYPES.MASH:
        return `You'll live in a ${answer.value} -> you know what that means!`;
      case ANSWER_TYPES.MARRY:
        return `Marry ${answer.value} -> Forever and ever`;
      case ANSWER_TYPES.KIDS:
        return `have ${answer.value} kids -> Get to work!`;
      case ANSWER_TYPES.CARS:
        return `drive ${answer.value} -> Hope it's a hybrid`;
    }
  });
};

const getAnswerTypeByIndex = (index) => {
  if (index >= CARS_TYPE_START_INDEX) {
    return ANSWER_TYPES.CARS;
  }
  if (index >= KIDS_TYPE_START_INDEX) {
    return ANSWER_TYPES.KIDS;
  }
  if (index >= MARRY_TYPE_START_INDEX) {
    return ANSWER_TYPES.MARRY;
  }
  return ANSWER_TYPES.MASH;
};
