import Dexie from "dexie";

export const db = new Dexie("myDatabase");
// db.delete();
db.version(1).stores({
  tasks: "++id, name, completed, dateCreated, dateCompleted",
});
