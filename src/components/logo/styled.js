// Import Styled
import styled from 'styled-components';

// Import Utils
import { rem } from '../../utils/helpers';

export const LogoImg = styled.div`
    width: ${rem(118)};
    height: ${rem(30)};
    background: url('/static/images/logo.png') no-repeat;
    background-size: cover;
    margin: 0 auto;
`;