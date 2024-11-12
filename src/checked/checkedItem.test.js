import { fireEvent, render, screen } from "@testing-library/react";
import CheckedItem from "./checkedItem";
import dummyData from "../data/data.json";

describe("완료 목록 렌더테스트", () => {
  const dummyTodo = {
    id: "2024-11-11",
    title: "야호",
    check: true,
    create_at: "2015-01-01",
    update_at: "2024-11-11",
  };

  // update = (isChecked, setIsChecked) => {
  //   setIsChecked(!isChecked);
  // };

  // clear = (dataArr, setDataArr) => {
  //   const updateArr = dataArr.filter((item) => item.checked !== true);
  //   setDataArr(updateArr);
  // };

  test("update테스트", () => {
    let data = dummyData;
    render(
      data
        .filter((item) => item.checked === true)
        .map((item) => {
          return <CheckedItem item={item}></CheckedItem>;
        })
    );

    const checkboxs = screen.getAllByRole("checkbox");
    expect(checkboxs.length).toBe(6);
    fireEvent.click(checkboxs[0]);

    //수정한 값을 부모에게 전달한다.
    const update(data, targetId) => {
      const rest = data.filter(e => e.id !== targetId);
      const target = data.fild()
    }

    // expect(checkboxs[0].checked).toBe(false);

    // const checkboxss = screen.getAllByRole("checkbox");
    // expect(checkboxss.length).toBe(5);
  });

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

  // test("배열 출력 테스트", () => {
  //   render(
  //     <div data-testid="parent">
  //       {dummyData.map((item) => {
  //         return <CheckedItem item={item}></CheckedItem>;
  //       })}
  //     </div>
  //   );

  //   const parentElem = screen.getByTestId("parent");

  //   expect(parentElem.children.length).toBe(3);
  // });

  test("클릭이벤트", () => {
    // const database = Array.from(new CheckedPlugin(dummyTodoList));
    render(<CheckedItem item={dummyTodo}></CheckedItem>);

    const checkbox = screen.getByRole("checkbox");

    expect(checkbox.checked).toBe(true);

    fireEvent.click(checkbox);

    expect(checkbox.checked).toBe(false);
  });
});
