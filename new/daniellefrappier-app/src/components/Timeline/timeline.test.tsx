import React from 'react';
import { Timeline } from './timeline.component';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

const jobs = [
    {
      title: "Senior Systems Design Engineer",
      date: "/ September 2021 - Current",
      location: "Monster",
      description: (
        <>
          <li>Team lead for Randstad Brand Design System. As Team Lead I was responsible for mentoring junior engineers, establishing code standards and best practices and making decisions on the architecture of the design system.</li>
          <li>Built React component library with TypeScript Styled Components, wrote unit tests using Jest and React Testing Library and documented components in Storybook.</li>
          <li>Provided support for monster.com homepage built using Gatsby.</li>
        </>)
    }
  ];
describe('Timeline component', () => {
    // test component with props
    it('Timeline renders correctly Props', () => {
      const tree = renderer
        .create(
          <Timeline
           title='Work Experience'
           jobs={jobs}
          />,
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
    afterEach(cleanup);
  });