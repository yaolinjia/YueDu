<template>
  <div class="logon1 container">
    <h2>注册</h2>
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">邮箱</label>
        <input type="email" class="form-control" id="exampleInputEmail1" placeholder="邮箱">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">密码</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="密码">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">确认密码</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="确认密码">
      </div>
      <button type="submit" class="submit1">注册</button>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style scope>
.logon1 {
  border-radius: 5px;
  width: 400px;
  height: 400px;
  background-color: #fff;
  padding: 30px;
  margin-top: 100px;
  box-shadow: 5px 5px 8px #ccc;
}

.submit1 {
  display: block;
  margin: 0 auto;
  background: #eb4235;
  border: none;
  width: 100%;
  height: 40px;
  color: #fff;
  font-size: 20px;
}
</style>
