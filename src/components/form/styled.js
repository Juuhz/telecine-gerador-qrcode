// Import Styled
import styled from 'styled-components';

// Import Utils
import { rem } from '../../utils/helpers';
import { DARK_GRAY, LIGTH_GRAY, RED, DARK_RED } from '../../utils/variables';

export const FormBox = styled.form`
    position: relative;
`;

export const Input = styled.input`
    width: 100%;
    border: ${rem(1)} solid ${DARK_GRAY};
    padding: ${rem(15)};
    height: ${rem(47)};
    padding-right: ${rem(120)};
    outline: none;
    background: transparent;

    &:active,
    &:focus{
        border-color: ${LIGTH_GRAY};
        -webkit-transition: all 0.3s ease-in-out;
        -moz-transition: all 0.3s ease-in-out;
        -o-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
    }
`;

export const Button = styled.button`
    background: ${RED};
    position: absolute;
    right: 0px;
    top: 0px;
    font-size: ${rem(16)};
    height: 100%;
    padding: 0px ${rem(20)};
    border: ${rem(1)} solid ${DARK_GRAY};
    color: #FFF;
    outline: none;
    border-left: 0px;
    cursor: pointer;

    &:before{
        content: "";
        background: url('/static/images/qr-code.svg') no-repeat center center;
        width: ${rem(16)};
        height: ${rem(16)};
        position: relative;
        display: inline-block;
        background-size: cover;
        vertical-align: middle;
        margin-right: ${rem(8)};
    }

    &:hover{
        background: ${DARK_RED};
        -webkit-transition: all 0.3s ease-in-out;
        -moz-transition: all 0.3s ease-in-out;
        -o-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
    }
`;