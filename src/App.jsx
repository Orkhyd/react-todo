import Column from "./Components/Column";
import Prompt from "./Components/Prompt";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "./utils/db";
import DeleteButton from "./Components/DeleteButton";
import { useLanguageContext } from "./Context/LanguageContext";

function App() {
  const Tasks = useLiveQuery(async () => await db.tasks.toArray());
  const { t } = useLanguageContext();

  const COLUMN_MAP = {
    "To do": {
      filter: (task) => task.completed === "false",
      name: `${t("todo")}`,
    },
    Done: { filter: (task) => task.completed === "true", name: `${t("done")}` },
  };

  const COLUMN_NAMES = Object.keys(COLUMN_MAP);
  if (!Tasks) return null;

  const columnList = COLUMN_NAMES.map((col) => (
    <Column name={col} key={col} tasks={Tasks} map={COLUMN_MAP} />
  ));

  function addTask(name) {
    db.tasks.add({ name, completed: "false" });
  }

  function clearAllFinishedTasks() {
    db.tasks.where("completed").equals("true").delete();
  }

  return (
    <>
      <h1>{t("title")}</h1>
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
