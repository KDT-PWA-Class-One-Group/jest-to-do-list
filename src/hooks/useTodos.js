import { useState } from 'react';

export default () => {
  const [todos, setTodos] = useState([]);

  // 새로운 할 일을 추가하는 함수
  const handleNewTodo = (newTodo) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { ...newTodo, date: new Date().toLocaleDateString() },
    ]);
  };

  // 체크박스 상태를 토글하는 함수
  const handleCheckboxToggle = (index) => {
    setTodos((prevTodos) => 
      prevTodos.map((todo, i) =>
        i === index ? { ...todo, checkbox: !todo.checkbox } : todo
      )
    );
  };

  return [todos, handleNewTodo, handleCheckboxToggle];
};