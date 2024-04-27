import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { sliderImages } from '../../utils/images';

const ImageSlider = () => {
  
  const imagesettings = {
    className: "middleimage",
    arrows: false,
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    slidesToScroll: 1,
   
    autoplay: true,
    dots: true,
    responsiveness: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
         
        }
      }
    ]
  };

  return (
    <ImageSliderWrapper className='section'>
      <Slider { ...imagesettings } className='game-slider'>
        {
          sliderImages.map((image, idimg) => (
            <div className='slider-item img-fit-cover' key = { idimg }>
              <img src = { image }  />
            </div>
          ))
        }
      </Slider>
    </ImageSliderWrapper>
  )
}

export default ImageSlider;

const ImageSliderWrapper = styled.div`
  background-color: #fffff;

  .game-slider{
    .slider-item{
      height: 300px;
      padding: 16px;
      

      img{
        border: 1px solid var( --clr-violet-darker);
      }
    }

    .slick-list{
      padding-top: 85px;
      padding-bottom: 85px;
    }

    .slick-dots{
      li{
        height: 10px;
        width: 60px;
        button{
          &::before{
            width: 50%;
            height: 50%;
            border: 2px solid var(--clr-pink-normal);
            color: unset;
            transition: var(--transition-default);
          }
        }

        &.slick-active{
          background-color:none;
        }
      }
    }

  }

  .section{
    background-color: var(--clr-green-normal)
  }
`;
