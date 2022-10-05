import React from 'react';
import { 
    TimelineComponent,
    TimelineTitle,
    Item,
    ItemBullet,
    ItemContent,
    ItemTitleContainer,
    ItemTitle,
    ItemSubtitle,
    ItemText

} from './timeline.style';
import { TimelineProps } from './timeline.props';

export const Timeline = ( {
    title,
    jobs,
    ...restProps
}: TimelineProps) => {
    return (
        <TimelineComponent {...restProps}>
            <TimelineTitle>{title}</TimelineTitle>
            {jobs.map((job, index) => (
                <Item key={index}>
                    <ItemBullet/>
                    <ItemContent>
                        <ItemTitleContainer>
                            <ItemTitle>
                                {job.title}
                                <ItemSubtitle>{job.date} <br/> {job.location}</ItemSubtitle>
                            </ItemTitle>
                        </ItemTitleContainer>
                        <ItemText>{job.description}</ItemText>
                    </ItemContent>
                </Item>
            ))}
        </TimelineComponent>
    );
};