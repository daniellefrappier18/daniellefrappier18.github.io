
export type SocialLinkProps = Omit<
    JSX.IntrinsicElements['a'], 
    'ref'
> & {
    icon: any;
    /** Allow button to pass href and become a link element */
    href?: string;
    /** Target prop for if href type */
    target?: '_blank' | '_self' | '_parent' | '_top';
};