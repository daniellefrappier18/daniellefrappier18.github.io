import React, { useState, useEffect } from 'react';
import { 
    PreloaderComponent,
    Loader,
    LoaderItem,
} from './preloader.style';
import { PreloaderProps } from './preloader.props';

export const Preloader = ({
    children, 
    waitBeforeShow,
    className,
    ...restProps
}: PreloaderProps) => {
    const [isShown, setIsShown] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
          setIsShown(true);
        }, waitBeforeShow);
        return () => clearTimeout(timer);
      }, [waitBeforeShow]);

    return isShown ? children : (
        <PreloaderComponent className={className} {...restProps}>
            <Loader>
                <LoaderItem/>
                <LoaderItem/>
                <LoaderItem/>
                <LoaderItem/>
            </Loader>   
        </PreloaderComponent>
    );
};