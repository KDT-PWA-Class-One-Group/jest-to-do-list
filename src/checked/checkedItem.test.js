import { fireEvent, render, screen } from "@testing-library/react";
import CheckedItem from "./checkedItem";
import { CheckedPlugin } from "./plugin";

describe("완료 목록 렌더테스트", () => {
  const dummyTodo = {
    id: "2024-11-11",
    title: "야호",
    check: true,
    create_at: "2015-01-01",
    update_at: "2024-11-11",
  };

  const dummyTodoList = [
    {
      id: "2024-11-11",
      title: "야호",
      check: true,
      create_at: "2015-01-01",
      update_at: "2024-11-11",
    },
    {
      id: "2024-11-11",
      title: "메롱",
      check: true,
      create_at: "2015-01-01",
      update_at: "2024-11-11",
    },
    {
      id: "2024-11-11",
      title: "안녕",
      check: true,
      create_at: "2015-01-01",
      update_at: "2024-11-11",
    },
  ];

  test("input checked 테스트", () => {
    render(<CheckedItem item={dummyTodo}></CheckedItem>);

    const inputElem = screen.getByRole("checkbox");

    expect(inputElem.checked).toBe(true);
  });

  test("아이템 출력 확인", () => {
    render(<CheckedItem item={dummyTodo}></CheckedItem>);

    const titleElem = screen.getByText(dummyTodo.title);
    const dateElem = screen.getByText(dummyTodo.update_at);

    expect(titleElem.innerHTML).toBe(dummyTodo.title);
    expect(dateElem.innerHTML).toBe(dummyTodo.update_at);
  });

  test("배열 출력 테스트", () => {
    render(
      <div data-testid="parent">
        {dummyTodoList.map((item) => {
          return <CheckedItem item={item}></CheckedItem>;
        })}
      </div>
    );

    const parentElem = screen.getByTestId("parent");

    expect(parentElem.children.length).toBe(3);
  });

  test("클릭이벤트", () => {
    // const database = Array.from(new CheckedPlugin(dummyTodoList));
    render(<CheckedItem item={dummyTodo}></CheckedItem>);

    const checkbox = screen.getByRole("checkbox");

    expect(checkbox.checked).toBe(true);
    
    fireEvent.click(checkbox);

    expect(checkbox.checked).toBe(false);
  });
});
