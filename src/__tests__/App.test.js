import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from '../App';

test('No empty todo', async () => {
  render(<App />);
  await userEvent.click(screen.getByText('Add'));

  expect(screen.getByText('Todo cannot be empty')).toBeInTheDocument();
});
