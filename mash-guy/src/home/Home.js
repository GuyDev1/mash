import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { Title } from '../globalStyledComponents';
import { HomeContent } from './homeStyledComponents';

const MESH_GAME_TITLE = "Let's play M.A.S.H - Remote style";

export default function Home() {
  return (
    <HomeContent>
      <Title>{MESH_GAME_TITLE}</Title>
      <Button size='big' animated >
        <Button.Content visible>Next</Button.Content>
        <Button.Content hidden>
          <Icon name="arrow right" />
        </Button.Content>
      </Button>
    </HomeContent>
  );
}
