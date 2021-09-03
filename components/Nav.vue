<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark padding">
    <h3 class="text-white">Firengii</h3>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse ml-auto" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <NuxtLink to="/" class="nav-link"
            >Home <span class="sr-only">(current)</span></NuxtLink
          >
        </li>
        <li class="nav-item">
          <NuxtLink to="/products" class="nav-link"
            >Products <span class="sr-only">(current)</span></NuxtLink
          >
        </li>
        <li class="nav-item">
          <NuxtLink to="/my-items" class="nav-link"
            >My Items <span class="sr-only">(current)</span></NuxtLink
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.padding {
  padding: 1.5rem !important;
  background-color: black;
}

.navbar-dark .navbar-nav .nav-link {
  color: #fff;
}

.navbar-dark .navbar-nav .nuxt-link-exact-active {
  color: red;
}
</style>