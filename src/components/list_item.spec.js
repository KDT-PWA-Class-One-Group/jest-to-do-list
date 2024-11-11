import { fireEvent, render, screen } from "@testing-library/react";
import { ListedItem } from "./list_item.component";


describe("List Item Render Test", () => {

    const dummyTodo = {
        title: "DummyTitle",
        check: false,
        create_at: "1990-10-10",
      };

  it("render listed item", () => {

    render(<ListedItem todo={dummyTodo}></ListedItem>);

    const titleElem = screen.getByText(dummyTodo.title);
    const createAtElem = screen.getByText(dummyTodo.create_at);
    const checkbox = screen.getByRole("checkbox");

    expect(checkbox.checked).toBeFalsy();
    expect(createAtElem.textContent).toEqual(dummyTodo.create_at);
    expect(titleElem.textContent).toEqual(dummyTodo.title);
  });

  it("checkbox click call", () => {
    const dummyFn = jest.fn();

    render(<ListedItem todo={dummyTodo} callback={dummyFn}></ListedItem>);
    const checkbox = screen.getByRole("checkbox");

    fireEvent.click(checkbox, { targaet: { value: null } });

    expect(dummyFn).toHaveBeenCalledTimes(1);
  });
});
