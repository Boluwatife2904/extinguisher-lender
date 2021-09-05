<template>
  <div class="item-container">
    <img :src="require(`@/assets/images/${item.image}`)" alt="" />
    <div class="text-container">
      <h4>{{ item.title }}</h4>
      <p>{{ item.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
};
</script>

<style scoped>
.item-container {
  display: flex;
  margin: 1rem 0;
  gap: 20px;
}

img {
  width: 17.5rem;
  border-radius: 0.5rem;
  height: 11rem;
}

p {
  font-size: 0.8rem;
  color: grey;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

@media screen and (max-width: 1200px) {
  p {
    -webkit-line-clamp: 7;
  }
}

@media screen and (max-width: 576px) {
  .item-container {
    flex-direction: column;
  }

  img {
    height: 14rem;
    width: 100%;
  }

  p {
    -webkit-line-clamp: 3;
  }
}
</style>