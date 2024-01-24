<template>
	<ul v-if="Array.isArray(tasks) && tasks.length > 0" class="tasklist">
		<li class="tasklist__item" v-for="(task, key) in tasks" :key="task.id">
			<task-item
				:title="task.title"
				:description="task.description"
				:status="task.status"
				:removing="removing === key"
				@toggle="toggle(key)"
				@remove="remove(key)"
			/>
		</li>
	</ul>
	<div v-else class="tasklist tasklist--empty">
		<img class="image" src="/images/empty.png" alt="Empty" />
		<p class="text">EMPTY</p>
	</div>
</template>

<script>
import TaskItem from "@/components/TaskItem.vue";
import {
	getTasks,
	setDefaultTasks,
	updateTask,
	removeTask,
} from "@/helpers/utils";
import { DEFAULT_TASKS } from "@/helpers/const";
import "@/styles/tasklist.css";

export default {
	name: "TaskList",
	components: {
		TaskItem,
	},
	data() {
		return {
			tasks: getTasks(),
			removing: -1,
		};
	},
	created() {
		if (this.tasks === undefined) {
			setDefaultTasks();
			this.tasks = DEFAULT_TASKS;
		}
	},
	methods: {
		toggle(key) {
			this.tasks[key].status = !this.tasks[key].status;
			updateTask("id", this.tasks[key].id, this.tasks[key]);
		},
		remove(key) {
			this.removing = key;
		},
	},
	watch: {
		removing(v) {
			if (v >= 0) {
				setTimeout(() => {
					removeTask("id", this.tasks[v].id);
					this.tasks = getTasks();
					this.removing = -1;
				}, 200);
			}
		},
	},
};
</script>
