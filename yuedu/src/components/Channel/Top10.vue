<template>
  <div class="right-box">
    <div>
      <img src="../../assets/yueduwx_2.jpg" alt width="100%">
    </div>
    <div class="list-group">
      <a href="#" class="list-group-item active">
        <h4>|&nbsp;{{top10.type}}频道 TOP10</h4>
      </a>
      <a href="#" class="list-group-item" v-for="(item, index) in top10.articles" :key="index">
        <h6 class="list-group-item-heading">{{index+1}}.{{item.title}}</h6>
        <p class="list-group-item-text">
          <span>文:{{item.author}}</span>
          &nbsp;
          &nbsp;
          <span>主播:{{item.podcast}}</span>
        </p>
      </a>
    </div>
    <div>
      <img src="../../assets/1525.jpg" alt width="100%">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      top10: {}
    };
  },
  methods: {
    getData(id = 1) {
      this.axios
        .get(`/articles/${id}/top10`)
        .then(res => res.data)
        .then(data => {
          if (data.res_code === 200) this.top10 = data.res;
        });
    }
  },

  watch: {
    $route: {
      handler: function(to) {
        this.getData(to.params.id);
      },
      immediate: true
    }
  }
};
</script>

<style scoped>
.right-box > div {
  margin-bottom: 30px;
  border-radius:5px;
box-shadow:1px 1px 10px #ccc;
}

.list-group p {
  font-size: 12px;
}
.list-group p span {
  color: #666;
}
.list-group h4 {
  font-weight: bold;
}

.list-group>a{
    padding: 15px 30px;
}
.list-group-item.active{
    background-color: rgb(250, 96, 68);
    color:#fff;
    border-color: rgb(250, 96, 68);
   
}
</style>
