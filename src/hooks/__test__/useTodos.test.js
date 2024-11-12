import { renderHook, act } from '@testing-library/react';
import useTodos from '../useTodos';

test('초기 할 일 목록을 로드한다', () => {
  const { result } = renderHook(() => useTodos());
  const [todos] = result.current;

  // 첫 번째 할 일이 올바르게 로드되었는지 확인
  expect(todos[0].title).toBe('I am a dummy data 1');
});

test('새로운 할 일을 추가한다', () => {
  const { result } = renderHook(() => useTodos());
  const [, handleNewTodo] = result.current;

  act(() => {
    handleNewTodo({
      title: '새로운 할 일',
      checked: false,
      created_at: '2023/01/01',
      updated_at: '2023/01/01',
    });
  });

  const [todos] = result.current;
  expect(todos).toHaveLength(11); // 기존 10개의 할 일 + 새로운 할 일
  expect(todos[10].title).toBe('새로운 할 일');
});

test('체크박스 상태를 토글한다', () => {
  const { result } = renderHook(() => useTodos());
  const [todos, , handleCheckboxToggle] = result.current;

  act(() => {
    handleCheckboxToggle(todos[0].id);
  });

  const [updatedTodos] = result.current;
  expect(updatedTodos[0].checked).toBe(false); // 기존 값이 true였다면 false로 변경됨
});