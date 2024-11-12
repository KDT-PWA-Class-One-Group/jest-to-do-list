import React from 'react';
import Input from './components/Input';
import useTodos from './hooks/useTodos';

const App = () => {
  const [todos, handleNewTodo, handleCheckboxToggle] = useTodos();

  return (
    <div className="App">
      <Input onSubmit={handleNewTodo} />
      
      {/* 할 일 목록 출력 */}
      <table>
        <thead>
          <tr>
            <th>완료 여부</th>
            <th>할 일</th>
            <th>날짜</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
            <tr key={todo.id}>
              <td>
                <input
                  type="checkbox"
                  checked={todo.checkbox}
                  onChange={() => handleCheckboxToggle(index)}
                />
              </td>
              <td>{todo.content}</td>
              <td>{todo.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;