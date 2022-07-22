export type ButtonProps = Omit<
    JSX.IntrinsicElements['button'], 
    'ref'
> & {
    buttonType?: 'primary' | 'secondary';
    /** Allow button to pass href and become a link element */
    href?: string;
    /** Add a reference to button element */
    ref?: Exclude<JSX.IntrinsicElements['button']['ref'], string>,
    /** Target prop for if href type */
    target?: '_blank' | '_self' | '_parent' | '_top';
    /** Should it fill the container */
    isFullWidth?: boolean;
};