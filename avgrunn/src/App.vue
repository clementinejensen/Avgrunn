<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>

@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,700&display=swap');

body {
  overflow: hidden;
  margin: 0;
}

/* I had all of this in an old project of mine but I
do not have the slightest idea what most of it does :) */
#app {
  font-family: 'Playfair Display', sans-serif;
  overflow-y: hidden;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  background-position: center center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  height:100%;
  padding: 0;
  margin: 0;
}

#nav {
  background: transparent;
  opacity: 0.8;
  margin: 0;
  margin-bottom: 2em;
  padding: 1em;
  font-size: 20px;
}

.routerlink {
  color: #fff;
  text-decoration: none;
}

.routerlink:hover {
  color: #000;
}
</style>

