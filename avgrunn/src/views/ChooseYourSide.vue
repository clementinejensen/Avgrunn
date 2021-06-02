<template>
  <div id="choose-your-side">
      
      <div id="will-side">
            <router-link class="routerlink" to="/Will">
                <h1 id="will">Will</h1>
            </router-link>
      </div>

      <div id="clem-side">
            <router-link class="routerlink" to="/Clementine">
              <h1 id="clementine">Clementine</h1>
            </router-link>
      </div>

  </div>
</template>

<script>

export default {
  name: 'chooseYourSide',
  data() {
    return {
    }
  }
}
</script>

<style>
/* I had all of this in an old project of mine but I
do not have the slightest idea what most of it does :) */
#choose-your-side{
    overflow-y: hidden;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
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

#will-side {
    float: left;
    width: 50%;
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
    background: url('../assets/will-forest.jpg');
}

#clem-side {
    float: right;
    width: 50%;
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
    background: url('../assets/clem-forest.jpg');
}

#will {
  position: fixed;
  float: left;
  width: 50%;
  top: 50%;
  left: 0%;
}

#clementine {
  position: fixed;
  float: right;
  width: 50%;
  top: 50%;
  left: 50%;
}


</style>