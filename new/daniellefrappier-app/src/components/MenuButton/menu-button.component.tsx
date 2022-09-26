import React, { useRef, useContext } from 'react';
import { ActiveSectionContext } from '../../contexts/ActiveSectionContext';

import { 
    MenuButtonWrapper
 } from './menu-button.style';
import { MenuButtonProps } from './menu-button.props'

export const MenuButton = ( {
    id,
    children,
    className,
}: MenuButtonProps) => {
    const ref = useRef(null);
    const {setCurrentSection} = useContext(ActiveSectionContext);

    const openSection = (e:any) => {
        //Set the current section to the id of the button
        setCurrentSection(e.currentTarget.id);
      }; 
    return (
        <MenuButtonWrapper className={className} ref={ref} onClick={openSection} id={id}>{children}</MenuButtonWrapper>
    );
}
