import 'jsdom-global/register';
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-enzyme';
import 'jest-styled-components';

import mockData from '../__mocks__/mockData';
import PreviewRating from '../client/src/components/PreviewRating';

describe('Preview Rating Components', () => {
  const { reviews, ...rest } = mockData;
  it('should render', () => {
    const component = <PreviewRating overview={rest} />;

    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
