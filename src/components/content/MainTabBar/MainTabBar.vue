<template>
  <tab-bar :tabBarList="tabBarList"></tab-bar>
</template>

<script>
  export default {
    name: "MainTabBar",
    components: {
      TabBar: require('components/common/TabBar/TabBar').default
    },
    computed: {
      tabBarList () {
        let temp =[];
        let routes = this.$router.options.routes;
        routes.forEach(item => {
          temp.push({
            path: item.path,
            title: item.meta.title,
            icon: item.meta.icon
          });
        });
        return temp;
      }
    }
  }
</script>

<style scoped>

</style>
