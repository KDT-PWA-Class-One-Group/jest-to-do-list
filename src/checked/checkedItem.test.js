import { fireEvent, render, screen } from "@testing-library/react";
import CheckedList from "./checkedItem";
import dummyData from "../data/data.json";

describe("완료 목록 렌더테스트", () => {
  test("update테스트", () => {
    let data = dummyData;
    //수정한 값을 부모에게 전달한다.
    const setData = (value) => {
      data = value;
    };

    const { rerender } = render(
      <CheckedList data={data} changeData={setData} />
    );

    const checkboxs = screen.getAllByRole("checkbox");
    expect(checkboxs.length).toBe(6);

    fireEvent.click(checkboxs[0]);

    rerender(<CheckedList data={data} changeData={setData} />);

    const checkboxes = screen.getAllByRole("checkbox");
    expect(checkboxes.length).toBe(5);
  });

  test("비우기", () => {
    let data = dummyData;
    const changeData = (value) => {
      data = value;
    };

    const { rerender } = render(
      <CheckedList changeData={changeData} data={data} />
    );

    const checkboxes = screen.getAllByRole("checkbox");
    expect(checkboxes.length).toBeGreaterThan(0);
    const button = screen.getByRole("button");

    fireEvent.click(button);

    const check = data.filter((e) => e.checked === true);
    expect(check.length).toBe(0);
  });
});
