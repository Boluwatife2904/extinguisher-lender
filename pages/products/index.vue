<template>
  <div>
    <LargeCardDisplay
      v-for="item in largeCardSections"
      :sectionData="item"
      :key="item.snippet"
    />
    <SmallCardDisplay
      v-for="item in smallCardSections"
      :sectionData="item"
      :key="item.snippet"
    />
  </div>
</template>

<script>
import { largeCardSections, smallCardSections } from "~/assets/data.js";
export default {
  data() {
    return {
      largeCardSections: largeCardSections.slice(0, 1),
      smallCardSections: smallCardSections,
    };
  },
};
</script>

<style scoped>
</style>