import React from 'react';
import Input from './components/Input';
import useTodos from './hooks/useTodos';

const App = () => {
  const [todos, handleNewTodo, handleCheckboxToggle] = useTodos();
  console.log(todos);

  return (
    <div className="App">
      <Input onSubmit={handleNewTodo} />
      <table>
        <thead>
          <tr>
            <th>완료 여부</th>
            <th>할 일</th>
            <th>생성 날짜</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>
                <input
                  type="checked"
                  checked={todo.checked}
                  onChange={() => handleCheckboxToggle(todo.id)}
                />
              </td>
              <td>{todo.title}</td>
              <td>{todo.created_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;