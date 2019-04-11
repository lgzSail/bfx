<template>
  <div class="header">
    <div class="app-header">
      <div class="container">
        <div class="bg-img">
          <img src="../../img/bg.png">
        </div>
        <div class="nav">
          <div class="float-left">
            <a href="javascript:;" @click="show">
              游戏
              <span class="next">∨</span>
            </a>
            <router-link to>商城</router-link>
            <router-link to>新闻</router-link>
            <router-link to>
              电子竞技
              <span>∨</span>
            </router-link>
          </div>

          <div class="float-right">
            <router-link to>支持</router-link>
            <router-link to>
              我的账户
              <span>∨</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="game-list">
      <div class="show-list">
        <img src="http://127.0.0.1:3000/img/card-diablo1.jpg" alt>
        <img src="http://127.0.0.1:3000/img/card-diablo2.jpg" alt>
        <img src="http://127.0.0.1:3000/img/card-diablo3.jpg" alt>
        <img src="http://127.0.0.1:3000/img/card-diablo4.jpg" alt>
        <img src="http://127.0.0.1:3000/img/card-diablo5.jpg" alt>
        <img src="http://127.0.0.1:3000/img/card-diablo6.jpg" alt>
        <img src="http://127.0.0.1:3000/img/card-diablo7.jpg" alt>
        <img src="http://127.0.0.1:3000/img/card-diablo8.jpg" alt>
        <img src="http://127.0.0.1:3000/img/card-diablo9.jpg" alt>
      </div>
      <div class="more">

      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    show() {
      $(".game-list").toggle();
    }
  }
};
</script>
<style>
.app-container {
  padding: 0;
}
.header {
  position: relative;
}
.app-header {
  width: 100%;
  background: rgba(0, 0, 0, 0.9);
  border-bottom: 2px solid #555;
  height: 60px;
}
.app-header .container {
  width: 1500px;
  margin: 0 auto;
}
.app-header .bg-img {
  display: inline-block;
  margin-left: 50px;
  margin-top: 10px;
  margin-right: 50px;
  height: 60px;
}

.app-header .nav {
  display: inline-block;
  height: 60px;
  vertical-align: middle;
  margin-top: 10px;
  width: 80%;
}

.app-header .nav a {
  display: inline-block;
  font-size: 19px;
  color: #666;
  margin: 0 10px;
}

.app-header .nav a:hover {
  color: #ddd;
}

.app-header .nav .float-left {
  display: inline-block;
}

.app-header .nav .float-right {
  float: right;
}

.game-list {
  background: rgba(22, 27, 35, 0.3);
  width: 100%;
  height: 250px;
  display: none;
}
.game-list .show-list {
  width: 1500px;
  margin: 0 auto;
  cursor: pointer;
}
.game-list img {
  width: 150px;
  height: 160px;
  margin: 45px 8px;
}
.game-list .more{
  
}
</style>