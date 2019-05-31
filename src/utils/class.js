// Import Styled
import styled from 'styled-components';

// Import Utils
import { rem } from './helpers';

// Classes
export const Wrapper = styled.section`
    position: relative;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    height: 100vh;
    justify-content: space-around;
    text-align: center;

    &:after{
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background: url('/static/images/bg.jpg');
        z-index: -1;
        opacity: 0.7;
    }
`;

export const Container = styled.div`
    margin: 0 auto;
    padding: 0px ${rem(15)};
    width: 100%;

    @media (min-width: 734px){
        max-width: ${rem(704)};
        padding: 0px;
    }
`;

