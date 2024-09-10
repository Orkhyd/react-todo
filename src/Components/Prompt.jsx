import { useState } from "react";

function Prompt(props) {
  const [name, setName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    props.addTask(name);
    setName("");
  }

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <form className="centered" onSubmit={handleSubmit}>
      <label htmlFor="new-todo-input" className="label__lg">
        Ajouter une nouvelle tâche :
      </label>

      <input
        type="text"
        id="new-todo-input"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
      />
      <button type="submit"> + </button>
    </form>
  );
}

export default Prompt;
