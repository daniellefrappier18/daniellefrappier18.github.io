
export type IntroContentProps = Omit<JSX.IntrinsicElements['div'], 'ref'> & {
    children?: JSX.Element;
    mainTitle?: string;
    accentMainTitle?: string;
    subTitle?: string;
};