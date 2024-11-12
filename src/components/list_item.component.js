export const ListedItem = ({ todo, callback }) => {
  return (
    <div style={{ display: "flex" }}>
      <input
        type="checkbox"
        checked={todo.checked}
        onChange={() => {
          callback();
        }}
      ></input>
      <p>{todo.title}</p>
      <p>{todo.created_at}</p>
    </div>
  );
};
