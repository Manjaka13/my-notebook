import { DEFAULT_TASKS } from "@/helpers/const";

/**
 * Local storage manipulation
 */

// Gets task list
export const getTasks = () => {
	const tasks = localStorage.getItem("todos");
	return tasks === null ? [] : JSON.parse(tasks);
};

// Push a new task
export const pushTask = (task) => {
	let tasks = localStorage.getItem("todos");
	if (tasks === null) localStorage.setItem("todos", JSON.stringify([task]));
	else {
		tasks = JSON.parse(tasks);
		if (Array.isArray(tasks)) tasks.push(task);
		else tasks = [task];
		localStorage.setItem("todos", JSON.stringify(tasks));
	}
};

// Remove a task
export const removeTask = (field, value) => {
	let tasks = localStorage.getItem("todos");
	if (tasks !== null) {
		tasks = JSON.parse(tasks);
		if (Array.isArray(tasks)) {
			let toRemove = -1;
			for (let i = 0; i < tasks.length; i++) {
				if (tasks[i][field] === value) {
					toRemove = i;
					break;
				}
			}
			if (toRemove >= 0) {
				tasks = tasks.filter((item, key) => key !== toRemove);
				localStorage.setItem("todos", JSON.stringify(tasks));
			}
		}
	}
};

// Update a task
export const updateTask = (field, value, newTask) => {
	let tasks = localStorage.getItem("todos");
	if (tasks !== null) {
		tasks = JSON.parse(tasks);
		if (Array.isArray(tasks)) {
			let toUpdate = -1;
			for (let i = 0; i < tasks.length; i++) {
				if (tasks[i][field] === value) {
					toUpdate = i;
					break;
				}
			}
			if (toUpdate >= 0) {
				tasks[toUpdate] = newTask;
				localStorage.setItem("todos", JSON.stringify(tasks));
			}
		}
	}
};

// Clear all data
export const clearTasks = () => {
	localStorage.clear();
};

// Setup default tasks
export const setDefaultTasks = () => {
	clearTasks();
	localStorage.setItem("todos", JSON.stringify(DEFAULT_TASKS));
};
