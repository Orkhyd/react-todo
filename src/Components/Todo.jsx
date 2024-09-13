import moment from "moment";
import { useState } from "react";
import { useLanguageContext } from "../Context/LanguageContext";

export default function Todo(props) {
  const { t } = useLanguageContext();
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
          setTimeSinceCompleted(
            moment(props.dateCompleted).fromNow().toString()
          );
        }}
        title={
          props.completed
            ? t("completed") + timeSinceCompleted
            : t("created") + timeSinceCreated
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
