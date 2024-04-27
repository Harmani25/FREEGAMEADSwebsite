import styled from 'styled-components';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import PropTypes from "prop-types";

const StarRating = ({ rating }) => {
    const stars = Array.from({ length: 3 }, (_, starid) => {
        const starrate = starid + 0.5;
        return (
            <li key = { starid }>
                {
                    rating >= starid + 1 ? (<BsStarFill />) : rating >= starrate ? (<BsStarHalf />) : (<BsStar />)
                }
            </li>
        )
    });

    return (
        <StarRatingWrapper className='rating d-flex align-items-start text-green'>
            { stars }
        </StarRatingWrapper>
    )
}

export default StarRating;

StarRating.propTypes = {
    rating: PropTypes.number
}

const StarRatingWrapper = styled.ul`
    position: absolute;
    right: 18px;
    bottom: 10px;
    z-index: 1;

    li{
        padding: 0 2px;
        font-size: 14px;
    }
`;
