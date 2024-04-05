import styled, { keyframes } from 'styled-components';

const bounceAnimation = keyframes`
    0% { transform: translateY(0);}
    50% { transform: translateY(-30px);}
    100% {transform: translateY(0); }
`;

const Container = styled.div`
    animation: ${bounceAnimation} 5s infinite;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 72.5vh;
`;

const NotFoundText = styled.h1`
    font-size: 100px;
    color: #0D1034;
    text-align: center;
    font-family: SUIT;
    font-style: normal;
    font-weight: 800;
    margin: 0px;
    text-shadow: -5px 0px #0D1034, 0px 5px #0D1034, 5px 0px #0D1034, 0px -5px #0D1034;
`;

const FirstText = styled.h1`
    font-size: 150px;
    color: #0D1034;
    text-align: center;
    font-family: SUIT;
    font-weight: 900;
    margin: 0px;
`

const MainCharacter = styled.img`
    width: 200px;
`;

const Words = styled.div`
    display: flex;
    flex-direction: column;
`

export {Container, NotFoundText, FirstText, MainCharacter,  Words}