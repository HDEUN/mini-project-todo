import styled from "styled-components";

export const AppTitle = styled.h1`
    font-family: 'Libre Bodoni', serif;
    font-size: 40px;
    text-align: ${ (props) => props.center ? 'center' : 'left' };
    margin-top: ${ (props) => props.mt20 ? '20px' : '0px' };
    display: block;
    color: #3A3B50;
`

