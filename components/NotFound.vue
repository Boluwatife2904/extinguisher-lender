<template>
  <div>
    <img :src="require('@/assets/images/fe25.jpg')" alt="not found" />
    <h1>{{ name }} Not Found</h1>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
      default: "Page"
    }
  }
};
</script>

<style scoped>
div {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

h1 {
  font-size: 2rem;
}

img {
  width: 7rem;
  margin: 0 auto 1rem;
}
</style>