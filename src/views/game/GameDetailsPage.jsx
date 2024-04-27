import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { selectSingleGame, selectSingleGameStatus } from '../../redux/store/gameSlice';
import { useEffect } from 'react';
import { fetchAsyncGameDetails } from '../../redux/utils/gameUtils';
import { Breadcrumb, Preloader } from '../../components/common';

import { STATUS } from '../../utils/status';
import { GameDetails } from '../../components/game';

const GameDetailsPage = () => {
  const { gameId } = useParams();
  const dispatch = useDispatch();
  const singleGameData = useSelector(selectSingleGame);
  const singleGameStatus = useSelector(selectSingleGameStatus);

  useEffect(() => {
    dispatch(fetchAsyncGameDetails(gameId));
  }, [gameId]);

  const gameNameById = {
    
    [singleGameData.id] : singleGameData.name
  }

  return (
    <GameDetailsPageWrapper>
      <div className='sc-details ' style = {{
        
      }}> 
        <div className='Gamedetailsbody container'>
          <Breadcrumb dataNameById = { gameNameById } />

          <h1 className='Head-text'>
            See a game you like? Checkout the game details
          </h1>
          {
            singleGameStatus === STATUS.LOADING ? <Preloader /> : <GameDetails gameData = { singleGameData } />
          }
        </div>
      </div>
    </GameDetailsPageWrapper>
  )
}

export default GameDetailsPage;

const GameDetailsPageWrapper = styled.div`
  .sc-details{
    min-height: 50vh;
    padding-top: 60px;
    padding-bottom: 60px;
    background-color: var(--clr-pink-normal);
  }

  .Head-text{
    background-color: var(--clr-white);
  }
  
`;
