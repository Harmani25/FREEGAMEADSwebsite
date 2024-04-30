import { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';


const SharedStateContext = createContext();


export const SharedStateProvider = ({ children }) => {
  const [favoriteGame, setFavoriteGame] = useState('');
  const [name, setName] = useState('');

  return (
    <SharedStateContext.Provider value={{ favoriteGame, setFavoriteGame, name, setName }}>
    {children}
  </SharedStateContext.Provider>
  );
};

SharedStateProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Custom hook to access the shared state
export const useSharedState = () => {
    const context = useContext(SharedStateContext);
    if (!context) {
      throw new Error('SharedState Error. Please refresh');
    }
    return context;
  };
