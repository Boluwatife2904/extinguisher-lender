<template>
  <nav class="app-navbar">
    <div class="logo">
      <h4>FireExt</h4>
    </div>
    <ul id="nav" class="navigations-links" :class="{ show: showNavbar }">
      <li class="navigation-item">
        <NuxtLink to="/" class="nav-link"
          >Home <span class="sr-only">(current)</span></NuxtLink
        >
      </li>
      <li class="navigation-item">
        <NuxtLink to="/products" class="nav-link"
          >Products <span class="sr-only">(current)</span></NuxtLink
        >
      </li>
      <li class="navigation-item">
        <NuxtLink to="/my-items" class="nav-link"
          >My Items <span class="sr-only">(current)</span></NuxtLink
        >
      </li>
    </ul>
    <button class="hamburger" @click="showNavbar = !showNavbar">
      <img src="~/assets/images/icon-hamburger.svg" alt="hamburger" />
    </button>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      showNavbar: false,
    }
  }
};
</script>

<style scoped>
.app-navbar {
  background: #e7512b;
  margin-bottom: 5px;
  padding: 15px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo h4 {
  margin-bottom: 0;
  color: #fff;
}

ul {
  list-style: none;
  margin-bottom: 0;
}

ul li {
  display: inline-block;
  margin-right: 50px;
}

ul li:last-child {
  margin-right: 0;
}

ul li a {
  text-decoration: none;
  font-size: 17px;
  font-weight: 500;
  color: #fff;
}

button {
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
  display: block;
}

@media screen and (min-width: 750px) {
  button {
    display: none;
  }
}

@media screen and (max-width: 768px) {
  .app-navbar {
    padding: 20px 25px;
  }
}

@media screen and (max-width: 576px) {
  .app-navbar {
    margin-bottom: 10px;
  }
}

@media screen and (max-width: 750px) {
  ul {
    position: fixed;
    background-color: #e7512b;
    padding: 40px 10px;
    top: 135px;
    left: 7%;
    width: 320px;
    width: 86%;
    transition: all 0.3s linear;
    transform: translateX(120%);
    z-index: 10;
  }

  ul::after {
    position: absolute;
    content: "";
    border: 30px solid transparent;
    border-right: 30px solid #e7512b;
    top: -30px;
    right: 0;
  }

  ul.show {
    transform: translateX(0);
  }

  ul li {
    display: block;
    text-align: center;
    margin-bottom: 40px;
    margin-right: 0;
  }

  ul li:last-child {
    margin-bottom: 0;
  }

  ul li a {
    display: inline-block;
    color: #fff;
    font-size: 18px;
    font-weight: 600;
  }
}
</style>