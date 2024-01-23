<template>
	<ul class="tasklist">
		<li class="tasklist__item">
			<task-item />
		</li>
	</ul>
</template>

<script>
import "@/styles/tasklist.css";
import TaskItem from "@/components/TaskItem.vue";

export default {
	name: "TaskList",
	components: {
		TaskItem,
	},
};
</script>
