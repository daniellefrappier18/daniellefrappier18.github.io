import styled, { keyframes } from 'styled-components'

const loader = keyframes`
0%, 10%, 100% {
    width: 40px;
    height: 40px;
}
65% {
    width: 80px;
    height: 80px;
}
`;

const loaderBlock = keyframes`
    0%, 30% {
        -webkit-transform: rotate(0);
        -moz-transform: rotate(0);
        -ms-transform: rotate(0);
        -o-transform: rotate(0);
        transform: rotate(0);
    }
    55% {
        opacity: 1;
    }
    100% {
        -webkit-transform: rotate(90deg);
        -moz-transform: rotate(90deg);
        -ms-transform: rotate(90deg);
        -o-transform: rotate(90deg);
        transform: rotate(90deg);
    }
`;

const loaderBlockInverse = keyframes` 
    0%, 20% {
        -webkit-transform: rotate(0);
        -moz-transform: rotate(0);
        -ms-transform: rotate(0);
        -o-transform: rotate(0);
        transform: rotate(0);
    }
    55% {
        opacity: 1;
    }
    100% {
        -webkit-transform: rotate(-90deg);
        -moz-transform: rotate(-90deg);
        -ms-transform: rotate(-90deg);
        -o-transform: rotate(-90deg);
        transform: rotate(-90deg);
    }
`;

export const PreloaderComponent = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #1a1b23;
    z-index: 10000;
`;

export const Loader = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 30px;
    height: 30px;
    transform: translate(-50%, -50%) rotate(45deg) translate3d(0, 0, 0);
    animation: ${loader} 1.2s infinite ease-in-out;
`;

export const LoaderItem = styled.span`
    position: absolute;
    display: block;
    width: 20px;
    height: 20px;
    opacity: 0.8;
    background-color: #F62459;
    animation: ${loaderBlock} 1.2s infinite ease-in-out both;

    &:nth-child(1) {
        top: 0;
        left: 0;
    }

    &:nth-child(2) {
        top: 0;
        right: 0;
        animation: ${loaderBlockInverse} 1.2s infinite ease-in-out both;
    }

    &:nth-child(3) {
        bottom: 0;
        left: 0;
        animation: ${loaderBlockInverse} 1.2s infinite ease-in-out both;
    }

    &:nth-child(4) {
        bottom: 0;
        right: 0;
    }
`;


