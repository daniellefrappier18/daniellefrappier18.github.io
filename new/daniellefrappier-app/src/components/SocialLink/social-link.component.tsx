import React from 'react';
import { 
  SocialLinkComponent,
  SocialLinkComponentIcon 
 } from './social-link.style';
import { SocialLinkProps } from './social-link.props';
import {
  IconDefinition,
} from '@fortawesome/fontawesome-svg-core'
import * as Icons from '@fortawesome/free-brands-svg-icons'; 

export const SocialLink = ( {
    icon,
    href,
    target,
    ...restProps
}: SocialLinkProps) => {
  console.log(Icons)
  const i = Icons as { [key: number ]: IconDefinition };
  const iconName = i[icon];
    return (
      <SocialLinkComponent href={href} target={target} {...restProps}>
        <SocialLinkComponentIcon icon={iconName}/>
      </SocialLinkComponent>
    );
};