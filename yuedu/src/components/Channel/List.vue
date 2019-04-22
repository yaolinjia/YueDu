<template>
  <ul class="media-list">
    <li class="media" v-for="(item, index) in list" :key="index">
      <div class="media-left">
        <a href="#">
          <img class="media-object" :src="item.img_url" width="300" height="200">
        </a>
      </div>
      <div class="media-body">
        <h4 class="media-heading">{{item.title}}</h4>
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
        <p>
            {{item.content|slice}}
        </p>
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
    getdata(id){
    const type_id = id;
    this.axios.get(`/articles/${type_id}/page/1`).then(res => {
      if (res.data.res_code === 200) this.list = res.data.res.articles;
      console.log(res.data);
    });
    }
  },
  created() {
    this.getdata(1)
  },
  filters:{
      slice(text){
          return text.substring(0,90)+"..."
      }
  },
  watch: {
    '$route'(to,from){
      console.log(to.params.id);
      
      this.getdata(to.params.id)
    }
  },
};
</script>

<style scoped>
.media-left > a {
  display: block;
  height: 200px;
  width: 200px;
  overflow: hidden;
}
.media-body>p>span{
margin-right: 20px;
}
</style>
