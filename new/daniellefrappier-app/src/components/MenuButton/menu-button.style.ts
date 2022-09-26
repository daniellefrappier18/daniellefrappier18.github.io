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
        width: auto;
        height: 20px;
        background: none;

        &:hover {
            opacity: 0.6;
        }
    }
`;

