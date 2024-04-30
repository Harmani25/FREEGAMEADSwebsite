import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const supesToken = 3068745043259722;
const supesUrl = `https://superheroapi.com/api.php/${supesToken}`;

const HeroStats = ({ character }) => {
  const { name, image, powerstats } = character;

  return (
    <div>
      <h2 className="heroname">{name}</h2>
      <img className="heroimg" src={image.url} alt={name} height={300} width={300} />
      <div className="herostats">
        {Object.keys(powerstats).map((stat) => (
          <p className="powerstats" key={stat}>
            {stat}: {powerstats[stat]}
          </p>
        ))}
      </div>
    </div>
  );
};

const Generatesupes = () => {
  const [hero, setHero] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchHero = async (id) => {
    try {
      const response = await fetch(`${supesUrl}/${id}`);
      const data = await response.json();
      setHero(data);
    } catch (error) {
      console.error("Error fetching hero:", error);
    }
  };

  useEffect(() => {
    if (!hero) {
      fetchHero(Math.floor(Math.random() * 731) + 1);
    }
  }, [hero]);

  const handleSearch = async () => {
    try {
      const response = await fetch(`${supesUrl}/search/${searchTerm}`);
      const data = await response.json();
      if (data.results && data.results.length > 0) {
        setHero(data.results[0]);
      } else {
        console.log("Hero not found");
      }
    } catch (error) {
      console.error("Error searching hero:", error);
    }
  };

  const handleShuffle = () => {
    const randomId = Math.floor(Math.random() * 731) + 1;
    fetchHero(randomId); 
  };

  return (
    <div>
      <div className="searcharea">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="searchbtn text-white" onClick={handleSearch}>
          Search
        </button>
        <button className="searchbtn " onClick={handleShuffle}>Shuffle</button>
      </div>
      {hero && <HeroStats character={hero} />}
    </div>
  );
};

HeroStats.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.shape({
      url: PropTypes.string.isRequired,
    }).isRequired,
    powerstats: PropTypes.objectOf(PropTypes.string).isRequired,
  }),
};

export default Generatesupes;
