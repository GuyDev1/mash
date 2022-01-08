import {
  CAR_QUESTIONS,
  MARRY_QUESTIONS,
  NUMBER_OF_KIDS_QUESTIONS,
} from '../setup/setupConstants';

export const GENERATE_RANDOM_NUMBER_TITLE = 'Hit stop to reveal your lucky number!';
export const GAME_TITLE = "It's time for your fortune!";
export const RANDOM_NUMBER_RESULT = 'Your number is: ';
export const STOP_NUMBER_GENERATION_TITLE = 'Stop!';
export const RESTART_GAME_BUTTON_TITLE = 'Change Your Fortune?';
export const TOTAL_NUMBER_OF_VALUES = 16;
export const RANDOM_NUMBER_GENERATION_INTERVAL = 100;
export const RUNNING_NUMBER_INTERVAL = 800;
export const MASH_LETTER_ARRAY = ['M', 'A', 'S', 'H'];
export const NUMBER_OF_CATEGORIES = 4;

export const MASH_TYPE_START_INDEX = 0;
export const MASH_TYPE_END_INDEX = MASH_TYPE_START_INDEX + MASH_LETTER_ARRAY.length;

export const MARRY_TYPE_START_INDEX = MASH_TYPE_END_INDEX;
export const MARRY_TYPE_END_INDEX = MARRY_TYPE_START_INDEX + MARRY_QUESTIONS.length;

export const KIDS_TYPE_START_INDEX = MARRY_TYPE_END_INDEX;
export const KIDS_TYPE_END_INDEX =
  KIDS_TYPE_START_INDEX + NUMBER_OF_KIDS_QUESTIONS.length;

export const CARS_TYPE_START_INDEX = KIDS_TYPE_END_INDEX;
export const CARS_TYPE_END_INDEX = CARS_TYPE_START_INDEX + CAR_QUESTIONS.length;

export const ANSWER_TYPES = {
  MASH: 'MASH',
  MARRY: 'MARRY',
  KIDS: 'KIDS',
  CARS: 'CARS',
};

export const GAME_TILE_STATUS = {
  ACTIVE: 'ACTIVE',
  CROSSED: 'CROSSED',
  CHOSEN: 'CHOSEN',
};

export const ARRAY_INDEX_TO_TYPE = {
  0: ANSWER_TYPES.MASH,
  1: ANSWER_TYPES.MARRY,
  2: ANSWER_TYPES.KIDS,
  3: ANSWER_TYPES.CARS,
};
