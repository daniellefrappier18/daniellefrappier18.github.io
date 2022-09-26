
export type FullBackgroundImageProps = Omit<
    JSX.IntrinsicElements['div'], 
    'ref'
    > & {
        srcSet?: string;
        className?: string;
};