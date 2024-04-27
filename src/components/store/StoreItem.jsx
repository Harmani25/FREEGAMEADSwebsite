import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const StoreItem = ({ storeItem }) => {
  return (
    <StoreItemWrapper className="card d-grid">
      <div className="card-img img-fit-cover">
        <img src={storeItem?.image_background} alt={storeItem?.id} />
      </div>
      <div className="card-text d-flex flex-column justify-content-center">
        <h5 className="card-title text-uppercase fw-7 text-uppercase">
          <Link className="text-white" to={`stores/${storeItem.id}`}>
            {storeItem?.name}
          </Link>
        </h5>
        <ul className="card-info">
          <li>
            <span className="fw-7">Go to: </span>
            <a href={"https://www." + storeItem?.domain}>{storeItem?.domain}</a>
          </li>
          <li>
            <span className="fw-7">Games Total: </span>
            {storeItem?.games_count}
          </li>
        </ul>
        {storeItem?.games && <p className="fw-7 text-white">Games Available at store:</p>}
        <ul className="card-games d-flex flex-wrap">
          {storeItem?.games?.map((item) => {
            return (
              <li className="card-game" key={item.id}>
                <Link to={`games/${item.id}`}>{item.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </StoreItemWrapper>
  );
};

export default StoreItem;

StoreItem.propTypes = {
  storeItem: PropTypes.object,
};

const StoreItemWrapper = styled.div`
  grid-template-columns: repeat(1, 2fr);
  min-height: 120px;
  margin: 16px 0;

  .card-text {
    padding: 16px;

    .card-title {
      letter-spacing: 0.04em;
      color: #0b082d;
      font-size: 16px;
      display: inline-block;
      transition: var(--transition-default);
      background-color: var(--clr-pink-normal);
      width: 20%;
      border-radius: 10px;
      padding: 0.5rem;

      &:hover {
        color: #000;
        opacity: 0.9;
      }
    }

    .card-info {
      li {
       
        color: #fff;

        a {
          color: #fff;
        }
      }
    }

    .card-games {
      gap: 8px;
      li {
        background-color: var(--clr-pink-normal);
        border-radius: 10px;
        padding-right: 5px;
        padding-left: 5px;
        height: 23px;

        * {
          font-weight: 500;
          color: var(--clr-violet-darker);
        }

        a {
          color: var(--clr-white);
          font-size: 13px;
          display: inline-block;
          transform: translateY(-3px);
          font-style: italic;
        }
      }
    }
  }

  .card-img{
    border: solid 3px var(--clr-white);
    border-radius: 7px;
  }
`;
