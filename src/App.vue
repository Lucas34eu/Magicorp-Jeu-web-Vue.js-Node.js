<template>

  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/product">Pokedex</router-link> |
    <router-link to="/contact">Partir à la pêche</router-link> |
    <router-link to="/about">Contact</router-link>
  </nav>
  <router-view/>
  <footer>
  <p>Site tuto Vue.js @copiright lucas </p>
  </footer>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  background-color: #2c3e50;

  a {
    font-weight: bold;
    color: white;

    &.router-link-exact-active {
      color: rgb(255, 62, 62);
    }
  }
}

footer{
  position:relative;
  background-color: #2c3e50;
  color: white;
  height: 100px;
  width: 99%;
  bottom: 0;
}

</style>
