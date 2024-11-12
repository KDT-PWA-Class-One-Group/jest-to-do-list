import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('초기 할 일이 렌더링된다', () => {
  render(<App />);

  const initialTodo = screen.getByText('I am a dummy data 1');
  expect(initialTodo).toBeInTheDocument();
});

test('새로운 할 일이 추가된다', () => {
  render(<App />);

  const inputElement = screen.getByTestId('todo-input');
  const submitButton = screen.getByTestId('todo-submit');

  fireEvent.change(inputElement, { target: { value: '새로운 할 일' } });
  fireEvent.click(submitButton);

  const newTodo = screen.getByText('새로운 할 일');
  expect(newTodo).toBeInTheDocument();
});