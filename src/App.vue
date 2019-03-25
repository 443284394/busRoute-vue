<template>
  <div id="main" class="app-main">
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  *:not(input) {
    -moz-user-select:none;
    -webkit-user-select:none;
    -ms-user-select:none;
    -khtml-user-select:none;
    user-select:none;
  }
  ::-webkit-input-placeholder { color:gray; font-size: 12px; font-family: 'Microsoft YaHei';}
  ::-moz-placeholder { color:#fff; font-size: 12px; font-family: 'Microsoft YaHei';}
  :-ms-input-placeholder { color:#fff; font-size: 12px; font-family: 'Microsoft YaHei';}
  input:-moz-placeholder { color:#fff; font-size: 12px; font-family: 'Microsoft YaHei';}

  a, button {
    outline: none;
  }

  html,body{
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    font-family: 'Microsoft YaHei', serif;
    overflow-x: hidden;
  }

  .app-main{
    width: 100%;
    height: 100%;
  }
</style>
