<template>
  <div id="app">
    <main-tab-bar></main-tab-bar>
    <router-view/>
  </div>
</template>

<script>
  export default {
    components: {
      MainTabBar: require('components/content/MainTabBar/MainTabBar').default
    }
  }
</script>

<style lang="less">

</style>
