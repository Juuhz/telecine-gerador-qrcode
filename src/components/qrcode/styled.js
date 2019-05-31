// Import Styled
import styled from 'styled-components';

// Import Utils
import { rem } from '../../utils/helpers';
import { RED } from '../../utils/variables';

export const QRImage = styled.img`
    margin: ${rem(30)} 0px;
`;

export const Actions = styled.div`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-around;
    text-align: center;
    width: ${rem(250)};
    margin: 0 auto;
`;

export const Action = styled.div`
    width: 50%;
    text-align: center;
    cursor: pointer;
    
    &:hover{
        color: ${RED};
        -webkit-transition: all 0.3s ease-in-out;
        -moz-transition: all 0.3s ease-in-out;
        -o-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
    }
`;