import { render } from '@testing-library/react';

import FlotsamUi from './flotsam-ui';

describe('FlotsamUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FlotsamUi />);
    expect(baseElement).toBeTruthy();
  });
});
