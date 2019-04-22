<template>
  <div>
    <AtricleNav></AtricleNav>
    <router-view></router-view>
  </div>
</template>

<script>
import AtricleNav from "./Nav";
export default {
  components: {
    AtricleNav
  }
};
</script>

<style>
</style>
