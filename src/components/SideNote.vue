<template>
	<div class="sidenote">
		<div class="sidenote__content">
			<button className="add" @click="toggle">
				<font-icon icon="plus-circle" /> Add task
			</button>
		</div>
		<img class="sidenote__scotch1" src="/images/scotch.png" alt="Scotch 1" />
		<img class="sidenote__scotch2" src="/images/scotch.png" alt="Scotch 2" />
	</div>
</template>

<script>
import "@/styles/sidenote.css";

export default {
	name: "SideNote",
	methods: {
		toggle() {
			this.$store.dispatch("toggleModal", { status: 1 });
		},
	},
};
</script>
