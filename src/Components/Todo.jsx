function Todo(props) {
  return (
    <>
      <div className="c-cb">
        <input
          id={props.id}
          type="checkbox"
          checked={props.completed}
          onChange={(event) => props.toggleTaskCompleted(props.id, event)}
        />
        <label className="todo-label" htmlFor={props.id}>
          {props.name}
        </label>
      </div>
    </>
  );
}

export default Todo;
