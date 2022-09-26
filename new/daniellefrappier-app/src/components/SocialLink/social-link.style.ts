import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const SocialLinkComponent = styled.a`
    text-decoration: none;
    padding: 0 10px;
    &:hover {
        opacity: 0.6;
    }
    svg {
        width: 20px;
        height: 20px;
    }
`;

export const SocialLinkComponentIcon = styled(FontAwesomeIcon)`
 
`;



