import Styled from 'styled-components';
import { GAME_TILE_STATUS } from './gameConstants';

export const GameContent = Styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
`;

export const GameBoardContainer = Styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const GameRow = Styled.div`
	width: 80%;
	display: flex;
	align-content: space-evenly;
	// border: 1px solid #FFFFFF;
	flex-direction: ${(props) => (props.reverse ? 'row-reverse' : 'row')};
`;

export const GameColumn = Styled.div`
	flex: 1;
	// border: 1px solid #FFFFFF;
	text-align: center;
	display: flex;
	flex-direction: ${(props) => (props.reverse ? 'column-reverse' : 'column')};
`;

export const NumberIterationContainer = Styled.div`
	flex: 2;
	// border: 1px solid #FFFFFF;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	// font-size: 2em;
`;

export const AnswerValue = Styled.div`
	flex: 1;
	// border: 1px solid #FFFFFF;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 20px;
	font-size: 1.5em;
	text-decoration: ${({ status }) =>
    status === GAME_TILE_STATUS.CROSSED ? 'line-through' : 'none'};
	background-color: ${({ status }) => {
    if (status === GAME_TILE_STATUS.CHOSEN) {
      return '#f50057';
    }

    if (status === GAME_TILE_STATUS.ACTIVE) {
      return '#b3e5fc';
    }
    return 'transparent';
  }};

	color: ${({ status }) => {
    if (status === GAME_TILE_STATUS.CHOSEN) {
      return '#FFFFFF';
    }
    if (status === GAME_TILE_STATUS.CROSSED) {
      return '#525252';
    }

    if (status === GAME_TILE_STATUS.ACTIVE) {
      return '#000000';
    }

    return '#FFFFFF';
  }};
	border-radius: 4px;
  	border: 2px solid ${({ status }) => {
      if (status === GAME_TILE_STATUS.CHOSEN) {
        return '#FFFFFF';
      }

      if (status === GAME_TILE_STATUS.ACTIVE) {
        return '#E3F2FD';
      }

      return 'transparent';
    }};

`;

export const RunningNumber = Styled.div`
	flex: 2;
	border: 2px solid #FFFFFF;
	border-radius: 50%;
	width: 64px;
	height: 64px;
	padding: 20px;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 2em;
`;
