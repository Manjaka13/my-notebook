<template>
	<social-links />
	<note-book />
	<modal-screen />
</template>

<script>
import SocialLinks from "@/components/SocialLinks.vue";
import NoteBook from "@/components/NoteBook.vue";
import ModalScreen from "@/components/ModalScreen.vue";

export default {
	name: "App",
	components: {
		SocialLinks,
		NoteBook,
		ModalScreen,
	},
	// Get task list at component creation
	created() {
		this.$store.dispatch("getTaskList");
	},
};
</script>

<style lang="css" scoped>
#app {
	/* display: flex; */
}
</style>
