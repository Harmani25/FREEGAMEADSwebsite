import styled from "styled-components";
/* import { useState } from "react"; */
import {
  Banner,
  ImageSlider,
  Preloader,
  Tabs,
  Title,
} from "../../components/common/index";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAllGames,
  selectAllGamesStatus
} from "../../redux/store/gameSlice";
import { useEffect } from "react";
import { fetchAsyncGames, /* fetchAsyncSearchGames */ } from "../../redux/utils/gameUtils";
import { STATUS } from "../../utils/status";
import { GameList } from "../../components/game/index";
import { Link } from "react-router-dom";

/* import Search from "../../components/Anothersearchcompo"; */

import {
  selectAllGenres,
  selectAllGenresStatus,
} from "../../redux/store/genreSlice";
import { fetchAsyncGenres } from "../../redux/utils/genreUtils";
import {
  selectAllStores,
  selectAllStoresStatus,
} from "../../redux/store/storeSlice";
import { StoreList } from "../../components/store/index";
import { fetchAsyncStores } from "../../redux/utils/storeUtils";

import Generatesupes from "../../components/common/Supes";
import FormPage from "../../components/FormPage";
import SearchComponent from "../../components/Searchforgames";
import { SharedStateProvider } from "../../components/SharedStateContext";
import RegisterComponent from "../../components/Registercomponent";
import WelcomeComponent from "../../components/WelcomeComponent";






const HomePage = () => {
  const dispatch = useDispatch();
  /* const [query, setQuery] = useState(''); */
  const games = useSelector(selectAllGames);
  const gamesStatus = useSelector(selectAllGamesStatus);
  const genres = useSelector(selectAllGenres);
  const genresStatus = useSelector(selectAllGenresStatus);
  const stores = useSelector(selectAllStores);
  const storesStatus = useSelector(selectAllStoresStatus);
  /* const searchResults = useSelector((state) => state.game.searchResults);
  const searchStatus = useSelector((state) => state.game.gamesStatus);
 */
  useEffect(() => {
    dispatch(fetchAsyncGames());
    dispatch(fetchAsyncGenres());
    dispatch(fetchAsyncStores());
   
  }, [] );

 

  /* const handleSearch = (query) => {
    dispatch(fetchAsyncSearchGames(query));
    
  }; */

 /*  const renderedSearchResults = searchStatus === STATUS.LOADING ? (
    <Preloader />
  ) : searchResults?.length > 0 ? (
    <GameList games={searchResults} />
  ) : (
    "No search results found!"
  ); */


  const renderedPopularGames = (
    <>
      <GameList sliceValue={6} games={games} />
      <div className=" d-flex justify-content-center">
        <Link to="/games" className="section-btn">
          see more
        </Link>
      </div>
    </>
  );

  return (
    <HomeWrapper>

      <section>
      <div className="searchpanel">
      <br />
      <SearchComponent /> {/* Render the Search component here */}
      {/* Other content of the homepage */}
    </div>

   

      </section>
      
      <SharedStateProvider>
      <div>
        <RegisterComponent />
        <WelcomeComponent />
      </div>
    </SharedStateProvider>
      
      <Banner />
      {/* <div>
      <input
        type="text"
        placeholder="Search for games..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Searc</button>

      {renderedSearchResults}
    </div> */}
      <> 
      
 
      
      
      </>


      

      <section className="section sc-popular">
        <div className="container">
          <Title
            titleName={{ firstText: "Popular", secondText: "Games" }}
          />
          {gamesStatus === STATUS.LOADING ? (
            <Preloader />
          ) : games?.length > 0 ? (
            renderedPopularGames
          ) : (
            "No games found!"
          )}
        </div>
      </section>

      <ImageSlider />

      <section
        className="section sc-join d-flex align-items-center"
        style={{
          background: `#090624`
        }}
      >
        <div className="container w-100">
          <div className="join-content text-white mx-auto text-center">
            <h2 className="join-title mb-3 text-white">
              SEARCH FOR  YOUR FAVORITE <span>GAME HEROES</span>
            </h2>
            

            <Generatesupes className="Supes"/>
          </div>
        </div>
      </section>

      <section className="section sc-genres">
        <div className="container">
          <Title
            titleName={{
              firstText: "FREEGAMEADS Game",
              secondText: "Genres",
            }}
          />
        </div>
        {genresStatus === STATUS.LOADING ? (
          <Preloader />
        ) : genres?.length > 0 ? (
          <Tabs sliceValue={9} data={genres} />
        ) : (
          "No genres found!"
        )}
      </section>

      <section
        className="section sc-stores"
        style={{
          background: `#090624`
        }}
      >
        <div className="container ">
          <Title
            titleName={{
              firstText: "FREEGAMEADS",
              secondText: "Game Stores",
            }}
          />
          {storesStatus === STATUS.LOADING ? (
            <Preloader />
          ) : stores?.length > 0 ? (
            <StoreList stores={stores} />
          ) : (
            "No store!"
          )}
        </div>
      </section>

      
      

      <section id="Formpage">
         
          

          <FormPage
          /> 

          

      </section>

      
    
      
    </HomeWrapper>
  );
};

export default HomePage;

const HomeWrapper = styled.div`
  .sc-popular {
    background-color: var(--clr-violet-dark-active);
    .section-btn {
      margin-top: 60px;
      color: var(--clr-white);
      border-radius: 15px;
      justify-content: center;
      display: flex;
      


    }
  }



  .sc-join {
    min-height: 640px;

    .join-content {
      max-width: 600px;
    }

    .join-title {
      text-shadow: 0px 4px 4px 0px #00000040;
      font-size: 44px;
      letter-spacing: 0.09em;

      span {
        color: var(--clr-green-normal);
        font-family: var(--font-family-right);
      }
    }
  }

  .sc-genres {
    background-color: var(--clr-violet-dark-active);
  }

  .sc-stores {
    min-height: 841px;
  }

  
  
`;
