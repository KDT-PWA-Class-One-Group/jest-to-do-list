import React, { useState } from 'react';
import Input from '../src/components/Input';

const App = () => {
  // 할 일 목록 상태 관리
  const [todos, setTodos] = useState([]);

  // 새로운 할 일이 제출되면 호출되는 함수
  const handleNewTodo = (newTodo) => {
    console.log('새로운 할 일:', newTodo);
    
    // 현재 날짜 가져오기
    const currentDate = new Date().toLocaleDateString(); // 'YYYY/MM/DD' 형식으로 날짜를 가져옴

    // 새로운 할 일을 상태에 추가 (날짜 추가)
    setTodos((prevTodos) => [
      ...prevTodos,
      { content: newTodo.content, checkbox: false, date: currentDate },
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
            <tr key={index}>
              <td>
                {/* 체크박스 클릭 시 handleCheckboxToggle 호출 */}
                <input
                  type="checkbox"
                  checked={todo.checkbox}
                  onChange={() => handleCheckboxToggle(index)}
                />
              </td>
              <td>{todo.content}</td>
              <td>{todo.date}</td> {/* 날짜 출력 */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
