import React from 'react';
import { 
    FullBackgroundImageComponent,
 } from './full-background-image.style';

import { FullBackgroundImageProps } from './full-background-image.props'

export const FullBackgroundImage = ( {
    srcSet,
    children,
    ...restProps
}: FullBackgroundImageProps) => {
    return (
        <>
            <FullBackgroundImageComponent srcSet={srcSet} {...restProps}>{children}</FullBackgroundImageComponent>
        </>

    );
}
