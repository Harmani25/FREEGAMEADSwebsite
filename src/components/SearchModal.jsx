import PropTypes from 'prop-types';

const SearchModal = ({ results, onClose }) => {

  const searchResults = {
    count: 180,
    next: 'https://api.rawg.io/api/games?key=7a11d28dc4f24a80a20a36c5fef7dab1&page=2&search=fifa',
    previous: null,
    results: [
      { /* item 1 */ },
      { /* item 2 */ },
      // More items...
    ],
    user_platforms: false
  };
  const resultsArray = searchResults.results;

  

  // Now you can iterate over the results array or access its properties as needed
  resultsArray.forEach((result, index) => {
    if (typeof resultsArray === 'object' && !Array.isArray(resultsArray)) {
      // Handle rendering for a single item or object
      // For example:
      return (
        <div className="resultmodal">
          <div className="modal-content">
            <button className="close-btn" onClick={onClose}>Close</button>
            
            <div> image : {`result ${result}`}</div>
            
            {/* Render other properties of the single item */}
          </div>
        </div>
      );
    }
    console.log(`Result ${index + 1}:`, result);
    // You can render the results here if needed

    if (!Array.isArray(results)) {
      return <div>No results found</div>;
    }
  
    // If results is an array, render as usual
    return (
      <div className="resultmodal">
        <div className="modal-content">
          <button className="close-btn" onClick={onClose}>Close</button>
          <ul>
            {/* Iterate over each item in the results array */}
            {resultsArray.map((result, count) => (
              <li key={count}>
                {/* Access and render properties of each item */}
                <div>Name: {result.name}</div>
                <div>Slug: {result.slug}</div>
                {/* Render other properties as needed */}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  });

  



  // Check if results is not an array
  
};

SearchModal.propTypes = {
  results: PropTypes.oneOfType([
    PropTypes.array, // Accept array
    PropTypes.object // Accept object
  ]),
  onClose: PropTypes.func.isRequired
};

export default SearchModal;
