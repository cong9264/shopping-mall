<template>
  <tab-bar :tabBarList="tabBarList"></tab-bar>
</template>

<script>
  import TabBar from "../../common/TabBar/TabBar";
  export default {
    name: "MainTabBar",
    components: {
      TabBar
    },
    computed: {
      tabBarList () {
        let temp =[];
        let routes = this.$router.options.routes;
        routes.forEach(item => {
          temp.push({
            path: item.path,
            title: item.meta.title,
            icon: item.meta.icon,
            active: false
          });
        });
        temp[0].active = true;
        return temp;
      }
    }
  }
</script>

<style scoped>

</style>
