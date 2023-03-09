<template>
	<div>
		<b-button id="show-btn" @click="showModal">Rent</b-button>

		<b-modal ref="my-modal" hide-footer title="Choose the rent duration">
			<div class="calendar-container">
				<vc-date-picker :value="null" color="indigo" is-dark is-range />
			</div>
			<b-button
				class="mt-3"
				variant="outline-danger"
				block
				@click="
					() => {
						addItem(product.id);
						hideModal();
						$router.push('/my-items');
					}
				"
				>Order</b-button
			>
		</b-modal>
	</div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
	props: ["product"],
	methods: {
		showModal() {
			this.$refs["my-modal"].show();
		},
		hideModal() {
			this.$refs["my-modal"].hide();
		},
		...mapMutations(["addItem"]),
	},
};
</script>

<style scoped>
button {
	width: 100%;
	border: none;
	padding: 0.5rem;
	color: white;
	font-weight: 700;
	padding: 1rem 4rem;
	border-radius: 100rem;
	background-color: rgb(231, 81, 43);
	color: white;
	font-weight: 700;
	transition: 0.5s;
}

.calendar-container {
	margin: 0 auto;
}

.vc-container {
	width: 100%;
}
</style>
