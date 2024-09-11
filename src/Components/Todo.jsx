import moment from "moment";

function Todo(props) {
  return (
    <>
      <div
        className="c-cb"
        title={"Created " + moment(props.dateCreated).fromNow().toString()}
      >
        <div className="inner-c-cb">
          <input
            id={props.id}
            className="todo-checkbox"
            type="checkbox"
            checked={props.completed}
            onChange={(event) => props.toggleTaskCompleted(props.id, event)}
          />
          <label className="todo-label" htmlFor={props.id}>
            {/* {moment(props.dateCreated).fromNow().toString()} */}
            {props.name}
          </label>
        </div>
        <button
          className="todo-del-button"
          onClick={() => props.deleteTask(props.id)}
        >
          x
        </button>
      </div>
    </>
  );
}

export default Todo;
