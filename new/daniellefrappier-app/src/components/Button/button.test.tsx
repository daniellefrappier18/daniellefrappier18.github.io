import React from 'react';
import { Button } from './button.component';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { cleanup } from '@testing-library/react';
import { toHaveNoViolations } from 'jest-axe';
import '@testing-library/jest-dom/extend-expect';

describe('Button component', () => {
    // test component with props
    it('Button renders correctly Props', () => {
      const tree = renderer
        .create(
          <Button
           buttonType='primary'
           size='medium'
           href='https://www.daniellefrappier.com'
           target='_blank'
           isFullWidth={false}
          />,
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  
    expect.extend(toHaveNoViolations);
    afterEach(cleanup);
  });