import moment from "moment";
import { useState } from "react";

function Todo(props) {
  const [timeSinceCreated, setTimeSinceCreated] = useState(
    moment(props.dateCreated).fromNow().toString()
  );

  const [timeSinceCompleted, setTimeSinceCompleted] = useState(
    moment(props.dateCompleted).fromNow().toString()
  );
  return (
    <>
      <div
        className="c-cb"
        onMouseEnter={() => {
          setTimeSinceCreated(moment(props.dateCreated).fromNow().toString());
          console.log(timeSinceCreated);
          setTimeSinceCompleted(
            moment(props.dateCompleted).fromNow().toString()
          );
          console.log(timeSinceCompleted);
        }}
        title={
          props.completed
            ? "Completed " + timeSinceCompleted
            : "Created " + timeSinceCreated
        }
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
