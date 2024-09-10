function DeleteButton(props) {
  return (
    <button onClick={() => props.deleteAllTasks()}>Clear all done tasks</button>
  );
}

export default DeleteButton;
