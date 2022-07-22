
export type MenuButtonProps = Omit<JSX.IntrinsicElements['button'], 'ref'> & {
    /** Add a reference to button element */
    ref?: Exclude<JSX.IntrinsicElements['button']['ref'], string>
    children?: JSX.Element | string;
    id?: string;
};