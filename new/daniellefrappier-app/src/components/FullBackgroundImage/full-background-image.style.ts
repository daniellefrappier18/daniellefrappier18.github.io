import styled from 'styled-components';

export interface Props {
    srcSet?: string;
}

export const FullBackgroundImageComponent = styled.div<Props>`
    background: 
    linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.75)),
    url(${(props) => props.srcSet});
    background-size: 100%;
    background-position: top; 
    height: 100%;
    transition-property: background-size;
    transition-duration: 2s;
    transition-timing-function: linear;

    @media screen and (min-width: 960px) {
        background-position: center; 
    }

    &.content-section {
        background-size: cover;
    }




`;

