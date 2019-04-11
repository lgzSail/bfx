<template>
  <div class="app-reg">
    <div class="top_logo">
      <img src="../../img/blizzard-default.1C4OH.png" alt="">
    </div>
    <div class="wy">
      <p>创建账号</p>
      <a href="javascript:;">网易</a>
      <div>
        <span>或</span>
      </div>
      <p>创建暴雪游戏通行证，开启您在暴雪游戏中的旅程。</p>
    </div>
    <div class="form-container">
      <form action="#">
        <div class="form-box">
          <input type="text" name="id" placeholder="身份证号码" @blur="closeable" v-model="kwords">
        </div>
        <div class="form-box">
          <input type="text" name="uname" placeholder="姓名" @blur="regname" v-model="kname">
        </div>
        <div class="form-box">
          <input type="email" name="myemail" placeholder="电子邮箱" @blur="regemail" v-model="kemail">
        </div>
        <div class="form-box">
          <input type="text" name="user" placeholder="用户名" @blur="reguser" v-model="kpuser">
        </div>
        <div class="form-box">
          <input type="password" name="upwd" placeholder="密码" @blur="regpwd" v-model="kpwd">
        </div>
        <div class="form-phone">
          <div>
            <span>+86</span>
            <span></span>
          </div>
          <div>
            <input type="text" name="uphone" placeholder="手机号码" @blur="regphone" v-model="kphone">
          </div>
        </div>
        <div class="form-box">
          <div class="msg">
            <input type="number" name="unum" placeholder="验证码" v-model='yzm1'>
          </div>
          <div class="code" @click='code'>
            <span>获取验证码</span>
          </div>
        </div>
        <div class="form-agree">
          <div class="check">
            <input type="checkbox" id="agree" :checked="all" v-model="all">
          </div>
          <div class="term">
            <span>我已阅读并同意</span>
            <a href="javascript:;">隐私策略</a>
          </div>
        </div>
        <div class="form-box"  @click="addUser">
          <router-link to="">免费注册暴雪游戏通行证</router-link>
        </div>
        <div class="form-box">
          <router-link to="/Login">已经有通行证了？</router-link>
        </div>
        <div class="form-box">
          <span>点击免费注册暴雪游戏通行证即表示我同意并接受</span>
          <a href="javascript:;">暴雪战网最终游戏许可协议</a>
        </div>
      </form>
    </div>
    <div class="footer">
      <div class="footer-box">
        <a href="javascript:;">
          <img src="../../img/blizzard-default.1C4OH.png">
        </a>
      </div>
      <div class="footer-href">
        <a href="javascript:;">工作机会</a>
        <a href="javascript:;">关于</a>
        <a href="javascript:;">支持</a>
        <a href="javascript:;">媒体中心</a>
        <a href="javascript:;">API</a>
        <a href="javascript:;">安全中心</a>
      </div>
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

  export default{
    data(){
      return{
        yzm1:'',
        yzm:'',
        kwords:"",
        kname:"",
        kemail:"",
        kpwd:"",
        kphone:"",
        kpuser:'',
        all:false,//选中状态才能注册
        co:''
      }
    },
    created() {
      sessionStorage['href']=1
    },
    methods: {
      code(){
        if(!this.co){
          this.co=setTimeout(()=>{
            var url="http://127.0.0.1:3000/code";
            var postData=this.qs.stringify({
              kphone:this.kphone,
            });
            this.axios.post(url,postData).then(result=>{
              this.yzm=result.data
            })   
          },10)
        }

      },
      closeable(){
        var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
        if(!reg.test(this.kwords)){
          this.$Message.error('请输入正确的身份证号码');
        }
      },
      reguser(){
        var regName =/^[a-zA-Z0-9._-]{3,12}$/;
        if(!regName.test(this.kpuser)){
          this.$Message.error('请输入正确的用户名');
        }
      },
      regname(){
        var regName =/^[\u4e00-\u9fa5]{2,4}$/;
        if(!regName.test(this.kname)){
          this.$Message.error('请输入正确的姓名');
        }
      },
      regemail(){
        var regEmail=/^([a-zA-Z0-9._-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
        if(!regEmail.test(this.kemail)){
          this.$Message.error('请输入正确的邮箱格式');
        }
      },
      regpwd(){
        var regPwd=/^[a-zA-Z0-9]{8,16}$/;  
        if(!regPwd.test(this.kpwd)){
          this.$Message.error('密码格式有误');
        }
      },
      regphone(){
        var regPhone=/^1[3-8]\d{9}$/;
        if(!regPhone.test(this.kphone)){
          this.$Message.error('请输入正确的手机号码');
        }
      },
      addUser(){
        if(this.all){
          var url="http://127.0.0.1:3000/Register";
          
          var postData=this.qs.stringify({
            ID:this.kwords,
            uname:this.kname,
            uemail:this.kemail,
            user:this.kpuser,
            upwd:this.kpwd,
            uphone:this.kphone
          });
          this.axios.post(url,postData).then(result=>{
            if(this.yzm1==this.yzm){
              this.$Message.success('注册成功');
              
              this.$router.push('/Login')
            }else{
              this.$Message.error('请输入正确的手机验证码');
            }
          })
        }else{
          this.$Message.warning('请选择是否同意隐私策略');
        }
      }, 
    },
  }
</script>
<style>
  *{
    margin: 0;
    padding: 0;
    text-decoration: none;
  }
  .app-reg{
    background: url("../../img/blizzard-background-1280.4JLnG.jpg") no-repeat;
    background-size:cover; 
    padding: 0px;
    width: 1920px;
    height: 100%;
  }
  .app-reg .top_logo{
    text-align: center;
    margin: 0px 0 30px;
    padding-top:100px;
  }
  .app-reg .wy{
    width: 500px;
    margin: 0 auto;
  }
  .app-reg .wy>p:first-child{
    text-align: center;
    color:#fff;
    font-size: 30px;
    font-weight: 200px;
  }
  .app-reg .wy>a{
    display: block;
    margin:40px 0 30px;
    text-align: center;
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: #D80101;
    color: #fff;
  }
  .app-reg .wy div{
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    margin: 20px 0;
  }
  .app-reg .wy div span{
    position: relative;
    display: inline-block;
    font-size: 13px;
    color: #fff;
    color: rgba(255,255,255,.3);
  }
  .app-reg .wy div span::before{
    content: "";
    width: 500px;
    height: 1px;
    background-color: #fff;
    background-color: rgba(255,255,255,.1);
    position: absolute;
    top: 50%;
    right: 100%;
    margin-right: 20px;
  }
  .app-reg .wy div span::after{
    content: "";
    width: 500px;
    height: 1px;
    background-color: #fff;
    background-color: rgba(255,255,255,.1);
    position: absolute;
    top: 50%;
    left: 100%;
    margin-left: 20px;
  }
  .app-reg .wy p:last-child{
    display: inline-block;
    color: #fff;
    font-size: 15px;
    margin-bottom: 20px;
  }
  .app-reg .form-container{
    width: 500px;
    margin: 0 auto;
  }
  .app-reg .form-container .form-box{
    margin: 10px 0;
  }
  .app-reg .form-container .id-msg{
    width: 500px;
    height: 60px;
    padding-left: 20px;
    background-color: #272e3b;
    border: 1px solid #3d434f;
    background-clip: padding-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    box-shadow: 0 0 10px 1px rgba(0,0,0,0.75);
    position: relative;
    color: #fff;
    line-height: 60px;
    font-size: 15px;
    display: none;

  }
  .app-reg .form-container .id-msg .arrow{
    border-left: 8px solid transparent;
    border-bottom: 8px solid #272e3b;
    border-right: 8px solid transparent;
    width: 0;
    height: 0;
    position: absolute;
    top:-8px;
    left:50%;
  }
  .app-reg .form-container input{
    height: 30px;
    background: #272e3b;
    color: #fff;
    border-radius: 0;
    border: 1px solid rgba(255,255,255,0.3);
  }
  .app-reg .form-container input:hover{
    border: 1px solid #fff !important;
  }
  .app-reg .form-container input:focus{
    border: 0px solid #03a9f4 !important;
	  box-shadow: 0 0 1px 1px #03a9f4;
  }
  .app-reg .form-container .form-phone{
    position: relative;
    height: 30px;
    margin-bottom: 25px; 
  }
  .app-reg .form-container .form-phone>div:first-child{
    width: 80px;
    height: 30px;
    display: inline-block;
    line-height: 30px;
    text-align: center;
    border: 1px solid rgba(255,255,255,0.3);
    border-radius: 2px;
    background: #272e3b;
    color:#3f3f3f;
    overflow: hidden;
  }
  .app-reg .form-container .form-phone span:first-child{
    width: 50px;
    display: inline-block;
    height: 30px;
    line-height: 30px;
  }
  .app-reg .form-container .form-phone span:nth-child(2){
    display: inline-block;
    width: 30px;
    height: 30px;
    overflow: hidden;
    opacity: 0.5;
    position: absolute;
    top:-9px;
    left: 55px;
    background: url(../../img/sprite-22-select.2GJhj.png);
    background-position:2px -24px;
  }
  .app-reg .form-container .form-phone>div:last-child{
    display: inline-block;
    width: 420px;
    height: 30px;
    position: absolute;
  }
  .app-reg .form-container .form-phone>div:last-child input{
    width: 420px;
    height: 30px;
    border: 1px solid rgba(255,255,255,0.3);
    border-radius: 2px;
  }
  .app-reg .form-container .form-box .msg{
    width: 370px;
    float: left;
    height: 30px;
  }
  .app-reg .form-container div:nth-child(6){
    height: 30px;
  }
  .app-reg .form-container .form-box .code{
    width: 125px;
    float: right;
    height: 30px;
    text-align: center;
    line-height: 30px;
    background: rgba(0,0,0,0.4);
    color:#00aeff;
    border: 1px solid #0d8e9f;
    font-size: 12px;
    cursor: pointer;
  }
  .app-reg .form-container .form-box .code:hover{
    color: #0ff;
    border: 1px solid #0ff;
  }
  .app-reg .form-container .form-agree{
    height: 30px;
    font-size:16px; 
    line-height: 30px;
    position: relative;
    margin-top: 68px;
  }
  .app-reg .form-container .form-agree .check{
    width: 50px;
    height: 30px;
    display: inline-block;
    position: absolute;
    left:-12px;
  }
  .app-reg .form-container .form-agree .check input{
    width: 45px;
    height: 20px;
    box-shadow: none;
  }
  .app-reg .form-container .form-agree .term{
    display: inline-block;
    width: 460px;
    height: 30px;
    position: absolute;
    left: 25px;
    top:-4px;
    color: #fff;
  }
  .app-reg .form-container .form-agree .term a{
    color: #00AEFF;
  }
  .app-reg .form-container .form-agree .term a:hover{
    color: #fff;
  }
  .app-reg .form-container div:nth-of-type(8) a{
    width: 500px;
    height: 30px;
    text-align: center;
    color: #fff;
    line-height: 30px;
    font-size: 14px;
  }
  .app-reg .form-container div:nth-of-type(8) a:hover{
    background: #00AEFF;
  }
  .app-reg .form-container div:nth-of-type(9) a{
    width: 500px;
    height: 30px;
    text-align: center;
    display: inline-block;
    background: rgba(0,0,0,0.4);
    border: 1px solid #0d639f;
    color: #00aeff;
    line-height: 30px;
    font-size: 14px;
  }
  .app-reg .form-container div:nth-of-type(9) a:hover{
    color: #8FD3EA;
  }
  .app-reg .form-container div:nth-of-type(10){
    height: 30px;
    text-align: center;
    margin: 25px 0 50px;
  }
  .app-reg .form-container div:nth-of-type(10) span{
    color: #fff;
    font-size: 14px;
  }
  .app-reg .form-container div:nth-of-type(10) a{
    color: #00AEFF;
    font-size: 14px;
  }
  .app-reg .form-container div:nth-of-type(10) a:hover{
    color: #fff;
  }
  .app-reg .footer{
    width: 500px;
    margin: 0 auto;
  }
  .app-reg .footer .footer-box{
    height: 66px;
    margin-bottom:50px;
  }
  .app-reg .footer .footer-box a{
    display: block;
    width: 124px;
    height: 66px;
    margin: 0 auto;
  }
  .app-reg .footer .footer-box a img{
    width: 100%;
  }
  .app-reg .footer .footer-href{
    width: 500px;
    text-align: center;
    margin-bottom: 20px;
  }
  .app-reg .footer .footer-href a{
    display: inline-block;
    margin:0 10px;
    text-align: center;
    color: rgba(255,255,255,.7);
    font-size: 15px;
  }
  .app-reg .footer .footer-href a:hover{
    color: #fff;
  }
  .app-reg .footer .footer-copy{
    text-align: center;
    color: #555;
    font-size: 13px;
    height: 21px !important;
  }
  .app-reg .footer .footer-copy span{
    color: rgba(255,255,255,.7);
    padding: 0 5px;
  }
  .app-reg .footer .footer-img{
    margin:10px 0;
    text-align: center;
  }
  .app-reg .footer .footer-img a{
    display: inline-block;
    margin: 0 10px;
  }
  .app-reg .footer .footer-img a>img{
    width: 26px;
    height: 26px;
  }
</style>