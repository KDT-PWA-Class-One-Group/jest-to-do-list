export const ListedItem = ({ todo, callback }) => {





  return (
    <div style={{ display: "flex" }}>
      <input type="checkbox" checked={todo.check} onChange={() => {callback()}}></input>
      <p>{todo.title}</p>
      <p>{todo.create_at}</p>
    </div>
  );
};
