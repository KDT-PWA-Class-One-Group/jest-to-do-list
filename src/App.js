import React from 'react';
import Input from './components/Input';

const App = () => {
  const handleNewTodo = (newTodo) => {
    console.log('새로운 할 일:', newTodo);
    // 추가 작업: 예를 들어, 새로운 할 일을 상태에 추가하거나 API 호출
  };

  return (
    <div className="App">
      <Input onSubmit={handleNewTodo} />
    </div>
  );
};

export default App;