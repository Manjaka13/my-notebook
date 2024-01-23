<template>
	<ul class="tasklist">
		<li class="tasklist__item" v-for="(task, key) in tasks" :key="task.id">
			<task-item
				:title="task.title"
				:description="task.description"
				:status="task.status"
				@toggle="toggle(key)"
			/>
		</li>
	</ul>
</template>

<script>
import TaskItem from "@/components/TaskItem.vue";
import { getTasks, setDefaultTasks, updateTask } from "@/helpers/utils";
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
		};
	},
	created() {
		if (this.tasks.length === 0) {
			setDefaultTasks();
			this.tasks = DEFAULT_TASKS;
		}
	},
	methods: {
		toggle(key) {
			this.tasks[key].status = !this.tasks[key].status;
			updateTask("id", this.tasks[key].id, this.tasks[key]);
		},
	},
};
</script>
