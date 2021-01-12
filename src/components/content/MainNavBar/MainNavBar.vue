<template>
  <nav-bar>
    <template v-slot:left></template>
  </nav-bar>
</template>

<script>
  import NavBar from "components/common/NavBar/NavBar";

  export default {
    name: "MainNavBar",
    components: {
      NavBar
    }
  }
</script>

<style scoped>

</style>
