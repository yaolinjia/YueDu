<template>
  <nav class="navbar navbar-default">
    <div class="container">
      <div class="navbar-header">
        <a class="navbar-brand" href="#">
          <!-- <img alt="Brand" src="../../assets/logo.png"> -->
          悦读 FM
        </a>
      </div>

      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <router-link
            v-for="(item, index) in items"
            :key="index"
            tag="li"
            :to="{name:'channel',params:{id:item.id}}"
          >
            <a>{{item.type}}</a>
          </router-link>
        </ul>
      </div>
   
        <div class="input-group input-group-sm search" style="maring-left:auto">
          <input type="text" class="form-control">
          <span class="input-group-btn">
            <button class="btn btn-default" type="button">
              <span class="glyphicon glyphicon-search"></span>
            </button>
          </span>
        </div>
        <span class="liner"></span>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#">登录</a></li>
        <li><a href="#">注册</a></li>
      </ul>
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

<style scoped>
nav {
  background: #fff !important;
}
.liner{
  display: block;
  height: 30px;
  width: 1px;
  border: 1px dashed #ccc;
  margin-left: 15px;
}
.container {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.active > a {
  background-color: #fff !important;
  color: red !important;
}
.search{
  margin-left:auto;
}

</style>
