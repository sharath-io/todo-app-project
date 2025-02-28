export const TodoCard = (props) => {
  const { todo, handleDeleteTodo, handleEditTodo } = props;
  return (
    <div className="card todo-item">
      <div className="todo-buttons">
        <p>{todo.input}</p>
        <button
          disabled={todo.complete}
          onClick={() => handleEditTodo(todo.id)}
        >
          <h6>Done</h6>
        </button>
        <button onClick={() => handleDeleteTodo(todo.id)}>
          <h6>Delete</h6>
        </button>
      </div>
    </div>
  );
};
