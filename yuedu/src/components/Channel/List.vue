<template>
  <ul class="media-list">
    <li class="media" v-for="(item, index) in list" :key="index">
      <div class="media-left">
        <router-link :to="{name:'article',params:{id:item.id}}">
          <img class="media-object" :src="item.img_url" width="300" height="200">
        </router-link>
      </div>
      <div class="media-body">
        <h4 class="media-heading title"><router-link :to="{name:'article',params:{id:item.id}}">{{item.title}}</router-link></h4>
        <p>
          <span>
            <i class="glyphicon glyphicon-pencil"></i>
            {{item.author}}
          </span>
          <span>
            <i class="glyphicon glyphicon-ice-lolly"></i>
            {{item.podcast}}
          </span>
          <span>
            <i class="glyphicon glyphicon-time"></i>
            {{item.duration}}
          </span>
          <br>
          <span>
            <i class="glyphicon glyphicon-headphones"></i>
            {{item.play_time}}
          </span>
        </p>
       
        <p>{{item.content|slice}}</p>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      list: []
    };
  },
  methods: {
    getData(id = 1) {
      this.axios.get(`/articles/${id}/page/1`).then(res => {
        if (res.data.res_code === 200) this.list = res.data.res.articles;
      });
    }
  },

  filters: {
    slice(text) {
      return text.substring(0, 90) + "...";
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
.media-left > a {
  display: block;
  height: 200px;
  width: 200px;
  overflow: hidden;
border-radius:5px;
box-shadow:1px 1px 10px #ccc;
}

.media-body > p > span {
  margin-right: 20px;
}
.media-list>li{
  background-color: #fff;
  margin-bottom: 30px;
  border-radius:5px;
box-shadow:1px 1px 10px #ccc;
}
.media-body{
  padding: 30px;
  box-sizing: border-box;
}
a{
  color: black;
  text-decoration: none;
}
.title>a:hover{
color:red;
}
.title>a{
  transition: all 0.3s linear;
}
</style>
