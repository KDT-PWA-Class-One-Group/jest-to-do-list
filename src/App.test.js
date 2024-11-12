import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

// mock console.log to verify handleNewTodo behavior
global.console = { log: jest.fn() };

describe('App Component', () => {
  test('renders Input component', () => {
    render(<App />);
    
    // "할 일을 입력하세요" placeholder를 가진 input 필드가 있는지 확인
    const inputElement = screen.getByPlaceholderText(/할 일을 입력하세요/i);
    expect(inputElement).toBeInTheDocument();
    
    // "추가" 버튼이 있는지 확인
    const buttonElement = screen.getByText(/추가/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test('calls handleNewTodo when a new todo is submitted', () => {
    render(<App />);
    
    const inputElement = screen.getByPlaceholderText(/할 일을 입력하세요/i);
    const buttonElement = screen.getByText(/추가/i);

    // input 필드에 텍스트 입력
    fireEvent.change(inputElement, { target: { value: '테스트 할 일' } });
    
    // submit 버튼 클릭
    fireEvent.click(buttonElement);
    
    // handleNewTodo의 console.log가 호출되었는지 확인
    expect(console.log).toHaveBeenCalledWith('새로운 할 일:', expect.objectContaining({
      content: '테스트 할 일',
      checkbox: false,
      created_at: expect.any(Date),
      updated_at: expect.any(Date),
    }));
  });
});
