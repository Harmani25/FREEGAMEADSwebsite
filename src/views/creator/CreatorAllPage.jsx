
import styled from 'styled-components';
/* import { ReviewForm } from '../../components/Forms';
import GameUpdateForm from '../../components/Forms';
import { useState } from 'react'; */




import {  Title } from '../../components/common';


const CreatorPage = () => {
    /* const [view, setView] = useState("Review"); */
    
  



    

    return (
        <CreatorAllPageWrapper>
            <div className='sc-creators section'>
                <div className='container'>
                    <Title titleName={{
                        firstText: "Ready to see more?",
                        secondText: "Start your journey"
                    }} />
                    
                </div>
                <div>
              
            </div>
            </div>

            
        </CreatorAllPageWrapper>
    )
}

export default CreatorPage;

const CreatorAllPageWrapper = styled.div`
    background-color: var(--clr-violet-dark-active);
    .sc-creators{
        min-height: 100vh;
        padding-top: 65px;
    }
`;