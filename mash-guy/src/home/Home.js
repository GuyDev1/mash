import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CenteredContent, Title } from '../globalStyledComponents';
import { SETUP_PAGE } from '../App';
import { HOME_BUTTON_TITLE, MESH_GAME_TITLE } from './homeConstants';
import { ArrowButtonWithTooltip } from '../global/ArrowButtonWithTooltip';

export default function Home() {
  const navigate = useNavigate();

  const onReadyClick = () => {
    navigate(SETUP_PAGE);
  };

  return (
    <CenteredContent>
      <Title>{MESH_GAME_TITLE}</Title>
      <ArrowButtonWithTooltip buttonTitle={HOME_BUTTON_TITLE} onClick={onReadyClick} />
    </CenteredContent>
  );
}
