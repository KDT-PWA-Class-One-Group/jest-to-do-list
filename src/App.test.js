import { render, screen } from '@testing-library/react';
import App from './App';

test('할 일을 입력하세요 텍스트가 렌더링된다', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/할 일을 입력하세요/i);  // input의 placeholder 텍스트를 찾음
  expect(inputElement).toBeInTheDocument();
});

test('추가 버튼이 렌더링된다', () => {
  render(<App />);
  const buttonElement = screen.getByRole('button', { name: /추가/i });  // 버튼 텍스트를 찾음
  expect(buttonElement).toBeInTheDocument();
});
