import { useState } from "react";
import data from "../data/data.json";

/**
 * 할 일 목록 상태 및 관리 함수들을 제공합니다.
 * @returns {[Array, Function, Function]} [todos, handleNewTodo, handleCheckboxToggle]
 */
export default () => {
  const [todos, setTodos] = useState(data);

  /**
   * 새로운 할 일을 추가합니다.
   * @param {Object} newTodo - 추가할 할 일 객체
   */
  const handleNewTodo = (newTodo) => {
    setTodos((prevTodos) => [...prevTodos, { ...newTodo, id: Date.now() }]);
  };

  return [todos, handleNewTodo, setTodos];
};
