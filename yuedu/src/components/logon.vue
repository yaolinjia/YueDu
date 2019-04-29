<template>
  <div class="logon container">
      <h2>登录</h2>
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">用户名</label>
        <input type="email" class="form-control" id="exampleInputEmail1" placeholder="用户名/邮箱/手机号">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">密码</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="密码"
        >
      </div>

      <button type="submit" class="submit">登录</button>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style scope>
.logon {
    border-radius: 5px;
  width: 400px;
height: 400px;
background-color: #fff;
padding: 30px;
margin-top:100px;
  box-shadow: 5px 5px 8px #ccc;

}
.submit{
    display: block;
    margin: 0 auto;
    background: #eb4235;
border:none;
width: 100%;
margin-top: 50px;
height: 40px;
color: #fff;
font-size: 20px;

}
</style>
