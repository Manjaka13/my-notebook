<template>
	<div class="taskitem">
		<div class="taskitem__status">
			<font-icon icon="check" />
		</div>
		<div class="taskitem__content">
			<div class="taskitem__head">
				<h2 class="title">This is a task title</h2>
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
				Qui excepteur veniam ad sit sunt excepteur incididunt amet velit dolore.
				Amet laboris aute deserunt mollit voluptate duis do eu minim enim ullamco.
				Do minim minim anim exercitation irure occaecat sint mollit id velit non.
				Sint ullamco consectetur.
			</p>
		</div>
	</div>
</template>

<script>
import "@/styles/taskitem.css";

export default {
	name: "TaskItem",
};
</script>
