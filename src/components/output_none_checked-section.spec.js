import { render, screen } from "@testing-library/react";
import {
  OutputNoneCheckedSection,
  clickCheckBoxCallback,
} from "./output_none_checked_section.component";

describe("OutputNoneCheckedSection Test", () => {
  const dummyTodoArray = [
    {
      title: "DummyTitle 1",
      check: false,
      create_at: "1990-10-10",
    },
    {
      title: "DummyTitle 2",
      check: false,
      create_at: "1991-11-11",
    },
    {
      title: "DummyTitle 3",
      check: false,
      create_at: "1992-12-12",
    },
    {
      title: "DummyTitle 4",
      check: false,
      create_at: "1993-01-01",
    },
    {
      title: "DummyTitle 5",
      check: false,
      create_at: "1994-02-02",
    },
    {
      title: "DummyTitle 6",
      check: false,
      create_at: "1995-03-03",
    },
    {
      title: "DummyTitle 7",
      check: false,
      create_at: "1996-04-04",
    },
    {
      title: "DummyTitle 8",
      check: false,
      create_at: "1997-05-05",
    },
    {
      title: "DummyTitle 9",
      check: false,
      create_at: "1998-06-06",
    },
    {
      title: "DummyTitle 10",
      check: false,
      create_at: "1999-07-07",
    },
  ];

  it("renders 10 ListedItem components", () => {
    render(
      <OutputNoneCheckedSection todos={dummyTodoArray} dbCallback={jest.fn()} />
    );

    // 각 배열 수대로 랜더링이 되어있는지 확인
    const todoItems = screen.getAllByText(/DummyTitle/i);
    expect(todoItems).toHaveLength(10);
  });

  it("should update the 'check' and 'update_at' properties of the correct todo", () => {
    let todos = JSON.parse(JSON.stringify(dummyTodoArray));

    // updateFn 정의: 기존 상태를 받아 특정 요소를 수정한 후 반환하는 함수
    const updateFn = (currentTodos) => {
      const newTodos = [...currentTodos];
      newTodos[1].check = !newTodos[1].check; // 'check' 상태 반전
      newTodos[1].update_at = new Date().toISOString(); // 'update_at' 업데이트
      return newTodos;
    };

    const mockSetTodos = () => {
      todos = updateFn(todos);
    };

    // index = 1의 아이템을 업데이트하려고 호출
    clickCheckBoxCallback(1, mockSetTodos);

    // 새로운 배열에서 해당 index의 아이템이 변경되었는지 확인
    expect(todos[1].check).toBe(true); 
    expect(todos[1].update_at).not.toBeNull();
  });
});
