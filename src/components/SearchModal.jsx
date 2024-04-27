import PropTypes from 'prop-types';

const SearchModal = ({ results, onClose }) => {
  // Check if results is an object
  if (typeof results === 'object' && !Array.isArray(results)) {
    // Handle rendering for a single item or object
    // For example:
    return (
      <div className="resultmodal">
        <div className="modal-content">
          <button className="close-btn" onClick={onClose}>Close</button>
          <div>{results.released}</div>
          <div>{results.rating}</div>
          {/* Render other properties of the single item */}
        </div>
      </div>
    );
  }

  // Check if results is not an array
  if (!Array.isArray(results)) {
    return <div>No results found</div>;
  }

  // If results is an array, render as usual
  return (
    <div className="resultmodal">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>Close</button>
        <ul>
          {results.map((result) => (
            <li key={result.id}></li>
          ))}
        </ul>
      </div>
    </div>
  );
};

SearchModal.propTypes = {
  results: PropTypes.oneOfType([
    PropTypes.array, // Accept array
    PropTypes.object // Accept object
  ]),
  onClose: PropTypes.func.isRequired
};

export default SearchModal;
