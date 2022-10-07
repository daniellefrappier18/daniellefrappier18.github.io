export type ButtonProps = Omit<
    JSX.IntrinsicElements['button'], 
    'ref'
> & {
    buttonType?: 'primary' | 'secondary';
    href?: string;
    ref?: Exclude<JSX.IntrinsicElements['button']['ref'], string>,
    target?: '_blank' | '_self' | '_parent' | '_top';
    isFullWidth?: boolean;
    size?: 'small' | 'medium';
};