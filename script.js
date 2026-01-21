const addTaskButton = document.getElementById('add-task-button'); 
const newTaskInput = document.getElementById('new-task-input'); 
const taskList = document.getElementById('task-list'); 

let tasks = []; 
let taskId = 0; 

addTaskButton.addEventListener('click', () => { 
    const taskText = newTaskInput.value.trim(); 
    if (taskText !== '') { 
        const task = { 
            id: taskId++, 
            text: taskText, 
            completed: false
        };
        tasks.push(task);
        addTaskToDOM(task);
        newTaskInput.value = '';
    }
});

function addTaskToDOM(task) {
    const li = document.createElement('li');
    li.className = 'task-item';
    li.setAttribute('data-id', task.id);

    const span = document.createElement('span');
    span.textContent = task.text;
    li.appendChild(span);

    // Toggle completion
    span.addEventListener('click', () => {
	console.log('completed task', task);
        task.completed = !task.completed;
        if (task.completed) {
            li.classList.add('completed');
        } else {
            li.classList.remove('completed');
        }
    });
	
    // Delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    li.appendChild(deleteButton);

    deleteButton.addEventListener('click', () => {
        const index = tasks.findIndex(t => t.id === task.id);
        if (index !== -1) {
            tasks.splice(index, 1);
            taskList.removeChild(li);
        }
    });

    taskList.appendChild(li);

}
