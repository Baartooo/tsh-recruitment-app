import React from 'react';

import { render } from 'tests';

import { Products } from './Products';

describe('Products', () => {
  test('Displays logo', async () => {
    const { getByText } = render(<Products />);

    expect(getByText('join.tsh.io')).toBeInTheDocument();
  });
});
