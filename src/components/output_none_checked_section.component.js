import { ListedItem } from "./list_item.component";

export const OutputNoneCheckedSection = ({ todos, setTodos }) => {
  return (
    <>
      {todos
        .filter((value) => !value.checked)
        .map((value, idx) => (
          <ListedItem
            key={idx}
            todo={value}
            callback={() => clickCheckBoxCallback(value.id, setTodos)}
          ></ListedItem>
        ))}
    </>
  );
};

export const clickCheckBoxCallback = (id, setTodos) => {
  // index를 이용해, 배열에 접근
  // TODO: dbCallback 함수는 테이블을 조작하는 함수, 2개의 DB에서 삭제 및 삽입 함수를 구현한다.

  setTodos((rev) => {
    const newArr = [...rev];
    const findItem = newArr.find((value) => value.id === id);

    findItem.checked = !findItem.checked;
    findItem.updated_at = new Date().toISOString();

    console.dir(newArr);

    return newArr;
  });
};
