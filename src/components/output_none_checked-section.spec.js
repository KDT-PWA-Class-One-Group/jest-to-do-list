import { render, screen } from "@testing-library/react";
import {
  OutputNoneCheckedSection,
  clickCheckBoxCallback,
} from "./output_none_checked_section.component";

describe("OutputNoneCheckedSection Test", () => {
  const dummyTodoArray = [
    {
      id: 1,
      title: "DummyTitle 1",
      check: false,
      create_at: "1990-10-10",
    },
    {
      id: 2,
      title: "DummyTitle 2",
      check: false,
      create_at: "1991-11-11",
    },
    {
      id: 3,
      title: "DummyTitle 3",
      check: false,
      create_at: "1992-12-12",
    },
    {
      id: 4,
      title: "DummyTitle 4",
      check: false,
      create_at: "1993-01-01",
    },
    {
      id: 5,
      title: "DummyTitle 5",
      check: false,
      create_at: "1994-02-02",
    },
    {
      id: 6,
      title: "DummyTitle 6",
      check: false,
      create_at: "1995-03-03",
    },
    {
      id: 7,
      title: "DummyTitle 7",
      check: false,
      create_at: "1996-04-04",
    },
    {
      id: 8,
      title: "DummyTitle 8",
      check: false,
      create_at: "1997-05-05",
    },
    {
      id: 9,
      title: "DummyTitle 9",
      check: false,
      create_at: "1998-06-06",
    },
    {
      id: 10,
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
    // 상태 배열을 깊은 복사
    let todos = JSON.parse(JSON.stringify(dummyTodoArray));

    const mockSetTodos = (updateFn) => {

      // updateFn은 기존의 상태를 기반으로 새로운 상태를 반환하는 함수
      todos = updateFn(todos);
    };

    // clickCheckBoxCallback 호출, id가 2인 아이템을 업데이트
    clickCheckBoxCallback(2, mockSetTodos);

    // 배열이 성공적으로 변경되었는지 확인
    const updatedItem = todos.find((todo) => todo.id === 2);
    expect(updatedItem.check).toBe(true); 
    expect(updatedItem.update_at).not.toBeNull();
  });
});
