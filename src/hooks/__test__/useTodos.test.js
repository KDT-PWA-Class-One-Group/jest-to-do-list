import { renderHook, act } from 'react';
import useTodos from '../useTodos';

test('초기 할 일 목록을 로드한다', () => {
  const { result } = renderHook(() => useTodos());
  const [todos] = result.current;

  // 초기 할 일 목록 확인 (예: todos.json의 첫 번째 항목이 "기존 할 일 1")
  expect(todos[0].title).toBe('기존 할 일 1');
});

test('새로운 할 일을 추가한다', () => {
  const { result } = renderHook(() => useTodos());
  const [, handleNewTodo] = result.current;

  act(() => {
    handleNewTodo({
      title: '새로운 할 일',
      checkbox: false,
      created_at: '2023/01/01',
      updated_at: '2023/01/01',
    });
  });

  const [todos] = result.current;
  expect(todos).toHaveLength(3); // 기존 할 일 + 새로운 할 일
  expect(todos[2].title).toBe('새로운 할 일');
});

test('체크박스 상태를 토글한다', () => {
  const { result } = renderHook(() => useTodos());
  const [todos, , handleCheckboxToggle] = result.current;

  act(() => {
    handleCheckboxToggle(todos[0].id);
  });

  const [updatedTodos] = result.current;
  expect(updatedTodos[0].checkbox).toBe(true); // 기존 값이 false였다면 true로 변경됨
});