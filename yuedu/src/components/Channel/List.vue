<template>
  <div>
    <ul class="media-list">
      <li class="media" v-for="(item, index) in list" :key="index">
        <div class="media-left">
          <router-link :to="{name:'article',params:{id:item.id}}">
            <img class="media-object" :src="item.img_url" width="300" height="200">
          </router-link>
        </div>
        <div class="media-body">
          <h4 class="media-heading title">
            <router-link :to="{name:'article',params:{id:item.id}}">{{item.title}}</router-link>
          </h4>
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
          <p>{{item.content | toSlice}}</p>
        </div>
      </li>
    </ul>
    <nav aria-label="Page navigation" class="page">
      <ul class="pagination">
        <li v-show="!(curr==1)" @click.prevent="getPage(curr-1)">
          <a href="#" aria-label="Previous">
            <span aria-hidden="true">上一页</span>
          </a>
        </li>
        <li v-for="num in 8" :key="num" @click.prevent="getPage(num)" :class="{act:num==curr}">
          <a href="#">{{num}}</a>
        </li>
        <li @click.prevent="getPage(curr+1)">
          <a href="#" aria-label="Next">
            <span aria-hidden="true">下一页</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      curr:1
    };
  },
  methods: {
    getData(msg) {
      this.axios.get(`/articles/${msg.id}/page/${msg.num}`).then(res => {
        if (res.data.res_code === 200) this.list = res.data.res.articles;
      });
    },
    getPage(index){
      this.curr=index;
      console.log(this.curr);
      this.getData({id:1,num:index})
    }
  },

  filters: {
    toSlice(text) {
      return text.substring(0, 90) + "...";
    }
  },
  watch: {
    $route: {
      handler: function(to) {
        this.getData({id:to.params.id,num:1});
        this.curr=1;
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
  border-radius: 5px;
  box-shadow: 5px 5px 8px #ccc;

}

.media-body > p > span {
  margin-right: 20px;
}
.media-list > li {
  background-color: #fff;
  margin-bottom: 30px;
  border-radius: 5px;
  box-shadow: 5px 5px 8px #ccc;

}
.media-body {
  padding: 30px;
  box-sizing: border-box;
}
a {
  color: black;
  text-decoration: none;
}
.title > a:hover {
  color: red;
}
.title > a {
  transition: all 0.3s linear;
}
.page {
  text-align: center;
}
.page li a{
  color: #666;
  border:none;
  background: rgb(245,245,245);
  font-size: 12px;
    transition: all 0.3s linear;
}
.page li a:hover{
  color:red;
}
.page  .act a{
  color:red;
}
</style>
