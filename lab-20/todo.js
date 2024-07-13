// Quản lý công việc
let todos = [
  {
    id: 1,
    content: "Công việc 1",
    completed: false,
  },
  {
    id: 2,
    content: "Công việc 2",
    completed: true,
  },
  {
    id: 3,
    content: "Công việc 3",
    completed: false,
  },
  {
    id: 4,
    content: "Công việc 4",
    completed: false,
  },
];

// Hiển thị danh sách công việc
function renderTodos(todoList) {
  const todoListElement = document.querySelector(".todo-list");

  const html = todoList
    .map((todo) => {
      let classes = "todo-item";
      let checked = todo.completed ? 'checked="checked"' : "";

      if (todo.completed) {
        classes += " completed";
      }

      return `
          <li class="${classes}">
            <input type="checkbox" ${checked} />
            <span class="todo-content">${todo.content}</span>
            <button class="todo-delete btn-delete" data-id="${todo.id}">Xoá</button>
          </li>
        `;
    })
    .join("");

  todoListElement.innerHTML = html;

  setupTodoButton();

  const todoCheckboxes = document.querySelectorAll(
    ".todo-item input[type='checkbox']"
  );
  todoCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      const id = parseInt(
        checkbox.parentElement
          .querySelector(".todo-delete")
          .getAttribute("data-id")
      );
      toggleTodoStatus(id);
      renderTodos(todos);
      countTodo();
    });
  });
}

renderTodos(todos);

function setupDeleteEvent(button) {
  button.addEventListener("click", function () {
    const id = parseInt(button.getAttribute("data-id"));
    deleteTodo(id);
    renderTodos(todos);
    countTodo();
  });
}

// Thêm mới công việc
function clearInput(el) {
  el.value = "";
}

function setupTodoForm() {
  const todoElement = document.querySelector(".todo-form");
  const todoInputElement = document.querySelector("input");

  //kích hoạt sự kiện submit ở trên form
  //submit => reload lại trang
  todoElement.addEventListener("submit", function (e) {
    e.preventDefault(); //ngăn trang reload
    const content = todoInputElement.value.trim();
    if (content.length === 0) {
      return;
    }
    todos.push({
      id: todos.length,
      content: content,
      completed: false,
    });
    renderTodos(todos);
    clearInput(todoInputElement);
  });
}
setupTodoForm();

// xoá công việc
function deleteTodo(id) {
  todos = todos.filter(function (item) {
    return item.id !== id;
  });
}

// thay đổi trạng thái công việc
function toggleTodoStatus(id) {
  todos = todos.map(function (todo) {
    if (todo.id === id) {
      return {
        ...todo,
        completed: !todo.completed,
      };
    }
    return todo;
  });
}

// Hiển thị số lượng công việc cần làm
function countTodo() {
  const todoCount = document.querySelector(".todo-count");
  const numberOfActiveTodos = todos.filter(function (todo) {
    return !todo.completed;
  }).length;
  todoCount.textContent = numberOfActiveTodos;
}
countTodo();

// cho phép xoá tất cả công việc đã hoàn thành
function deleteCompleted() {
  const clearCompletedButton = document.querySelector(".todo-clear");

  clearCompletedButton.addEventListener("click", function () {
    todos = todos.filter(function (todo) {
      return !todo.completed;
    });
    renderTodos(todos);
  });
}
deleteCompleted();

// cho phép lọc công việc theo trạng thái
function filterJob() {
  const todoFilterForm = document.querySelector(".todo-filter");

  todoFilterForm.addEventListener("change", function (e) {
    const selectedFilter = e.target.value;

    switch (selectedFilter) {
      case "all":
        renderTodos(todos);
        break;
      case "active":
        const activeTodos = todos.filter(function (todo) {
          return !todo.completed;
        });
        renderTodos(activeTodos);
        break;
      case "completed":
        const completedTodos = todos.filter(function (todo) {
          return todo.completed;
        });
        renderTodos(completedTodos);
        break;
      default:
        renderTodos(todos);
        break;
    }
  });
}
filterJob();

// query ra các nút xoá => gán sự kiện click cho từng nút
function setupTodoButton() {
  const todoButtons = document.querySelectorAll(".todo-delete");
  todoButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const id = parseInt(button.getAttribute("data-id"));
      deleteTodo(id);
      renderTodos(todos);
      countTodo();
    });
  });
}

// sau khi thêm mới một công việc => html được thay thế
