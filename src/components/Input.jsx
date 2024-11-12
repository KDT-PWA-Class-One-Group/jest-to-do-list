import React, { useState } from 'react';
import formatDate from '../utils/formatDate';

const Input = ({ onSubmit }) => {
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content.trim()) return;

    const newTodo = {
      id: Date.now(),
      content: content.trim(),
      checkbox: false,
      created_at: formatDate(new Date()),
      updated_at: formatDate(new Date()),
    };

    onSubmit(newTodo);
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="flex gap-2">
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
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