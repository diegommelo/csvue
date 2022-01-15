<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style lang="scss">
  body {
    background-color: #2d3844;
  }
  p {
    padding: 0;
    margin: 0;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #87a3bf;
    margin-top: 20px;
  }
  @media screen and (min-width: 768px) {
    #app {
      margin-top: 60px;
    }
  }
  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
  .player {
    flex: 1;
    font-weight: bold;
    font-size: 1.2em;
    transition: transform .2s;
  }  
  .player:hover {
    cursor: pointer;
    transform: scale(1.1);
  }  
</style>
