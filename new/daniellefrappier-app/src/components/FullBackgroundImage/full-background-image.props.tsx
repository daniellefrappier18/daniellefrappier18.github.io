import React from "react";

export interface FullBackgroundImageProps
  extends React.PropsWithChildren<Omit<JSX.IntrinsicElements["div"], "ref">> {
  srcSet?: string;
  className?: string;
}
