<template>
  <div class="app-index">
     <div class="bg">
       <router-link to=""><img src="http://127.0.0.1:3000/img/bnet-default-cn.png" class="net"></router-link>
       <div>
       <router-link to="">
         <p>同<strong>数以百万计</strong>的玩家一同参与线上活动，共同感受最</p>
         <p class="word">为精彩的游戏体检</p>
          <span class="word2">了解更多内容</span>
          </router-link>
          </div>
          <div>
        <router-link to="/Register">
          <p class="button">注册战网通行证</p>
        </router-link>
        <router-link to="/Login">
         <p class="login">登录</p>
        </router-link>
         </div>
         <div class="picture">
           <img src="http://127.0.0.1:3000/img/logo_20190323162824.png" alt="">
         </div>
         <div class="text">
           <router-link to=""><span>获取暴雪战网桌面应用</span></router-link>
         </div>
     </div>
     <div class='home'>
        <router-link to='/shop/family?game=ms'>
        <div class="middle1">
          <span class="game-name">《魔兽世界》</span>
        </div>
        </router-link>
        <router-link to='/shop/family?game=ah3'>
          <div class="middle2">
            <span class="game-name">《暗黑破坏神III》</span>
          </div>
        </router-link>
        <router-link to='/shop/family?game=xj2'>
        <div class="middle3">
          <span class="game-name">《星际争霸II》</span>
        </div>
        </router-link>
        <router-link to='/shop/family?game=xj'>
        <div class="middle4">
          <span class="game-name">《星际争霸：重制版》</span>
        </div>
        </router-link>
        <router-link to='/shop/family?game=fb'>
        <div class="middle5">
          <span class="game-name">《风暴英雄》</span>
        </div>
        </router-link>
        <router-link to='/shop/family?game=ls'>
        <div class="middle6">
          <span class="game-name">《炉石传说》</span>
        </div>
        </router-link>
        <router-link to='/shop/family?game=sw'>
        <div class="middle7">
          <span class="game-name">《守望先锋》</span>
        </div>
        </router-link>
     </div>

  </div>

</template>
<script>
export default {
  
}
</script>
<style scoped>
  .home{
    height: 350px;
    background: #040404;
  }
  .bg{
    width: 100%;
    height: 519px;
    background:url(http://127.0.0.1:3000/img/bg-top.jpg);
    background-position: 50% 10% ;
    position: relative;

  }
  .net{
    margin-top:100px;
    margin-left:300px;
  }
  .bg p{
    
   font-size: 30px;
   color:#A2B9C2;
   margin-top:20px;
   margin-left:300px;
  }
  .bg .word2{
    display: inline-block;
    border:1px solid #566B73;
    width: 100px;
    height: 28px;
    font-size: 15px;
    color: #566B73;
    border-radius:5px;
    text-align: center;
    padding-top:2px;
    margin-left: 20px;
  }
  .bg .word2:hover{
    background: #3A4C53;
  }
  .word{
    display: inline-block;
  }
 .bg .button{
   background: #006D9E;
   color: aliceblue;
   border:1px solid #006D9E;
   width: 120px;
   height:30px;
   font-size: 16px;
   border-radius:2px;
    text-align: center;
    padding-top:3px;
    display: inline-block;
    
 }
 .bg .button:hover{
   background: #008DC5;
 }
 .bg .login{
   display: inline-block;
   font-size: 18px;
   color: #00B6FF;
  margin-left: 50px;
 }
 .bg .picture{
   position:absolute;
   left: 70%;
   top:40%;
 }
 .bg .text span{
   color: #09B6D9;
   margin-left: 71%;
 }
 .middle1{
   width: 164px;
    height: 394px;
   background:url(http://127.0.0.1:3000/img/logo_20190323164806.png);

   position: absolute;
   top:470px;
   left: 300px;
   text-align: center;
   padding-top: 12px;
 }
 .middle2{
   width: 164px;
    height: 394px;
   background:url(http://127.0.0.1:3000/img/74ce55eec4765be3fe5520dcbdba587.png);

   position: absolute;
   top:470px;
   left: 500px;
   text-align: center;
   padding-top: 12px;
 }
 .middle3{
   width: 164px;
    height: 394px;
   background:url(http://127.0.0.1:3000/img/logo_20190323170728.png);

   position: absolute;
   top:470px;
   left: 700px;
   text-align: center;
   padding-top: 12px;
 }
 .middle4{
   width: 164px;
    height: 394px;
   background:url(http://127.0.0.1:3000/img/logo_20190323171055.png);

   position: absolute;
   top:470px;
   left: 900px;
   text-align: center;
   padding-top: 12px;
 }
 .middle5{
   width: 164px;
    height: 394px;
   background:url(http://127.0.0.1:3000/img/logo_20190323172741.png);

   position: absolute;
   top:470px;
   left: 1100px;
   text-align: center;
   padding-top: 12px;
 }
 .middle6{
   width: 164px;
    height: 394px;
   background:url(http://127.0.0.1:3000/img/logo_20190323174417.png);

   position: absolute;
   top:470px;
   left: 1300px;
   text-align: center;
   padding-top: 12px;
 }
 .middle7{
   width: 164px;
    height: 394px;
   background:url(http://127.0.0.1:3000/img/logo_20190323174800.png);

   position: absolute;
   top:470px;
   left: 1500px;
   text-align: center;
   padding-top: 12px;
 }
 .game-name{
   font-size: 15px;
   color: #fff;
 }
</style>