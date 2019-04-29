<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-7 left">
        <div>
          <p class="title">{{content.title}}</p>
          <p class="info">
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
        <div class="con">
          <p :class="{hiden:!show}">{{content.content}}</p>
          <div :class="['clearfix',{shadow:!show}]">
            <span v-if="!show" class="pull-right btns" @click="show=!show">
              展开全文
              <span class="glyphicon glyphicon-chevron-down"></span>
            </span>
            <span v-if="show" class="pull-right btns" @click="show=!show">
              收起
              <span class="glyphicon glyphicon-chevron-up"></span>
            </span>
          </div>
        </div>
        <div class="labels">
          <span>标签: {{content.labels}}</span>
        </div>
      </div>
      <div class="col-sm-5 right">
        <div style="height:200px">
          打赏
         
        </div>
        <div style="height:300px">
          其他节目

        </div>
        <div style="height:300px">
          其他悦读

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: {},
      show: false
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
.container {
  color: #666;
}
.left > div,
.right > div {
  width: 100%;
  margin-bottom: 30px;
  background-color: #fff;
  padding: 30px;
  box-sizing: border-box;
  border-radius: 5px;
  box-shadow: 5px 5px 8px #ccc;


}
.title {
  padding: 10px 0;
  font-size: 28px;
  font-weight: bold;
  box-sizing: border-box;
}
.labels {
  padding: 5px 30px !important;
}
.hiden {
  height: 200px;
  overflow: hidden;
}
.shadow {
  box-shadow: 0px -15px 20px 10px #fff;

  z-index: 999;
  position: relative;
}
.con {
  padding-bottom: 20px !important;
  line-height: 30px;
}

.btns {
  cursor: pointer;
}
.btns:hover {
  color: red;
}
.info>span{
  margin-right:20px;
}
.info>span:last-child{
   margin-right:0;
}
</style>
