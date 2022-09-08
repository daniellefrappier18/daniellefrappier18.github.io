import React from 'react';
import { 
    IntroContentWrapper,
    IntroContentMain,
    IntroContentSubtitle
 } from './intro-content.style';
import { IntroContentProps } from './into-content.props'

export const IntroContent = ( {
    mainTitle,
    accentMainTitle,
    subTitle,
    children,
    ...restProps
}: IntroContentProps) => {
    return (
        <IntroContentWrapper {...restProps}>
            { mainTitle && accentMainTitle && (
                <IntroContentMain>{mainTitle}<span className='accent'>{accentMainTitle}</span></IntroContentMain>
            )}
            { subTitle && (
                <IntroContentSubtitle>{subTitle}</IntroContentSubtitle>
            )}
            {children}
        </IntroContentWrapper>

    );
}
