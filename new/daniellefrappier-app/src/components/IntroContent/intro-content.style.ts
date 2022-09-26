import styled from 'styled-components';

export const IntroContentWrapper = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 10;
    padding: 0 20px;
    height: 100%;

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

export const SectionContent = styled.h1 `
    font-family: 'Oswald', sans-serif;
    font-size: 63px;
    font-weight: 500;
    color: #fff;
    text-transform: uppercase;

    & span {
        color: #F62459;
    }
`

export const IntroContentSubtitle = styled.h2 `
    font-family: 'Open Sans', sans-serif;
    font-weight: 500;
    color: #F62459;
    text-align: center;
    font-size: 30px;
}

`

