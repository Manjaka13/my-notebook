<template>
	<div class="notebook">
		<div class="notebook__head">
			<h1 class="notebook__title">My Notebook</h1>
			<side-note />
		</div>
		<task-list />
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
};
</script>
