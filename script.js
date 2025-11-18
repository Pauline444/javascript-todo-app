'use strict';

const todoForm = document.querySelector('form');
const todoInput = document.getElementById('todo-input');
const ul = document.getElementById('todo-list');

let allTodos = getTodos();
updateTodoList();

todoForm.addEventListener('submit', event => {
    event.preventDefault();
    addTodo();
});

// trim tar bort oönskade mellanslag
function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText.length > 0) {
        const todoObject = {
            text: todoText,
            conpleted: false
        }
        allTodos.push(todoObject);
        updateTodoList();
        saveTodos();
        todoInput.value = '';
    }
};

function updateTodoList() {
    ul.innerHTML = '';
    allTodos.forEach((todo, todoIndex) => {
        const todoItem = createTodoItem(todo, todoIndex);
        ul.append(todoItem);
    })
}

function createTodoItem(todo, todoIndex) {
    const todoId = 'todo-' + todoIndex;
    const li = document.createElement('li');
    const todoText = todo.text;
    li.className = 'todo';

    li.innerHTML = `
    <input type="checkbox" id="${todoId}">
                <label for="${todoId}" class="custom-checkbox">
                    <img src="sources/check_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png">
                </label>
                <label for="${todoId}" class="todo-text">
                    ${todoText}
                </label>
                <button class="delete-btn">
                    <img src="sources/close_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png">
                </button>
    `;

    const deleteBtn = li.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => {
        deleteTodoItem(todoIndex);
    })

    const checkbox = li.querySelector('input');
    checkbox.addEventListener('change', () => {
        allTodos[todoIndex].completed = checkbox.checked;
        saveTodos();
    })
    checkbox.checked = todo.completed;
    return li;
};

function deleteTodoItem(todoIndex) {
    allTodos = allTodos.filter((_, i) => i !== todoIndex);
    saveTodos();
    updateTodoList();
};

function saveTodos() {
    const todosJson = JSON.stringify(allTodos);
    localStorage.setItem('todos', todosJson);
};

// parse is converting back to an array
function getTodos() {
    const todos = localStorage.getItem('todos') || '[]';
    return JSON.parse(todos);
};