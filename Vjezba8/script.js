{
	const todoList = [
		{
			id: 1,
			text: 'Eat',
			isCompleted: false,
		},
		{
			id: 2,
			text: 'Sleep',
			isCompleted: false,
		},
		{
			id: 3,
			text: 'Repeat',
			isCompleted: true,
		},
	];

	const todoContainer = document.getElementById('todo-container');
	const addButton = document.getElementById('add-new-todo-button');

	function renderTodos() {
		todoContainer.innerHTML = '';

		todoList.forEach((todo) => {
			const todoDiv = document.createElement('div');
			todoDiv.className = 'todo';

			const span = document.createElement('span');
			span.innerText = todo.text;

			const deleteX = document.createElement('span');
			deleteX.innerText = 'X';
			deleteX.style.cursor = 'pointer';
			deleteX.style.color = 'red';
			deleteX.style.fontWeight = 'bold';

			deleteX.addEventListener('click', function () {
				const index = todoList.findIndex((t) => t.id === todo.id);
				if (index !== -1) {
					todoList.splice(index, 1);
					renderTodos();
				}
			});

			todoDiv.appendChild(span);
			todoDiv.appendChild(deleteX);
			todoContainer.appendChild(todoDiv);
		});
	}

	addButton.addEventListener('click', function () {
		const text = prompt('New ToDo');
		if (text) {
			todoList.push({
				id: Date.now(),
				text: text,
				isCompleted: false,
			});
			renderTodos();
		}
		console.log(todoList);
	});

	renderTodos();
}
