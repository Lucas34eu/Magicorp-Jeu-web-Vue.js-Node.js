<template>

  <nav id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/product">Pokedex</router-link> |
    <router-link to="/peche">Partir à la pêche</router-link> |
    <router-link to="/Inventaire">Inventaire</router-link> |
    <router-link to="/Apropos">A propos</router-link> |
    
  </nav>
  <router-view/>
  <footer id="footer">
  <p>Site tuto Vue.js @copiright lucas </p>
  </footer>
</template>

<style lang="scss">
body{
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 0px;
  margin-top: 0px;
  width: 100%;
  height: 100%;
  z-index: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  
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
  margin-top: 20px;
  position:fixed;
  background-color: #2c3e50;
  color: white;
  height: 50px;
  width: 100%;
  bottom: 0;
}


</style>
