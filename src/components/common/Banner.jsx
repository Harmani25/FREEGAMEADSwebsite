import styled from 'styled-components';








const Banner = () => {
  return (
    <BannerWrap className='d-flex align-items-center justify-content-start' style = {{
      background:` linear-gradient(233.75deg, rgba(0, 89, 67, 0.40) 0%, rgba(15, 30, 60, 0.41) 42%), url(./src/assets/images/controllerbanner.jpg) center/cover no-repeat`
    }}>
      <div className='banner-content  container text-white'>
        <div className='banner-badge w-200 text-uppercase'>Welcome to FREEGAMEADS</div>
        
        <p className='lead-text  '>Embark on a gaming journey like no other, where immersive experiences push boundaries and the extraordinary becomes the norm. As fervent gamers ourselves, we understand the quest for unparalleled adventures, breathtaking graphics, and captivating narratives that linger long after the controller is set aside.
        Level up your gaming. Level up your life..</p>

        
        
      </div>

      <div > 
      
        
      </div>
    </BannerWrap>
  )
}

export default Banner;

const BannerWrap = styled.div`
    min-height: 768px;

    .banner-badge{
      background-color: var(--clr-red);
      padding: 4px 16px;
      font-weight: 600;
      font-size: 20px;
      letter-spacing: 0.1em;
      display: inline-block;
      margin-bottom: 25px;
      text-align: center;
      border-radius: 10px;
      border: solid 3px white;
      
    }

    .btn-text{
      justify-content:center;
      display: flex:
      text-align: center;
    }

    .banner-title{
      font-family: var(--font-family-right);
      font-size: 48px;
      font-weight: 400;
      letter-spacing: 0.09em;
      line-height: 1.2;
      max-width: 600px;
      margin-bottom: 40px;
    }

    .banner-content{
      text-align: center;
      justify-content:space-between;
      display:flex:
    }

    .lead-text{
      max-width: 800px;
      text-align: center;
      color: var(--clr-white);
      
      display:flex:
    }
    

     

    @media screen and (min-width: 992px){
      .banner-badge{
        font-size: 26px;
      }

      .banner-title{
        font-size: 56px;
      }
    }
`;
