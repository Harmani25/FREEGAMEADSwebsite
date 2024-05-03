import PropTypes from 'prop-types';

const SearchModal = ({ results, onClose }) => {

  const searchResults = {
    count: 180,
    next: 'https://api.rawg.io/api/games?key=7a11d28dc4f24a80a20a36c5fef7dab1&page=2&search=fifa',
    previous: null,
    results: [
    
    ],
    user_platforms: false
  };
  const resultsArray = searchResults.results;

  

 
  resultsArray.forEach((result, index) => {
    if (typeof resultsArray === 'object' && !Array.isArray(resultsArray)) {
      
      // For example:
      return (
        <div className="resultmodal">
          <div className="modal-content">
            <button className="close-btn" onClick={onClose}>Close</button>
            
            <div> image : {`result ${result}`}</div>
            
           
          </div>
        </div>
      );
    }
    console.log(`Result ${index + 1}:`, result);
  

    if (!Array.isArray(results)) {
      return <div>No results found</div>;
    }
  
    // If results is an array, render as usual
    return (
      <div className="resultmodal">
        <div className="modal-content">
          <button className="close-btn" onClick={onClose}>Close</button>
          <ul>
            
            {resultsArray.map((result, count) => (
              <li key={count}>
              
                <div>Name: {result.name}</div>
                <div>Slug: {result.slug}</div>
               
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
