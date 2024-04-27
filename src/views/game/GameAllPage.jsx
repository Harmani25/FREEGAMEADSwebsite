import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectAllGames, selectAllGamesStatus } from '../../redux/store/gameSlice';
import { useEffect, useState } from 'react';
import { fetchAsyncGames } from '../../redux/utils/gameUtils';
import {  Preloader, Title } from '../../components/common';
import { STATUS } from '../../utils/status';
import { GameList } from '../../components/game';

const GameAllPage = () => {
  const Thedispatch = useDispatch();
  const games = useSelector(selectAllGames);
  const gamesStatus = useSelector(selectAllGamesStatus);
  
  const [page] = useState(1);

  useEffect(() => {
    Thedispatch(fetchAsyncGames(page));
  }, [page]);

 

  return (
    <GameAllPageWrapper>
      <div className='sc-games section'>
        <div className='container'>
          <Title titleName={{
            firstText: "Games",
            secondText: "Available"
          }} />

          {
            gamesStatus === STATUS.LOADING ? <Preloader /> : games?.length > 0 ? <>
              <GameList games = { games } />
            </> : "No games showing!"
          }
        </div>
      </div>
    </GameAllPageWrapper>
  )
}

export default GameAllPage;

const GameAllPageWrapper = styled.div`
  background-color: var(--clr-violet-dark-active);

  .sc-games{
    min-height: 100vh;
    padding-top: 65px;
  }
`;
