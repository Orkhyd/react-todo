import { useState } from "react";
import Column from "./Components/Column";

const COLUMN_MAP = {
  "To do": (task) => !task.completed,
  Done: (task) => task.completed,
};

const COLUMN_NAMES = Object.keys(COLUMN_MAP);

function App(props) {
  const columnList = COLUMN_NAMES.map((name) => (
    <Column name={name} key={name} tasks={props.tasks} map={COLUMN_MAP} />
  ));

  return (
    <>
      <h1>To Do List</h1>
      <div className="column-wrap">{columnList}</div>
    </>
  );
}

export default App;
