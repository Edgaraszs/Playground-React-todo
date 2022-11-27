import {fireEvent, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from '../App';

const setup = () => {
  render(<App/>);
  const input = screen.getByLabelText('todo-input')
  return {
    input,
  }
}

test('No empty todo', async () => {
  setup();
  await userEvent.click(screen.getByText('Add'));

  expect(screen.getByText('Todo cannot be empty')).toBeInTheDocument();
});

test('Todo input works', async () => {
  const {input} = setup();
  fireEvent.change(input, {target: {value: 'Custom todo'}});

  expect(input.value).toBe('Custom todo');
});

test('Add todo', async () => {
  const {input} = setup();
  fireEvent.change(input, {target: {value: 'Custom todo'}});
  await userEvent.click(screen.getByText('Add'));

  expect(screen.getByText('Todo added successfully')).toBeInTheDocument();
});
