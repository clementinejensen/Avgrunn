<template>
  <div id="front-page">
    <div id="enter-serenity"> 
      <router-link class="routerlink" to="/ChooseYourSide"><h1> enter serenity </h1></router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'frontpage',
  data() {
    return {
    }
  }
}
</script>

<style>
/* I had all of this in an old project of mine but I
do not have the slightest idea what most of it does :) */
#front-page{
    background: url('../assets/foggy-forest.jpg');
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

#enter-serenity {
  position: fixed;
  top: 45%;
  left: 42%;
}

</style>
