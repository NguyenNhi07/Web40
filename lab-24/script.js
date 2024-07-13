//hiển thị danh sách công việc : gọi API lấy danh sách công viêc + render ds lên giao diện
function getTodoList() {
  return axios.get("https://dummyjson.com/todos?limit=5").then((response) => {
    return response.data.todos;
  });
}

function createTodo(todo) {
  return axios
    .post("https://dummyjson.com/todos/add", todo)
    .then((response) => {
      response.data.todos;
    });
}

function renderItem(todo) {
  const $todoList = $(".todo-list");
  $(`<li class="todo-item">
          <input type="checkbox" />
          <span class="todo-content">${todo.todo}</span>
          <button class="todo-delete btn-delete">Xoá</button>
        </li>`)
    .find("input")
    .prop("checked", item.completed)
    // .change(function () {}) // gắn sự kiện cho checkbox
    .end()
    .find("button")
    // .click(function () {}) //gắn sự kiện cho nút
    .end()
    .append($todoList);
}

function renderNewTodo(todo) {
  const $todoList = $(".todo-list");
  $(`<li class="todo-item">
        <input type="checkbox" />
        <span class="todo-content">${todo.todo}</span>
        <button class="todo-delete btn-delete">Xoá</button>
      </li>`)
    .find("input")
    .prop("checked", item.completed)
    // .change(function () {}) // gắn sự kiện cho checkbox
    .end()
    .find("button")
    // .click(function () {}) //gắn sự kiện cho nút
    .end()
    .append($todoList);
}

function renderTodoList(todos) {
  const $todoList = $(".todo-list");
  $todoList.empty();
  $todoList.removeClass("loading");

  if (todos.length === 0) {
    $todoList.addClass("empty");
    $todoList.append(`<p>No todo list</p>`);
  } else {
    $todoList.removeClass("empty");

    for (const item of todos) {
      renderItem(item);
    }
  }
}

$(function () {
  getTodoList().then(renderTodoList);

  $(".todo-form").submit((e) => {
    e.preventDefault();
    const $input = $form.find("todo-input")

    if ($input.val().trim().length === 0) {
        return;
    }

    const todo 
});
