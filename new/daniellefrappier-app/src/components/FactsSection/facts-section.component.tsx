import React from 'react';
import { 
    FactsSectionComponent,
    FactsSectionTitle,
    FactTitle,
    FactDescription
 } from './facts-section.style';
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Grid";
import { FactsSectionProps } from './facts-section.props'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const FactsSection = ( {
    title,
    facts,
    className,
    ...restProps
}: FactsSectionProps) => {
    
    return (
        <FactsSectionComponent className={className} {...restProps}>
            <Container>
                <Grid container spacing={0}>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <FactsSectionTitle>{title}</FactsSectionTitle>
                    </Grid>
                    {facts.map((fact, index) => {
                        return (
                        <Grid item key={index} xs={12} sm={12} md={4} lg={4} xl={4}>
                            <FactTitle>{fact.factTitle}</FactTitle>
                            <FontAwesomeIcon icon={fact.icon} />
                            <FactDescription>{fact.factDescription}</FactDescription>
                        </Grid>
                        )
                    })}
                </Grid>
            </Container>
        </FactsSectionComponent>
    );
}
