import { useState } from "react";
import { useLanguageContext } from "../Context/LanguageContext";

function Prompt(props) {
  const { t } = useLanguageContext();

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
    <form onSubmit={handleSubmit}>
      <label htmlFor="new-todo-input" className="label__lg">
        {t("addtask")}
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
