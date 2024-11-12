import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Input from '../Input';

test('입력 후 onSubmit을 통해 새로운 할 일을 추가한다', () => {
  const handleSubmit = jest.fn();

  render(<Input onSubmit={handleSubmit} />);

  const inputElement = screen.getByTestId('todo-input');
  const submitButton = screen.getByTestId('todo-submit');

  fireEvent.change(inputElement, { target: { value: '테스트 할 일' } });
  fireEvent.click(submitButton);

  expect(handleSubmit).toHaveBeenCalledWith(
    expect.objectContaining({
      title: '테스트 할 일',
      checked: false,
      created_at: expect.any(String),
      updated_at: expect.any(String),
    })
  );

  expect(inputElement.value).toBe('');
});