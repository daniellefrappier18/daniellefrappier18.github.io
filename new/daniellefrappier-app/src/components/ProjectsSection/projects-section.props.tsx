type Project = {
    title: string;
    description: string;
    builtWith: string;
    children?: JSX.Element;
}

export type ProjectsSectionProps = Omit<
    JSX.IntrinsicElements['div'], 
    'ref'
> & {
    projects: Array<Project>;
};