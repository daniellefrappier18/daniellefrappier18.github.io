import styled from 'styled-components';

export interface Props {
    buttonType: 'primary' | 'secondary';
    href?: string;
    isFullWidth?: boolean;
    size?: 'small' | 'medium';
}

export const ButtonComponent = styled.button<Props>`
    ${(props) =>
        props.buttonType === 'primary' ? `border: 1px solid #F62459; color: #F62459; background-color: transparent;` : 'background: #F62459; color: #FFFFFF; border: 1px solid transparent;'
    };
    display: flex;
    align-items: center;
    justify-content: center;
    ${(props) => 
        props.size === 'medium' ? 'margin: 30px 5px; padding: 10px 30px; font-size: 2rem;' : 'margin: 5px 5px; padding: 5px 5px; font-size: 1.5rem;'
    };
    transition: all 0.3s;

    ${({ isFullWidth }) => isFullWidth && `width: 100%;`}

    /* styles if href */
    &, 
    &:hover,
    &:visited,
    &:focus {
        ${(props) =>
            props.href !== undefined && 
            `display: inline; text-decoration: none; justify-content:center;`
        };
    }

    &:hover {
        ${(props) =>
            props.buttonType === 'primary' ? `color: #FFF; background-color: #F62459;` : 'background: #FFF; color: #F62459; border: 1px solid #F62459;'
        };

`;

