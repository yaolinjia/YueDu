<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-7 left">
        <div>
          <p class="title">{{content.title}}</p>
          <p>
            <span>
              <i class="glyphicon glyphicon-pencil"></i>
              {{content.author}}
            </span>
            <span>
              <i class="glyphicon glyphicon-ice-lolly"></i>
              {{content.podcast}}
            </span>
            <span>
              <i class="glyphicon glyphicon-time"></i>
              {{content.duration}}
            </span>
            <span class="pull-right">播放{{content.play_time}}次</span>
          </p>
          <img :src="content.img_url" alt width="100%">
          <audio :src="content.mp3_url" controls style="width:100%"></audio>
        </div>
        <div>
          <p>{{content.content}}</p>
        </div>
        <div class="labels">
          <span>标签: {{content.labels}}</span>
        </div>
      </div>
      <div class="col-sm-5 right">
        <div>
          打赏
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
        </div>
        <div>
          其他节目
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
        </div>
        <div>
          其他悦读
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: {}
    };
  },
  created() {
    const id = this.$route.params.id;
    this.axios.get(`/article/${id}`).then(data => {
      console.log(data);
      if (data.data.res_code == 200) {
        this.content = data.data.res;
        console.log(this.content);
      }
    });
  }
};
</script>

<style scoped>
.container{
  color:#666;

}
.left>div,.right>div{
  width: 100%;
  margin-bottom: 30px;
background-color: #fff;
padding:30px;
box-sizing:border-box;
border-radius:5px;
box-shadow:1px 1px 10px #ccc;
}
.title{
  padding: 10px 0;
  font-size: 30px;
  font-weight: bold;
box-sizing: border-box;
  
}
.labels{
  padding:5px !important;
}
</style>
