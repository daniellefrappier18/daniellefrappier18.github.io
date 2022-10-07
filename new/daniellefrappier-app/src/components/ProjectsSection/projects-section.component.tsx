import React from "react";
import {
  ProjectsSectionComponent,
  ProjectsSectionTitle,
  ProjectsSectionDescription,
  ProjectsSectionBuiltWith,
} from "./projects-section.style";
import { ProjectsSectionProps } from "./projects-section.props";

export const ProjectsSection = ({
  projects,
  ...restProps
}: ProjectsSectionProps) => {
  return (
    <>
      {projects.map((project, index) => (
        <>
        <ProjectsSectionComponent {...restProps} key={index}>
          <ProjectsSectionTitle>{project.title}</ProjectsSectionTitle>
          <ProjectsSectionDescription>
            {project.description}
          </ProjectsSectionDescription>
          <ProjectsSectionBuiltWith>
            {project.builtWith}
          </ProjectsSectionBuiltWith>
          {project.children}
        </ProjectsSectionComponent>
        <hr/>
        </>
      ))}
    </>
  );
};
