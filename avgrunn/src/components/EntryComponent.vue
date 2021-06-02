<template>
    <div id="entry">
        <div class="entry-picture"></div>
        <p class="entry-p">

            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

        </p>
    </div>
</template>

<script>

export default {
  name: 'entry-component',
  data() {
    return {
    }
  }
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Lora&display=swap');

#entry {
    background: transparent;
    margin: 3%;
    padding: 3%;
    word-wrap: break-word;
    border-bottom: 0.15em solid #586A6A;
}

.entry-picture {
    padding: 3%;
    width: 95%;
    height: 10em;
    background: url(../assets/frog-photo.png);
    background-size: contain;
}

.entry-p {
    font-family: 'Lora', sans-serif;
    font-size: 1.5em;
    color: #000;
}

</style>
