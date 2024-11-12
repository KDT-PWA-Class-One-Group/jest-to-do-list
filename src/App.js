import React, { useState } from "react";

import database from "./data/data.json";

// components
import Input from "./components/Input";
import useTodos from "./hooks/useTodos";
import { OutputNoneCheckedSection } from "./components/output_none_checked_section.component";
import CheckedList from "./components/checkedItem";

const App = () => {
  const [todos, handleNewTodo, handleCheckboxToggle, setTodos] = useTodos();

  return (
    <div className="App">
      <Input onSubmit={handleNewTodo} />
      <OutputNoneCheckedSection todos={todos} setTodos={setTodos} />
      <CheckedList data={todos} changeData={handleNewTodo} />
    </div>
  );
};

export default App;
