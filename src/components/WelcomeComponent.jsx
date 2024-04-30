

import { useSharedState } from './SharedStateContext';

const WelcomeComponent = () => {
  const { favoriteGame } = useSharedState();

  return (
    <div className='truegamer'>
      
      {favoriteGame && <p>YES!! YOU ARE A TRUE GAMER {favoriteGame} </p>}
    </div>
  );
};

export default WelcomeComponent;
