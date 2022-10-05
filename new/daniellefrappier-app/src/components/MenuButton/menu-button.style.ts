import styled from 'styled-components';

export const MenuButtonWrapper = styled.button`
    position: relative;
    z-index: 10;
    cursor: pointer;
    display:block;
    height: 100%;
    width: 100%;
    padding: 0;
    border: none;

    &:hover {
        > div:first-of-type {
            background-size: 150%;
        }
    }

    &.close {
        position: absolute;
        right: 40px;
        top: 20px;
        font-family: 'Oswald', sans-serif;
        font-size: 20px;
        width: 80px;
        height: 40px;
        background: rgba(255,255,255,0.75);

        &:hover {
            opacity: 0.6;
        }
    }
`;

