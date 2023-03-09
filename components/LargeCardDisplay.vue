<template>
	<div class="container" v-if="sectionData">
		<h4 class="header font-weight-bold">{{ sectionData.title }}</h4>
		<p class="snippet">
			{{ sectionData.snippet }}
		</p>
		<div class="d-flex justify-content-between flex-wrap">
			<LargeCard v-for="card in sectionData.cards" :key="card.img" :card="card" />
		</div>
	</div>
</template>

<script>
export default {
	props: ["sectionData"],
};
</script>

<style scoped>
.container {
	margin-top: 2rem;
	margin-bottom: 2rem;
}

.header {
	font-size: 1.5rem;
}

.snippet {
	color: grey;
	margin-bottom: 1.5rem;
}
</style>
