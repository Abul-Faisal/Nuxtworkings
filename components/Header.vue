<template>
  <div class="header">
    <ul class="navbar">
      <li>
        <nuxt-link to="/"> Home</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/admin">Admin</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/about">About</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/post">posts</nuxt-link>
      </li>
    </ul>
  </div>
</template>
<style scoped>
.navbar {
  padding: 20px;
  margin: 0%;
  list-style: none;
  justify-content: space-evenly;
  align-items: center;
  display: flex;
}
div {
  background-color: burlywood;
  width: 100%;
  height: 80px;
  justify-content: space-evenly;
  align-content: center;
}

.navbar a {
  font-size: x-large;
  justify-content: space-around;
  text-decoration: none;
  color: black;
}
.navbar a:hover,
.navbar a:active {
  color: wheat;
}
</style>
