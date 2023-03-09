<template>
	<div class="container no-nav">
		<button @click="$router.go(-1)" class="previous">Go back</button>
		<Nuxt />
	</div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Karla:wght@300;400;500;600;700&display=swap");

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

html {
	scroll-behavior: smooth;
}

body {
	font-family: "Karla", sans-serif;
}

.no-nav {
	padding: 5rem 1rem;
}

.previous {
	border: none;
	outline: none;
	background: none;
	color: teal;
	text-decoration: none;
}
</style>
