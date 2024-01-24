import { createStore } from "vuex";
import { getTasks, setTasks } from "@/helpers/utils";
import { DEFAULT_TASKS } from "@/helpers/const";

/**
 * Design our store
 */

export default createStore({
	// Default state
	state() {
		return {
			tasks: [],
		};
	},

	actions: {
		// Gets task list
		getTaskList: ({ commit }) => {
			let data = getTasks();
			if (typeof data === "undefined") {
				data = DEFAULT_TASKS;
				data.forEach((task) => commit("pushTask", task));
				setTasks(data);
			} else if (Array.isArray(data)) {
				if (data.length > 0) data.forEach((task) => commit("pushTask", task));
				else commit("clearTasks");
			}
		},
		// Adds new task
		addNewTask: ({ commit }, task) => {
			commit("addTask", task);
		},
		// Removes task
		deleteTask: ({ commit }, key) => {
			commit("removeTask", key);
		},
		// Updates task
		changeTask: ({ commit }, { key, task }) => {
			commit("updateTask", { key, task });
		},
	},

	mutations: {
		// Adds new task at begining
		addTask(state, task) {
			state.tasks.unshift(task);
			setTasks(state.tasks);
		},
		// Adds new task at end
		pushTask(state, task) {
			state.tasks.push(task);
		},
		// Remove task
		removeTask(state, key) {
			state.tasks.splice(key, 1);
			setTasks(state.tasks);
		},
		// Update a task
		updateTask(state, { key, task }) {
			state.tasks[key] = task;
			setTasks(state.tasks);
		},
		// Clear tasks
		clearTasks(state) {
			state.tasks = [];
			setTasks([]);
		},
	},

	// Data getters
	getters: {
		// Get all tasks
		getTasks(state) {
			return state.tasks;
		},
		// Get only achieved tasks
		getAchievedTasks(state) {
			return state.tasks.filter((task) => task.status);
		},
		// Get only remaining
		getRemainingTasks(state) {
			return state.tasks.filter((task) => !task.status);
		},
	},
});
