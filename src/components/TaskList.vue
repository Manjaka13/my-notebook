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
				@edit="edit(key)"
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
import "@/styles/tasklist.css";

export default {
	name: "TaskList",
	components: {
		TaskItem,
	},
	data() {
		return {
			removing: -1,
			tmp: -1,
		};
	},
	computed: {
		tasks() {
			return this.$store.getters.getTasks;
		},
		modalAction() {
			return this.$store.getters.modalAction;
		},
	},
	methods: {
		toggle(key) {
			this.$store.dispatch("changeTask", {
				key,
				task: {
					...this.tasks[key],
					status: !this.tasks[key].status,
				},
			});
		},
		remove(key) {
			this.$store.dispatch("toggleModal", { status: 3 });
			this.tmp = key;
		},
		edit(key) {
			this.$store.dispatch("toggleModal", { status: 2, payload: key });
		},
	},
	watch: {
		removing(key) {
			if (key >= 0) {
				setTimeout(() => {
					this.$store.dispatch("deleteTask", key);
					this.removing = -1;
				}, 200);
			}
		},
		"$store.state.modalAction"(status) {
			if (status === 3) {
				this.removing = this.tmp;
				this.$store.dispatch("setAction", 0);
				this.$store.dispatch("toggleModal", { status: 0 });
			} else if (status === 4) {
				this.removing = -1;
				this.$store.dispatch("toggleModal", { status: 0 });
				this.$store.dispatch("setAction", 0);
			}
			this.tmp = -1;
		},
	},
};
</script>
