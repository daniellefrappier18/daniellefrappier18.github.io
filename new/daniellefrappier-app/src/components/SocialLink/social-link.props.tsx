import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

export type SocialLinkProps = Omit<
    JSX.IntrinsicElements['a'], 
    'ref'
> & {
    icon: IconDefinition;
    /** Allow button to pass href and become a link element */
    href?: string;
    /** Target prop for if href type */
    target?: '_blank' | '_self' | '_parent' | '_top';
};