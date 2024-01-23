<template>
	<social-links />
	<note-book />
</template>

<script>
import SocialLinks from "@/components/SocialLinks.vue";
import NoteBook from "@/components/NoteBook.vue";

export default {
	name: "App",
	components: {
		SocialLinks,
		NoteBook,
	},
};
</script>

<style lang="css" scoped>
#app {
	/* display: flex; */
}
</style>
