<template>
  <div>
   <div class='bg border-b'>
      <div class='container'>
        <div class='row text-white jiustifal-content-around'>
          <div class='col-4'>
            <router-link to='/Home'>
                <img src="../../img/logo.png">
            </router-link>
            <router-link to='/forum'>
              <span class='pl-5 pt-2 h6 font_index line_h ml-5 text-white h6 '>论坛</span>
            </router-link>
          </div>
          <div class='offset-6 col-1 text-right'>
              <p class='pt-2 h6 font_index line_h'>支持</p>
            </div>
          
          <div class='col-1 text-right pt-2 d-flex'>
            <div v-html='loa' class='pr-2'>
            
            </div>
            <div :class='non'  @click='logout'>
              <a href="javascript:;" class='text-white h6'>注销</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class='bg border-b'>
      <div class='container'>
          <div class='row'>
              <div class='col-1 p-2 pl-3 '>
                <img src="../../img/index.png" class='index_tp'><span class='pt-2 pr-5 h6 font_index line_h pl-1 text-white h6'>
                <router-link to='/shop/index'>
                商场
                </router-link>
                </span>
              </div>
              <div class='col-1 p-2 pl-3 '>
                <Dropdown trigger="click" style="margin-left: 20px">
                  <a href="javascript:void(0)" class='text-white fontsize'>
                      游戏  
                  </a>
                  <img src="../../img/xj.png" class='xj'>
                  <Dropdown-menu slot="list" id='cd'>
                    <router-link to='/shop/family?game=ms'>
                      <Dropdown-item>
                        
                          魔兽世界
                        
                      </Dropdown-item>
                    </router-link>
                    <router-link to='/shop/family?game=sw'>
                      <Dropdown-item>
                        
                        守望先锋
                        
                      </Dropdown-item>
                      </router-link>
                      <router-link to='/shop/family?game=ah3'>
                      <Dropdown-item>
                        
                        暗黑破坏神Ⅲ
                        
                      </Dropdown-item>
                      </router-link>
                      <router-link to='/shop/family?game=ls'>
                      <Dropdown-item>
                        
                        炉石传说
                        
                      </Dropdown-item>
                      </router-link>
                      <router-link to='/shop/family?game=fb'> 
                      <Dropdown-item>
                         
                        风暴英雄
                        
                      </Dropdown-item>
                      </router-link>
                      <router-link to='/shop/family?game=xj2'>
                      <Dropdown-item>
                        
                        星际争霸Ⅱ
                        
                      </Dropdown-item>
                      </router-link>
                       <router-link to='/shop/family?game=xj'>
                      <Dropdown-item>
                       
                        星际争霸
                        
                      </Dropdown-item>
                      </router-link>
                      <router-link to='/shop/family?game=ms3'>
                      <Dropdown-item @>
                        
                        魔兽争霸Ⅲ
                        
                      </Dropdown-item>
                      </router-link>
                  </Dropdown-menu>
                </Dropdown>
              </div>
              <div class='col-1 p-2 pl-3 '>
                <Dropdown trigger="click" style="margin-left: 20px">
                  <a href="javascript:void(0)" class='text-white h6'>
                      服务
                      <Icon type="arrow-down-b"></Icon>
                  </a>
                  
                </Dropdown>          
              </div>
              <div class='offset-5 col-4 border_in mt-1 pt-1'>
                  <div>
                      <div class='position-relative'>
                        <div class='position-absolute ss_1 '>
                          <input type="text" placeholder="搜索商场" class='border-0 bg_0 pl-5 pt-0 text-white in h6' @input='sear' v-model='inp'>
                        </div>
                        <div class='position-absolute ss_1'>
                          <img src="../../img/doduo.png" class='w-75 '>
                        </div>
                        <div class='position-absolute sear cor p-3' v-if='sea.length > 0'>
                          <div class='row pb-3' v-for='elem of sea' @click='deta(elem.pid)'>
                            <div class='col-4'>
                              <img :src="elem.pri" class='w-100'>
                            </div>
                            <div class='col-8'>
                              <p>{{elem.title}}</p>
                              <p>{{elem.bri}}</p>
                            </div>
                          </div>                       
                        </div>                    
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
    <router-view></router-view>
    <div class="app-container">
    <footer class="text-center pt-5 pb-5">
        <div>
             <div>
                <a href="#">
                    <img src="images/shoppingmall/c5bf5e6736ba7f12560ac2e9936a7b3.png" class="mb-4"/>
                </a>
            </div> 
            <div class="ul_list mb-3">
                <ul class="d-flex justify-content-center list-unstyled">
                    <li>工作机会
                        <i>|</i>
                    </li>
                    <li>关于
                        <i>|</i>
                    </li>
                    <li>支持
                        <i>|</i>
                    </li>
                    <li>媒体中心
                        <i>|</i>
                    </li>
                    <li>API
                        <i>|</i>
                    </li>
                    <li>安全中心</li>
                </ul>
            </div> 
            <div>©2019暴雪娱乐有限公司版权所有，</div>
            <div>由上海网之易网络科技发展有限公司运营。</div>
            <div class="text-white pt-2 pb-2">隐私<span class="pl-2 pr-2">|</span>法律条款</div>
            <div>沪网文〔2017〕9633-727号<span>|</span>增值电信业务经营许可证编号：沪B2－20080012</div>
            <div>互联网违法和不良信息举报电话：0571-28090163 <span>|</span>沪公网安备：31011502002167</div>
            <div class="text-white">适龄提示：适合13岁及以上使用 家长监护工程> <span>|</span>上海市网络游戏行业自律公约</div>
            <div>上海市张江高科技园区碧波路690号5号楼301-A <span>|</span>客服电话：0571-28090163</div>
            
            <div class="im pt-2 pb-2">
                <ul class="d-flex justify-content-center list-unstyled"> 
                    <li>
                        <img src="images/shoppingmall/icon-cn-cyberpolice-8030c963aa438de3.gif"/>
                    </li>
                    <li>
                        <img src="images/shoppingmall/icon-cn-zx100-1b6b7d14bf4a236f.gif"/>
                    </li>
                    <li>
                        <img src="images/shoppingmall/icon-cn-sgs-668b0f6a4fb9c4bd.gif"/>
                    </li>
                    <li>
                        <img src="images/shoppingmall/icon-cn-shjbzx-ddcf1546d4122b14.gif"/>
                    </li>
                    <li>
                        <img src="images/shoppingmall/icon-cn-culture-logo-1eefdfed9b7decc1.png"/>
                    </li>
                </ul>
            </div> 
            <div>健康游戏忠告：抵制不良游戏  拒绝盗版游戏  注意自我保护  谨防受骗上当</div>
            <div>适度游戏益脑  沉迷游戏伤身  合理安排时间  享受健康生活</div>
        </div>
    </footer>
  </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      inp:'',
      sea:[],
      loa:`<a href="/#/Login" class='h6' id='load'>用户登录</a>`,
      non:{
        dis:true
      },
      user:''
    }
  },
  mounted() {
    this.load()
  },
  methods:{
    load(){
      
      if(sessionStorage['user']==undefined){
        this.user=''
      }else{
        this.user=sessionStorage['user']
      }
      if(this.user.length>0){
        this.loa=`<a href="javascript:;" class='h6' id='load'>
                ${sessionStorage['user']}
            </a>
            `
        this.non.dis=false
      }
    },
    logout(){
      sessionStorage.removeItem('user')
      this.non.dis=true
      this.loa=`<a href="/#/Login" class='h6' id='load'>用户登录</a>`
    },
    sear(e){
      var que=e.target.value
      if(que.length>0){
        var url='http://127.0.0.1:3000/search?que='+que
        this.axios.get(url).then(result=>{
          this.sea=result.data
        })
      }
    },
    deta(e){
      this.sea=[]
      this.inp=''
      this.$router.push('/shop/detail?pid='+e)

    }
  }
}
</script>
<style scoped>
.fontsize{
  font-size: 16px;
}
.dis{
  display: none
}
.cor{
  background: #001732;width: 500px;
}
.sear{
 top:30px;left:-15px;
 z-index:10;
}
.dw{
  top:55px !important;background: #1C2433;padding:0 !important;
}
.in{
  width: 500px;
}
.xj{
  width: 15px;height: 15px;
}
a{
  color:inherit;
}
.index_tp{
  margin-top:-2px;
}
.border-b{
  border-bottom: 1px solid #2F5F8A;
}
.bg{
  background: url(../../img/200a8a7c45bd0621f2f7827500dfd82.png) no-repeat fixed  0 0;background-size:100% 100%
}
.font_index{
  color:rgba(255,255,255,0.7);
  font-size:16px;
}
.line_h{
  line-height: 22px;
}
.bg_0{
  background: rgba(255,255,255,0)
}
.border_in{
  border:1px solid #263A51;
  height:30px;
  }
.banner_fa{
  top:0;
}
.banner_f{
  height:300px;
}
.banner_fa1{
  top:26%;
  left:12%;
  width:300px;
}
.ss_1{
  top:-4px;
  left: -12px;
}
.xjt{
  display: inline-block;border-top:5px solid #fff;border-right:5px solid transparent;border-left:5px solid transparent;
  position:absolute;
  top:14px;left: 38px;
}
@media (min-width: 1200px){
.container{
  max-width:1600px;
}
}
.fa-group-by{
  height:35px;background: #02132E;padding:0px 10px 0px;margin-top:3px;
}
.dh3{
  height:43px;
}
</style>