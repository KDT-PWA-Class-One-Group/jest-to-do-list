import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Input from './components/Input';

test('사용자가 입력하고 제출하면 onSubmit이 호출된다', () => {
  const handleSubmit = jest.fn(); // onSubmit 함수를 모킹합니다.

  const { getByTestId } = render(<Input onSubmit={handleSubmit} />);

  const inputElement = getByTestId('todo-input');
  const submitButton = getByTestId('todo-submit');

  // 입력 필드에 텍스트를 입력합니다.
  fireEvent.change(inputElement, { target: { value: '새로운 할 일' } });

  // "추가" 버튼을 클릭하여 폼을 제출합니다.
  fireEvent.click(submitButton);

  // onSubmit 함수가 한 번 호출되었는지 확인합니다.
  expect(handleSubmit).toHaveBeenCalledTimes(1);

  // onSubmit 함수가 호출될 때 전달된 인자를 확인합니다.
  expect(handleSubmit).toHaveBeenCalledWith(
    expect.objectContaining({
      content: '새로운 할 일',
      checkbox: false,
    })
  );

  // 입력 필드가 초기화되었는지 확인합니다.
  expect(inputElement.value).toBe('');
});