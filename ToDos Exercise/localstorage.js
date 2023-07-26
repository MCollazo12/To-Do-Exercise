const input = document.querySelector("#task");
const list = document.querySelector("#todoList");

function saveTodos(input) {
  //Write To-Do list to localStorage
  e.preventDefault();
  const newTodo = document.querySelector("#task").value;
  localStorage.setItem("newTodo", newTodo);

  // todoList.append(newTodo);
  // input.reset();
}

function loadTodos() {
  //Reads data from localStorage and returns it
}
