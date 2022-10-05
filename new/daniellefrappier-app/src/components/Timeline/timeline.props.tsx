type Job = {
    title: string;
    date: string;
    location: string;
    description: JSX.Element;
}
export type TimelineProps = Omit<
    JSX.IntrinsicElements['div'], 
    'ref'
> & {
    title: string
    jobs: Array<Job>
};