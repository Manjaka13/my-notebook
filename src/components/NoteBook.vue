<template>
	<div class="notebook">
		<div class="notebook__head">
			<div class="left">
				<h1 class="notebook__title">My Notebook</h1>
				<p v-if="remainingTaskList.length > 0" class="notebook__remaining">
					{{ remainingTaskList.length }}/{{ taskList.length }} tasks remaining
				</p>
			</div>
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
