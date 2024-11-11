import React, { useState } from 'react';

const Input = ({ onSubmit }) => {
  const [content, setContent] = useState('');

  // 날짜 포맷팅 함수 (YYYY/MM/DD 형식)
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}/${month}/${day}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content.trim()) return;

    const currentDate = new Date();
    const newTodo = {
      id: Date.now(),
      content: content.trim(),
      checkbox: false,
      created_at: formatDate(currentDate),  // 포맷된 날짜 저장
      updated_at: formatDate(currentDate),  // 포맷된 날짜 저장
    };

    onSubmit(newTodo);
    setContent(''); // 입력 필드 초기화
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
