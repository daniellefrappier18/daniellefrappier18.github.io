import React from "react";
import { FullBackgroundImageComponent } from "./full-background-image.style";
import { FullBackgroundImageProps } from "./full-background-image.props";

export const FullBackgroundImage = ({
  srcSet,
  children,
  className,
  ...restProps
}: FullBackgroundImageProps) => {
  return (
    <FullBackgroundImageComponent
      className={className}
      srcSet={srcSet}
      {...restProps}
    >
      {children}
    </FullBackgroundImageComponent>
  );
};
