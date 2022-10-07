import React from 'react';
import { ButtonComponent } from './button.style';
import { ButtonProps } from './button.props';

export const Button = ( {
    buttonType="primary",
    href,
    isFullWidth = false,
    size = 'medium',
    children,
    ...restProps
}: ButtonProps) => {
    return (
        <ButtonComponent as={href ? 'a' : 'button'} href={href} role={href ? undefined : 'button'} size={size} buttonType={buttonType} isFullWidth={isFullWidth} {...restProps}>{children}</ButtonComponent>
    );
};