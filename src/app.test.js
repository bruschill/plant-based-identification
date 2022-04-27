import { render, screen } from '@testing-library/react';
import App from './app';

test('renders the page header', () => {
  render(<App />);
  const linkElement = screen.getByText(/plant-based identification/i);
  expect(linkElement).toBeInTheDocument();
});
