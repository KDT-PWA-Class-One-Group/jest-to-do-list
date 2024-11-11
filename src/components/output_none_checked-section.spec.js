import { fireEvent, render, screen } from "@testing-library/react";
import { OutputNoneCheckedSection } from "./output_none_checked_section.component";

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
    const mockCallback = jest.fn();

    render(
      <OutputNoneCheckedSection todos={dummyTodoArray} dbCallback={mockCallback} />
    );

    const checkboxes = screen.getAllByRole("checkbox");
    fireEvent.click(checkboxes[1]);

    // 콜백 함수가 한 번 호출되었는지 확인
    expect(mockCallback).toHaveBeenCalledTimes(1);
    // 호출된 콜백 함수에 전달된 인덱스 값이 1인지 확인
    expect(mockCallback).toHaveBeenCalledWith(1);
  });
});
