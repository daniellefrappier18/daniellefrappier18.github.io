import React from 'react';
import { 
  SocialLinkComponent, 
 } from './social-link.style';
import { SocialLinkProps } from './social-link.props';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const SocialLink = ( {
    icon,
    href,
    target,
    ...restProps
}: SocialLinkProps) => {

  const iconName = icon;
  const Icon = () => <FontAwesomeIcon icon={iconName} />

    return (
      <SocialLinkComponent href={href} target={target} {...restProps}>
        <Icon />
      </SocialLinkComponent>
    );
};