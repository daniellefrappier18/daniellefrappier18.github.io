import React from 'react';
import { 
  SocialLinkComponent,
  SocialLinkComponentIcon 
 } from './social-link.style';
import { SocialLinkProps } from './social-link.props';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Icons from '@fortawesome/free-brands-svg-icons'; 

export const SocialLink = ( {
    icon,
    href,
    target,
    ...restProps
}: SocialLinkProps) => {
  console.log(Icons)

  const iconName = icon;
  console.log(iconName)
  const Icon = () => <FontAwesomeIcon icon={iconName} />

  //const iconName = Icons[icon] as IconDefinition;

    return (
      <SocialLinkComponent href={href} target={target} {...restProps}>
        <Icon />
      </SocialLinkComponent>
    );
};