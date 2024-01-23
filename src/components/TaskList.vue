<template>
	<ul class="tasklist">
		<li class="tasklist__item" v-for="task in tasks" :key="task.id">
			<task-item
				:title="task.title"
				:description="task.description"
				:status="task.status"
			/>
		</li>
	</ul>
</template>

<script>
import TaskItem from "@/components/TaskItem.vue";
import { getTasks, setDefaultTasks } from "@/helpers/utils";
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
	mounted() {
		console.log(this.tasks);
	},
};
</script>
