import React from 'react';
import { 
    SkillSectionComponent,
    SkillSectionTitle,
    SkillList,
    SkillItem,
    SkillText,
    SkillSectionSubTitle
} from './skill-section.style';
import { SkillSectionProps } from './skill-section.props';

export const SkillSection = ({
    title,
    subtitle,
    skills,
    ...restProps
}: SkillSectionProps) => {
    return (
        <SkillSectionComponent {...restProps}>
            <SkillSectionTitle>{title}</SkillSectionTitle>
            <SkillSectionSubTitle>{subtitle}</SkillSectionSubTitle>
            {skills.map((skill, index) => (
            <>
                <SkillText>{skill.title}</SkillText>   
                <SkillList key={index} >
                    <SkillItem level={skill.level}>
                        {skill.level}%
                    </SkillItem>
                </SkillList>
            </>
            ))}
        </SkillSectionComponent>
    );
};