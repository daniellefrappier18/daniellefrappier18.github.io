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

export const IntroContentMain = styled.h1 `
    font-family: 'Oswald', sans-serif;
    font-size: 63px;
    font-weight: 400;
    color: #fff;

    .accent {
        color: #F62459;
        font-weight: 700;
    }
`

export const IntroContentSubtitle = styled.h2 `
    color: #F62459;
    text-align: center;
    font-weight: 300;
    font-size: 30px;
}

`

