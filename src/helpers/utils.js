/**
 * Local storage manipulation
 */

// Gets task list
export const getTasks = () => {
	const tasks = localStorage.getItem("todos");
	return tasks === null ? undefined : JSON.parse(tasks);
};

// Sets task list
export const setTasks = (tasks) => {
	if (Array.isArray(tasks)) localStorage.setItem("todos", JSON.stringify(tasks));
};

// Clear all data
export const clearTasks = () => {
	localStorage.clear();
};
