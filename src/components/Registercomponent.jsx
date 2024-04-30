// RegisterComponent.js
import { useState } from 'react';
import { useSharedState } from './SharedStateContext';

const RegisterComponent = () => {
  const { setFavoriteGame } = useSharedState();
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFavoriteGame(inputValue);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your favorite game:
          <input type="text" value={inputValue} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegisterComponent;
