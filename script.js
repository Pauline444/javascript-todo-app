'use strict';

const todoForm = document.querySelector('form');
const todoInput = document.getElementById('todo-input');
const ul = document.getElementById('todo-list');

let allTodos = [];

todoForm.addEventListener('submit', event => {
    event.preventDefault();
    addTodo();
});

// trim tar bort oönskade mellanslag
function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText.length > 0) {
        allTodos.push(todoText);
        updateTodoList();
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
    li.className = 'todo';
    li.innerHTML = `
    <input type="checkbox" id="${todoId}">
                <label for="${todoId}" class="custom-checkbox">
                    <img src="sources/check_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png">
                </label>
                <label for="${todoId}" class="todo-text">
                    ${todo}
                </label>
                <button class="delete-btn">
                    <img src="sources/close_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png">
                </button>
    `;

    return li;
};
