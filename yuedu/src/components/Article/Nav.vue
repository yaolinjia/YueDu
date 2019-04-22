<template>
  <nav class="navbar navbar-default">
    <div class="container">
      <div class="navbar-header">
        <!-- <button
          type="button"
          class="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target="#bs-example-navbar-collapse-1"
          aria-expanded="false"
        >
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button> -->
        <a class="navbar-brand" href="#">
          <!-- <img alt="Brand" src="../../assets/logo.png"> -->
          悦读 FM
          </a>
      </div>

      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
    
            <router-link v-for="(item, index) in items" :key="index" tag="li" :to="{name:'channel',params:{id:item.id}}">
                <a>{{item.type}}</a>
            </router-link>
     
        </ul>
        <!-- <form class="navbar-form navbar-left">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Search">
          </div>
          <button type="submit" class="btn btn-default">Submit</button>
        </form>-->
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      items: []
    };
  },
  created() {
    this.axios.get("/types").then(val => {
      this.items = val.data.res;
    });
  }
};
</script>

<style>
</style>
