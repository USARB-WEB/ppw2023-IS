let todos = [
    
]

document.addEventListener('DOMContentLoaded', function () {
    getTodosFromLocalStorage();
    displayTodos();

    document.getElementById('todo-create-button').addEventListener('click', function () {
        addTodo();
        displayTodos();
    });
})

function getTodosFromLocalStorage(){
    const todosString = localStorage.getItem('todos');
    todos = JSON.parse(todosString) || [];
}

function displayTodos() {
    const todoListContainer = document.getElementById('todo-list-container');
    todoListContainer.innerHTML = '';
    for (const todo of todos) {
        const todoItem = document.createElement('li')
        todoItem.classList.add('todo-item');
        todoItem.innerHTML = `<span class="todo-text">${todo.text}</span>`;
        
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('todo-remove');
        deleteBtn.innerText = 'Delete';
        deleteBtn.addEventListener('click', function () {
            todos.splice(todos.indexOf(todo), 1);
            localStorage.setItem('todos', JSON.stringify(todos));
            displayTodos();
        });

        const checkbox = document.createElement('input');
        checkbox.classList.add('todo-checkbox');
        checkbox.setAttribute('type', 'checkbox');

        todoItem.prepend(checkbox);
        todoItem.appendChild(deleteBtn);
        todoListContainer.appendChild(todoItem);    
    }
}

function addTodo(){
    todos.push({
        id: todos.length + 1,
        text: document.getElementById('todo-input').value,
        completed: false
    });
    localStorage.setItem('todos', JSON.stringify(todos));
    console.log(localStorage.getItem('todos'));
}

/* 
<li class="todo-item">
    <input type="checkbox" class="todo-checkbox">
    <span class="todo-text">Todo 1</span>
    <button class="todo-remove">X</button>
</li> 
*/