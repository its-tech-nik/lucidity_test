<template>
  <div id="app">
    <YourProfile />
  </div>
</template>

<script>

import YourProfile from './components/YourProfile';

export default {
  name: 'App',
  components: {
    YourProfile
  }
}
</script>

<style>
#app {
  font-family: 'Source Sans Pro', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: calc(100vh - 40px);
  width: 100%;
  background-color: #F7F5FC;
  display: flex;
  justify-content: center;
  padding-top: 40px;
}

body {
  margin: 0;
  padding: 0;
}

html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}

@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro');
</style>
