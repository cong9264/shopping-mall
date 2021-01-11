<template>
  <div class="tab-bar-item" @click="toPage(item.path)">
    <i :class="[item.icon, 'iconfont']" :style="{color: activeColor}"></i>
    <h2 class="title" :style="{color: activeColor}">{{item.title}}</h2>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      item: {
        type: Object,
        required: true
      }
    },
    computed: {
      routeActive () {
        return this.$router.currentRoute.fullPath === this.item.path;
      },
      activeColor () {
        return this.routeActive && 'pink';
      }
    },
    methods: {
      toPage (path) {
        this.$router.push(path).catch(err => err);
      }
    },
  }
</script>

<style lang="less" scoped>
  .tab-bar-item {
    height: 39px;
    padding: 5px 0;

    .iconfont {
      font-size: 24px;
    }

    .title {
      font-size: 12px;
      margin: 0;
    }
  }
</style>
