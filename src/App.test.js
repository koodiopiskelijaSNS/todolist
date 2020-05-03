import React from 'react';          
import { render } from '@testing-library/react';
import App from './App';

test('renderöi sivulle tekstin Tavoite', () => {
  const { getByText } = render(<App />);
  const tehtavalistaElement = getByText(/Tavoite/i);
  expect(tehtavalistalement).toBeInTheDocument();
});
