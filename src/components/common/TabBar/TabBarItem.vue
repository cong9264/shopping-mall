<template>
  <div class="tab-bar-item" @click="toPage(item)">
    <i :class="[item.icon, 'iconfont']"></i>
    <h2 class="title">{{item.title}}</h2>
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
    data () {
      return {
      }
    },
    computed: {
      // routeActive () {
      //   // return this.$router.currentRoute.fullPath === this.item.path;
      //   // return this.$router.currentRoute.fullPath.indexOf(this.item.path) !== -1;
      //   // return this.$router.currentRoute.fullPath.indexOf(this.$route.path) !== -1;
      //   return this.pa
      // },
      activeColor () {
        return this.item.active && 'pink';
      }
    },
    methods: {
      toPage (item) {
        this.$router.push(item.path).catch(err => err);
      }
    }
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
