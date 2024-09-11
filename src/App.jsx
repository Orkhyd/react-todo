import Column from "./Components/Column";
import Prompt from "./Components/Prompt";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "./utils/db";
import DeleteButton from "./Components/DeleteButton";

const COLUMN_MAP = {
  "To do": (task) => task.completed === "false",
  Done: (task) => task.completed === "true",
};

const COLUMN_NAMES = Object.keys(COLUMN_MAP);

function App() {
  const Tasks = useLiveQuery(async () => await db.tasks.toArray());
  if (!Tasks) return null;
  const columnList = COLUMN_NAMES.map((name) => (
    <Column name={name} key={name} tasks={Tasks} map={COLUMN_MAP} />
  ));

  function addTask(name) {
    console.log(
      db.tasks.add({ name, completed: "false", dateCreated: new Date() })
    );
  }

  function clearAllFinishedTasks() {
    db.tasks.where("completed").equals("true").delete();
  }

  return (
    <>
      <h1>To Do List</h1>
      <div className="column-wrap">{columnList}</div>
      <div className="func">
        <div className="column-wrap pad-top">
          <Prompt addTask={addTask} />
          <DeleteButton deleteAllTasks={clearAllFinishedTasks} />
        </div>
      </div>
    </>
  );
}

export default App;
