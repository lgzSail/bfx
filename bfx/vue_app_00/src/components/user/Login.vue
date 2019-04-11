<template>
  <div class="app-login app-reg">
    <div class="top_logo">
      <img src="../../img/blizzard-default.1C4OH.png" alt="">
    </div>
    <div class="login-container">
      <div class="login-box">
        <input type="email" name="uemail" placeholder="电子邮箱" v-model="uemail">
      </div>
      <div class="login-box">
        <input type="password" name="upwd" placeholder="密码" v-model="upwd">
      </div>
      <div class="login-box" @click="btnLogin">
        <router-link to="">登录</router-link>>
      </div>
      <div class="btn-reg">
        <router-link to="/Register">免费创建暴雪游戏通行证</router-link>
      </div>
      <div class="btn-reg">
        <router-link to="">无法登陆</router-link>
      </div>
    </div>
    <div class="footer">
        <div class="footer-copy">
          &copy;2019暴雪娱乐有限公司版权所有，
        </div>
        <div class="footer-copy">
          由上海网之易网络科技发展有限公司运营。
        </div>
        <div class="footer-copy">
          <span>隐私</span>
          <span>|</span>
          <span>法律条款</span>
        </div>
        <div class="footer-copy">
          <span>沪网文〔2017〕9633-727号</span>
          <span>|</span>
          <span>增值电信业务经营许可证编号：沪B2－20080012</span>
        </div>
        <div class="footer-copy">
          <span>互联网违法和不良信息举报电话：0571-28090163</span>
          <span>|</span>
          <span>沪公网安备：31011502002167</span>
        </div>
        <div class="footer-copy">
          <span>适龄提示：适合13岁及以上使用 家长监护工程></span>
          <span>|</span>
          <span>上海市网络游戏行业自律公约</span>
        </div>
        <div class="footer-copy">
          <span>上海市张江高科技园区碧波路690号5号楼301-A</span>
          <span>|</span>
          <span>客服电话：0571-28090163</span>
        </div>
        <div class="footer-img">
          <a href="javascript:;">
            <img src="../../img/icon-cn-cyberpolice-8030c963aa438de3.gif" alt="">
          </a>
          <a href="javascript:;">
            <img src="../../img/icon-cn-zx100-1b6b7d14bf4a236f.gif" alt="">
          </a>
          <a href="javascript:;">
            <img src="../../img/icon-cn-sgs-668b0f6a4fb9c4bd.gif" alt="">
          </a>
          <a href="javascript:;">
            <img src="../../img/icon-cn-shjbzx-ddcf1546d4122b14.gif" alt="">
          </a>
          <a href="javascript:;">
            <img src="../../img/icon-cn-culture-logo-1eefdfed9b7decc1.png" alt="">
          </a>
        </div>
        <div class="footer-copy">
          <span>健康游戏忠告：抵制不良游戏 拒绝盗版游戏 注意自我保护 谨防受骗上当</span>
        </div>
        <div class="footer-copy">
          <span>适度游戏益脑 沉迷游戏伤身 合理安排时间 享受健康生活</span>
        </div>
      </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        uemail:"",
        upwd:""
      }
    },
    created() {
      
    },
    methods: {
      btnLogin(){
        var uemail=this.uemail;
        var upwd=this.upwd;
        var regEmail=/^([a-zA-Z0-9._-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
        if(!regEmail.test(uemail)){
          this.$Message.error('请输入正确的邮箱格式');
        }
        var regPwd=/^[a-zA-Z0-9]{8,16}$/;  
        if(!regPwd.test(upwd)){
          this.$Message.error('密码格式有误');
        }
        var postData=this.qs.stringify({
          uemail:uemail,
          upwd:upwd
        });
        var url="http://127.0.0.1:3000/login";
        this.axios.post(url,postData).then(result=>{
          if(result.data.length==1){
            this.$Message.success('登录成功');
            sessionStorage['user'] = result.data[0].user;
            sessionStorage['uid'] = result.data[0].uid;
            if(sessionStorage['href']==1){
              sessionStorage.removeItem('href')
              this.$router.push('/Home')
            }else{
              history.back()
            }
          }else{
            this.$Message.error('登录失败');
          }
        })
      }
    },
  }
</script>
<style>
  .app-login{
    background: url("../../img/blizzard-background-1280.4JLnG.jpg") no-repeat;
    background-size:cover; 
    padding: 0px;
    width: 1920px;
    height: 1080px;
  }
  .app-reg .login-container{
    width: 360px;
    margin: 0 auto;
  }
  .app-reg .login-container .login-box{
    width: 360px;
    height: 40px;
    margin: 20px 0;
  }
  .app-reg .login-container .login-box input{
    background: #272e3b;
    color: #fff;
    border-radius: 0;
    border: 1px solid rgba(255,255,255,0.3);
    border-radius:2px; 
  }
  .app-reg .login-container .login-box input:hover{
    border: 1px solid #fff;
  }
  .app-reg .login-container .login-box input:focus{
    border: 0px solid #03a9f4;
    box-shadow: 0 0 1px 1px #03a9f4;
  }
  .app-reg .login-container .login-box a{
    text-align: center;
    display: inline-block;
    width: 360px;
    line-height: 40px;
    background: #0e86ca;
    color: #fff;
    font-size: 16px;
  }
  .app-reg .login-container .login-box a:hover{
    background: #00AEFF;
  }
  .app-reg .login-container .btn-reg{
    width: 360px;
    text-align: center;
    font-size: 15px;
    margin:20px 0;
  }
  .app-reg .login-container .btn-reg a:hover{
    color: #fff;
  }
  .app-login .footer{
    margin-top: 200px;
  }
</style>
