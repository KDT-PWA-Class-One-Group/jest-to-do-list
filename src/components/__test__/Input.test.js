// Input.test.js
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Input from '../Input'; // Input 컴포넌트 경로

test('사용자가 입력하고 제출하면 onSubmit이 호출된다', () => {
  const handleSubmit = jest.fn(); // onSubmit을 모킹

  render(<Input onSubmit={handleSubmit} />); // 컴포넌트 렌더링

  const inputElement = screen.getByTestId('todo-input'); // 입력 필드 가져오기
  const submitButton = screen.getByTestId('todo-submit'); // 제출 버튼 가져오기

  // 1. 입력 필드에 텍스트 입력
  fireEvent.change(inputElement, { target: { value: '새로운 할 일' } });

  // 2. 제출 버튼 클릭
  fireEvent.click(submitButton);

  // 3. onSubmit이 한 번 호출되었는지 확인
  expect(handleSubmit).toHaveBeenCalledTimes(1);

  // 4. onSubmit이 올바른 값으로 호출되었는지 확인
  expect(handleSubmit).toHaveBeenCalledWith(
    expect.objectContaining({
      content: '새로운 할 일',
      checkbox: false,
      created_at: expect.any(String),
      updated_at: expect.any(String),
    })
  );

  // 5. 입력 필드가 비어 있는지 확인
  expect(inputElement.value).toBe('');
});
