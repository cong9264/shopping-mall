<template>
  <div class="tab-bar">
    <tab-bar-item v-for="(item, index) in tabBarList" :key="index" :item="item">
    </tab-bar-item>
  </div>
</template>

<script>
  export default {
    name: "TabBar.vue",
    components: {
      TabBarItem: require('./TabBarItem').default
    },
    props: {
      tabBarList: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style lang="less" scoped>
  .tab-bar {
    display: flex;
    text-align: center;
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    box-shadow: 0 1px 1px 2px #ddd;

    .tab-bar-item {
      flex: 1;
    }
  }
</style>
