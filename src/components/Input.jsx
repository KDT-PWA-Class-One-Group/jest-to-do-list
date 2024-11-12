import React, { useState } from 'react';
import formatDate from '../utils/formatDate';

const Input = ({ onSubmit }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const currentDate = formatDate(new Date());
    const newTodo = {
      title: title.trim(),
      checkbox: false,
      created_at: currentDate,
      updated_at: currentDate,
    };

    onSubmit(newTodo);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="flex gap-2">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="할 일을 입력하세요"
          className="flex-1 p-2 border rounded"
          data-testid="todo-input"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          data-testid="todo-submit"
        >
          추가
        </button>
      </div>
    </form>
  );
};

export default Input;