export const ListedItem = ({ todo, callback }) => {
  return (
    <div>
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
