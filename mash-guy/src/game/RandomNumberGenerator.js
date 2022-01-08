import React from 'react';
import { CenteredContent, Title } from '../global/globalStyledComponents';
import { Button } from 'semantic-ui-react';
import {
  GENERATE_RANDOM_NUMBER_TITLE,
  STOP_NUMBER_GENERATION_TITLE,
} from './gameConstants';

export function RandomNumberGenerator({ currentRandomNumber, onStopClick }) {
  return (
    <CenteredContent>
      <Title>{GENERATE_RANDOM_NUMBER_TITLE}</Title>
      <Title>{currentRandomNumber}</Title>
      <Button size="big" onClick={onStopClick}>
        {STOP_NUMBER_GENERATION_TITLE}
      </Button>
    </CenteredContent>
  );
}
