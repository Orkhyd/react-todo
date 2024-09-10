function DeleteButton(props) {
  return <button onClick={() => props.deleteAllTasks()}>Reset</button>;
}

export default DeleteButton;
