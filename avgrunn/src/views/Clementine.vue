<template>
  <div id="clementine-homepage">

      <div id="clem-profile">
          <div id="clem-profile-pic"></div>

          <router-link class="routerlink-profile" to="/Clementine/Music"><p class="router-p">Music</p></router-link>
          <router-link class="routerlink-profile" to="/Clementine/Poems"><p class="router-p">Poems</p></router-link>
          <router-link class="routerlink-profile" to="/Clementine/Writings"><p class="router-p">Writings</p></router-link>
      </div>

      <div id="clem-content">
          <p class="profile-p">/Clementine/Entries</p>
          
          <div id="clem-entries">
              <entry-component/>
              <entry-component/>
          </div>

      </div>

  </div>
</template>

<script>

import EntryComponent from '../components/EntryComponent.vue'


export default {
  name: 'clementineHomepage',
  components: {
      EntryComponent
  },
  data() {
    return {
    }
  }
}
</script>

<style>

/* I had all of this in an old project of mine but I
do not have the slightest idea what most of it does :) */
#clementine-homepage {
    background: url('../assets/Clem-background.jpg');
    /* Image retrieved from https://unsplash.com/photos/0wNzjEUz3IQ */
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

#clem-profile {
    background: rgba(255,255,255,0.6);
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
    width: 20em;
    border-right: 0.15em solid #586A6A;
}

#clem-profile-pic {
    background: url('../assets/Clem-photo.png');
    height: 15em;
    width: 80%;
    margin-left: 10%;
    margin-top: 10%;
    margin-bottom: 10%;
    background-size: contain;
    border: 0.15em solid #586A6A;
}

#clem-content {
    position: absolute;
    left: 20.1em;
    right: 0%;
    top: 0%;
    bottom:0%;

    background: url('../assets/Clem-background.jpg');
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-position: center center;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 100vh;
    height: 100%;
}

#clem-entries {
    position: absolute;
    left: 4em;
    right: 4em;
    top: 8em;
    bottom:4em;

    background: #fff;
    overflow-y: hidden;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-position: center center;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    border-top: 0.15em solid #586A6A;
    overflow-y: scroll;
}

.router-p {
    margin-left: 1.75em;
    font-size: 1.5em;
    padding-bottom: 0.05em;
}


.routerlink-profile {
    color: #000;
    text-decoration: none;
}

.routerlink-profile:hover {
    color: #b0b6b0;
}

.profile-p {
    margin-left: 4em;
    font-size: 1.2em;
    padding-top: 4em;
    color: #000;
}

</style>