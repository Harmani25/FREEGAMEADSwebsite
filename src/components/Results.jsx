
import PropTypes from 'prop-types'; 
import { Link } from 'react-router-dom';

const Results = ({ gameResults }) => {
  return (
    <div className="results-container">
      <ul>
        {gameResults.map((game) => (
          <li key={game.id}>
            <Link
              to={{
                pathname: `/game/${game.name}`,
                gameProps: {
                  game: game
                }
              }}
            >
              <h3>{game.id}</h3>
              <img src={game.background_image} alt="game" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

console.log(Results)

// Define PropTypes
Results.propTypes = {
  gameResults: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      background_image: PropTypes.string.isRequired
      // Add more PropTypes as needed for other properties
    })
  ).isRequired
};

export default Results;
