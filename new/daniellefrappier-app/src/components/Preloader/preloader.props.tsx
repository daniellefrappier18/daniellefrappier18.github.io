export type PreloaderProps = Omit<
    JSX.IntrinsicElements['div'], 
    'ref'
> & {
    className?: string;
    children: JSX.Element;
    waitBeforeShow?: number;
};