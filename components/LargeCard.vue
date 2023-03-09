<template>
	<NuxtLink :to="`/products/${card.id}`" class="card">
		<img class="image" :src="require(`@/assets/images/${card.image || 'fe1.jpg'}`)" alt="" />
		<h3 class="header">{{ card.title }}</h3>
		<p class="snippet">
			{{ card.snippet }}
		</p>
	</NuxtLink>
</template>

<script>
export default {
	props: ["card"],
};
</script>

<style scoped>
.card {
	width: 31.5%;
	border: none;
	overflow: hidden;
	padding: 0;
	cursor: pointer;
	text-decoration: none;
	color: inherit;
}

.image {
	height: 16rem;
	border-radius: 0.5rem;
}

.header {
	font-size: 1.15rem;
	margin-top: 0.4rem;
}

.snippet {
	color: grey;
}

@media screen and (max-width: 992px) {
	.card {
		width: 45%;
		margin-bottom: 40px;
	}
}

@media screen and (max-width: 576px) {
	.card {
		width: 90%;
		margin: 0 auto 1.5rem;
	}
}
</style>
