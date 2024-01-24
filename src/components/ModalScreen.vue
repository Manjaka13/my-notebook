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
			<form
				v-if="modal.status === 1 || modal.status === 2"
				class="modal__add"
				@submit.prevent="toggleAction(modal.status)"
			>
				<input
					class="input"
					type="text"
					placeholder="Write title"
					v-model="title"
				/>
				<textarea
					class="input textarea"
					placeholder="Enter description"
					v-model="description"
				></textarea>
				<button class="submit" type="submit">
					{{ modal.status === 1 ? "Add" : "Save" }}
				</button>
				<p v-if="error" class="error">{{ error }}</p>
			</form>
			<div v-else class="modal__confirm">
				<button class="button button--yes" @click="toggleAction(3)">YES</button>
				<button class="button button--no" @click="toggleAction(4)">NO</button>
			</div>
		</div>
	</div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
import "@/styles/modalscreen.css";

export default {
	name: "ModalScreen",
	data() {
		return {
			title: "",
			description: "",
			error: null,
		};
	},
	computed: {
		modal() {
			return this.$store.getters.getModalStatus;
		},
		tasks() {
			return this.$store.getters.getTasks;
		},
		modalAction() {
			return this.$store.getters.getModalAction;
		},
	},
	methods: {
		toggle() {
			this.$store.dispatch("toggleModal", { status: 0 });
			this.title = "";
			this.description = "";
			this.error = null;
		},
		toggleAction(action) {
			this.$store.dispatch("setAction", action);
		},
		formIsValid() {
			if (this.title.length < 3) {
				this.error = "Please provide a valid title.";
				return false;
			}
			if (this.description.length < 3) {
				this.error = "Description is too short.";
				return false;
			}
			return true;
		},
	},
	watch: {
		"$store.state.modal"(m) {
			if (m.status === 2) {
				this.title = this.tasks[m.payload].title;
				this.description = this.tasks[m.payload].description;
			}
		},
		"$store.state.modalAction"(status) {
			if (status === 1 && this.formIsValid()) {
				this.$store.dispatch("addNewTask", {
					id: uuidv4(),
					title: this.title,
					description: this.description,
					status: false,
				});
				this.title = "";
				this.description = "";
				this.$store.dispatch("toggleModal", { status: 0 });
				this.error = null;
			} else if (status === 2 && this.formIsValid()) {
				this.$store.dispatch("changeTask", {
					key: this.modal.payload,
					task: {
						...this.tasks[this.modal.payload],
						title: this.title,
						description: this.description,
					},
				});
				this.title = "";
				this.description = "";
				this.$store.dispatch("toggleModal", { status: 0 });
				this.error = null;
			}
			this.$store.dispatch("setAction", 0);
		},
		title() {
			this.error = null;
		},
		description() {
			this.error = null;
		},
	},
};
</script>
