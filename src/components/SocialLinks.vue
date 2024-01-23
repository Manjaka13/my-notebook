<template>
	<ul class="social-links">
		<li class="social-links__item" v-for="(item, key) in social" :key="key">
			<a className="link" :href="item.link" :title="item.title">
				<font-icon :icon="item.icon" />
			</a>
		</li>
	</ul>
</template>

<script>
import { SOCIAL } from "@/helpers/const";
import "@/styles/social-links.css";

export default {
	name: "SocialLinks",
	data() {
		return {
			social: SOCIAL,
		};
	},
};
</script>
