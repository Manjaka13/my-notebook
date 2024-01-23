<template>
	<div class="taskitem">
		<div class="taskitem__status">
			<font-icon v-if="status" icon="check" />
		</div>
		<div class="taskitem__content">
			<div class="taskitem__head">
				<h2 class="title">{{ title }}</h2>
				<div class="taskitem__actions">
					<button class="action edit" title="Edit task">
						<font-icon icon="pencil-alt" />
					</button>
					<button class="action delete" title="Remove task">
						<font-icon icon="trash-alt" />
					</button>
				</div>
			</div>
			<p class="description">
				{{ description }}
			</p>
		</div>
	</div>
</template>

<script>
import "@/styles/taskitem.css";

export default {
	name: "TaskItem",
	props: {
		title: String,
		description: String,
		status: Boolean,
	},
};
</script>
