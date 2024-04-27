import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <PageNotFoundWrapper className='section'>
      <div className='container text-center'>
        <p className='value-404'>404</p>
        <p className='not-found-text text-uppercase text-white'>oops! Looks like this page is dead</p>
        <Link to = "/" className = "section-btn">Back to Homepage</Link>
      </div>
    </PageNotFoundWrapper>
  )
}

export default PageNotFound;

const PageNotFoundWrapper = styled.div`
background-color: var(--clr-violet-dark-active);
  .value-404{
    font-size: 60px;
    font-weight: 800;
    color: var(--clr-green-normal);
  }
  .not-found-text{
    font-size: 30px;
    font-weight: 670;
    letter-spacing: 2.4px;
  }

  .section-btn{
    display: inline-block;
    margin-top: 22px;
  }
`;
