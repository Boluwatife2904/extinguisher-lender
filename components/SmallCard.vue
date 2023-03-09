<template>
	<NuxtLink :to="`/products/${card.id}`" class="card-container">
		<img class="image" :src="require(`@/assets/images/${card.image || 'fe1.jpg'}`)" alt="" />
	</NuxtLink>
</template>

<script>
export default {
	props: ["card"],
};
</script>

<style scoped>
.card-container {
	width: 24%;
	height: 12.5rem;
	border-radius: 0.5rem;
	overflow: hidden;
	margin-bottom: 1.5rem;
	cursor: pointer;
}

.image {
	width: 100%;
	height: 100%;
}

@media screen and (max-width: 992px) {
	.card-container {
		width: 45%;
	}
}

@media screen and (max-width: 576px) {
	.card-container {
		width: 90%;
		margin: 0 auto 1.5rem;
	}
}
</style>
