<template>
	<div :class="`modal${modal.status === 0 ? ' modal--closed' : ''}`">
		<div class="modal__overlay" @click="toggle"></div>
		<div class="modal__container">
			<div class="modal__head">
				<h2 v-if="modal.status === 1" class="title">
					<font-icon icon="plus-circle" /> Add new task
				</h2>
				<h2 v-else-if="modal.status === 2" class="title">
					<font-icon icon="pencil-alt" /> Save task
				</h2>
				<h2 v-else class="title">
					<font-icon icon="question-circle" /> You sure ?
				</h2>
				<a class="close" title="Close dialog" @click="toggle">
					<font-icon icon="times-circle" />
				</a>
			</div>
			<div class="modal__divider"></div>
			<form v-if="modal.status === 1 || modal.status === 2" class="modal__add">
				<input
					class="input"
					type="text"
					placeholder="Write title"
					v-model="title"
					required
				/>
				<textarea
					class="input textarea"
					placeholder="Enter description"
					v-model="description"
				></textarea>
				<button class="submit" type="submit">
					{{ modal.status === 1 ? "Add" : "Save" }}
				</button>
			</form>
			<div v-else class="modal__confirm">
				<button class="button button--yes">YES</button>
				<button class="button button--no">NO</button>
			</div>
		</div>
	</div>
</template>

<script>
import "@/styles/modalscreen.css";

export default {
	name: "ModalScreen",
	data() {
		return {
			title: "",
			description: "",
		};
	},
	computed: {
		modal() {
			return this.$store.getters.getModalStatus;
		},
		tasks() {
			return this.$store.getters.getTasks;
		},
	},
	methods: {
		toggle() {
			this.$store.dispatch("toggleModal", { status: 0 });
			this.title = "";
			this.description = "";
		},
	},
	watch: {
		modal(m) {
			if (m.status === 2) {
				this.title = this.tasks[m.payload].title;
				this.description = this.tasks[m.payload].description;
			}
		},
	},
};
</script>
