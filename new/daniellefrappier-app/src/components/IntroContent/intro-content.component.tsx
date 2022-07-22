import React from 'react';
import { 
    IntroContentWrapper
 } from './intro-content.style';
import { IntroContentProps } from './into-content.props'

export const IntroContent = ( {
    children,
    ...restProps
}: IntroContentProps) => {
    return (
        <IntroContentWrapper {...restProps}>{children}</IntroContentWrapper>

    );
}
