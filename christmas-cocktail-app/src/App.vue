<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">test</router-link>
  </nav>
  <router-view/>
</template>

<style lang="scss">
body {
  background: #eeeeee;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 50px;
}

nav {
  padding: 30px;
  display: none;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
h3, h4 {
  color: #000;
  font-size: 30px;
}
p {
  font-size: 16px;
}
button {
  margin-top: 25px;
  border: none;
  background: #c62118;
  color: #fff;
  font-size: 22px;
  border-radius: 16px;
  padding: 15px;
  width: 100%;
  transition: ease .3s;
  &:hover {
    background: #a81613;
  }
}
.wrapper {
    max-width: 1230px;
    width: 92%;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 90vh;
}
</style>
