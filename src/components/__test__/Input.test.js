import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Input from '../Input';

describe('Input Component', () => {
  test('renders input and submit button', () => {
    render(<Input onSubmit={() => {}} />);
    
    // "할 일을 입력하세요" placeholder가 있는 input 필드가 렌더링되었는지 확인
    const inputElement = screen.getByPlaceholderText(/할 일을 입력하세요/i);
    expect(inputElement).toBeInTheDocument();
    
    // "추가" 텍스트가 있는 버튼이 렌더링되었는지 확인
    const buttonElement = screen.getByText(/추가/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test('calls onSubmit with new todo data when form is submitted', () => {
    const mockOnSubmit = jest.fn();
    render(<Input onSubmit={mockOnSubmit} />);
    
    const inputElement = screen.getByPlaceholderText(/할 일을 입력하세요/i);
    const buttonElement = screen.getByText(/추가/i);

    // input 필드에 텍스트 입력
    fireEvent.change(inputElement, { target: { value: '새로운 할 일' } });
    
    // submit 버튼 클릭
    fireEvent.click(buttonElement);
    
    // onSubmit 함수가 한 번 호출되었는지 확인
    expect(mockOnSubmit).toHaveBeenCalledTimes(1);

    // onSubmit이 호출되었을 때 전달된 인자 확인
    expect(mockOnSubmit).toHaveBeenCalledWith(expect.objectContaining({
      content: '새로운 할 일',
      checkbox: false,
      created_at: expect.any(Date),
      updated_at: expect.any(Date),
    }));

    // 입력 필드가 초기화되었는지 확인
    expect(inputElement.value).toBe('');
  });

  test('does not call onSubmit if input is empty', () => {
    const mockOnSubmit = jest.fn();
    render(<Input onSubmit={mockOnSubmit} />);
    
    const buttonElement = screen.getByText(/추가/i);
    
    // submit 버튼 클릭 (입력값이 없음)
    fireEvent.click(buttonElement);
    
    // onSubmit 함수가 호출되지 않았는지 확인
    expect(mockOnSubmit).not.toHaveBeenCalled();
  });
});
