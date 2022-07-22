import styled from 'styled-components';

export interface Props {
    buttonType: 'primary' | 'secondary';
    href?: string;
    isFullWidth?: boolean;
}

export const ButtonComponent = styled.button<Props>`
    ${(props) =>
        props.buttonType === 'primary' ? `border: 1px solid #F62459; color: #F62459;` : 'background: #F62459; color: #FFFFFF;'
    };
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 30px 5px;
    padding: 10px 30px;
    transition: all 0.3s;

    ${({ isFullWidth }) => isFullWidth && `width: 100%;`}

    /* styles if href */
    &, 
    &:hover,
    &:visited,
    &:focus {
        ${(props) =>
            props.href !== undefined && 
            `display: inline-flex; text-decoration: none; justify-content:center;`
        };
    }

`;

