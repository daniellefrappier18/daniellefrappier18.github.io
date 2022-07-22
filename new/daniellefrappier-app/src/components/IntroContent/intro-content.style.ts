import styled from 'styled-components';

export const IntroContentWrapper = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 10;
    top: 50%;
    transform: translateY(-50%);
    padding: 0 20px;

    > * {
        text-align: left !important;
    }

    svg {
        color: #fff;
    }
`;

