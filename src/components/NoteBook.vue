<template>
	<div class="notebook">
		<div class="notebook__head">
			<h1 class="notebook__title">My Notebook</h1>
			<p v-if="remainingTaskList.length > 0" class="notebook__remaining">
				{{ remainingTaskList.length }}/{{ taskList.length }} tasks remaining
			</p>
			<side-note />
		</div>
		<task-list :tasks="taskList" />
	</div>
</template>

<script>
import "@/styles/notebook.css";
import SideNote from "@/components/SideNote.vue";
import TaskList from "@/components/TaskList.vue";

export default {
	name: "NoteBook",
	components: {
		SideNote,
		TaskList,
	},
	// Get task list at component creation
	created() {
		this.$store.dispatch("getTaskList");
	},
	computed: {
		taskList() {
			return this.$store.getters.getTasks;
		},
		remainingTaskList() {
			return this.$store.getters.getRemainingTasks;
		},
	},
};
</script>
