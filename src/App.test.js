import { render, screen } from '@testing-library/react';
import App from './App';

test('renders George Pu homepage', () => {
  render(<App />);
  const linkElement = screen.getByRole('heading', { name: /George Pu/i });
  expect(linkElement).toBeInTheDocument();
});
