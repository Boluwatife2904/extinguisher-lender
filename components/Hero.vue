<template>
	<div class="hero container position-relative d-flex">
		<div class="text-container">
			<h1 class="header">Find your Fire Extinguisher</h1>
			<p class="snippet">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, consectetur deserunt? Odio est aut maiores possimus accusamus, autem cum officia!</p>
			<button class="button btn">Start Looking</button>
		</div>
		<div class="image-container">
			<img class="image" src="~/assets/svg/fire-extinguisher.svg" alt="fire extinguisher" />
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
.hero {
	padding: 5rem 1rem;
}

.text-container,
.image-container {
	flex: 1;
}

.text-container {
	margin-top: 4rem;
}

.header {
	font-weight: 900;
	font-size: 5rem;
}

.snippet {
	color: grey;
	font-size: 1.25rem;
}

.image {
	margin-top: 2rem;
	display: block;
	margin: 0 auto;
}

.overlay {
	background: rgba(0, 0, 0, 0);
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
}

.button {
	padding: 1rem 4rem;
	border-radius: 100rem;
	background-color: #e7512b;
	color: white;
	width: 20rem;
	font-weight: 700;
	transition: 0.5s;
}

.button:hover {
	width: 21.5rem;
}

@media (max-width: 1200px) {
	.image {
		height: 400px;
	}

	.header {
		font-size: 50px;
	}
}

@media (max-width: 992px) {
	.hero {
		flex-direction: column-reverse;
	}

	.image {
		height: 300px;
	}
}

@media (max-width: 768px) {
	.hero {
		text-align: center;
	}
}

@media (max-width: 576px) {
	.header {
		font-size: 1.5rem;
		text-align: center;
	}

	.snippet {
		text-align: center;
	}
}
</style>
