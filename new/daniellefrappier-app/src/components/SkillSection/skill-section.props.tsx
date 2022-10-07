type Skill = {
    title: string;
    level: number;
}
export type SkillSectionProps = Omit<
    JSX.IntrinsicElements['div'], 
    'ref'
> & {
    title: string
    subtitle?: JSX.Element | string;
    skills: Array<Skill>
};