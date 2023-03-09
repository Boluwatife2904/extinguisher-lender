<template>
	<div class="container">
		<MyItem v-for="item in myRentals" :key="item.id" :item="item" />
	</div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
	layout: "no-nav",
	computed: {
		...mapGetters(["myRentals"]),
	},
};
</script>

<style scoped>
.container {
	padding: 3rem 0;
}
</style>
