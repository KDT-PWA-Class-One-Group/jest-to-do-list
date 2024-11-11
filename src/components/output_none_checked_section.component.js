import { ListedItem } from "./list_item.component";

export const OutputNoneCheckedSection = ({ todos, dbCallback }) => {
  return (
    <>
      {todos.map((value, idx) => (
        <ListedItem
          key={idx}
          todo={value}
          callback={clickCheckBoxCallback(idx, dbCallback)}
        ></ListedItem>
      ))}
    </>
  );
};

export const clickCheckBoxCallback = (index, dbCallback) => {
    // index를 이용해, 배열에 접근 
    // TODO: DBCabllback 함수는 테이블을 조작하는 함수, 2개의 DB에서 삭제 및 삽입함수를 구현한다.
    dbCallback(index)
};