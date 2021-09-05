<template>
  <div class="container">
    <h4 class="header font-weight-bold">{{ sectionData.title }}</h4>
    <div class="d-flex justify-content-between flex-wrap">
      <SmallCard
        v-for="card in sectionData.cards"
        :card="card"
        :key="card.id"
      />
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
  margin-bottom: 2rem;
}

.header {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}
</style>