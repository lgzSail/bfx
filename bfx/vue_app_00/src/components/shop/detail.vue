<template>
    <div class="app_details">
        <div class="banner">
            <img :src="de.pri"/>
            <div class="win">
                <div class="d-flex">
                    <img :src="de.tb"/>
                    <div class="pt-2 pl-2">
                        <h3 class="text-white">{{de.title}}</h3>
                        <p class="text-white pt-2">{{de.bri}}</p>
                    </div>
                </div>
                <div class="win_ban p-0">
                    
                </div>
                <h2 class="text-white pl-4 pt-4">￥{{de.price}}</h2>
                <div class="btn1 pb-1">
                    <a href="#" class="btn">立即购买</a>
                </div>
                <div class="btn2 pt-0">
                    <a href="#" class="btn">赠礼</a> 
                </div>
                <p class="text-center">添加至心愿单</p>
            </div>
        </div>
        <div class='container'>
            <div class="content d-flex">
                <div class='row'>
                    <div class="con1 pr-5 pb-5 col-8">
                        <h2 class="text-white pb-3">{{de.title2}}</h2>
                        <p class="pb-3">{{de.bri2}}</p>
                    </div>
                    <div class="con2 pl-5 pt-4 pr-5 pb-5 col-4">
                        <ul>
                            <li class='text-white'>截至2019年10月16日，25%的销售收入将用于扩充本年度线下比赛的奖金池，原有奖金池至少为50万美元（每项赛事25万美元）。 </li>
                            <li><a href="#"> 需要《魔兽世界®》 </a></li>
                            <li><a href="#">  使用兑换码  </a></li>
                            <li><a href="#">  配置要求  </a></li>
                            <li><a href="#">  商品详情  </a></li>
                        </ul>
                    </div>
                </div>
                
            </div>
            <div class="content">
                <div class="row">
                    <div class="col-3">
                        <h2 class="text-white">{{det[0].title}}</h2>
                    </div>
                    <div class='col-9 row'>
                        <div class="col-4" v-for='(elem,i) of det' :key='i'>
                        <div>
                            <img :src="elem.pri" class="w-100"/>
                        </div>
                        <h3 class="text-white pt-3 pb-3">{{elem.ctitle}}</h3>        
                        <h4 class="text-white">{{elem.bri}}</h4>
                        </div>
                    </div>
                    
                </div>
                <div class="row pt-5">
                    <div class="col-2">
                        <h2 class="text-white">配置要求</h2>
                    </div>
                    <div class="col-10">
                        <div class="row icon">
                            <div class="col-12">
                                <ul class="list-unstyled">
                                    <li class="pb-2">
                                        <a href="">
                                            <img src="images/detail/win.png" />
                                        </a>
                                        <span class="text-white h5">Windows</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="row pt-3 pb-3">
                            <div class="col-6">
                                <h3 class="text-white">最低配置</h3>
                            </div>
                            <div class="col-6">
                                <h3 class="text-white">推荐配置</h3>
                            </div>
                        </div>
                        <div class="row info pb-5">
                            <div class="col-3">
                                <h4 class="text-white pb-1">操作系统</h4>
                                <h5 class="text-white">Windows® 7 64-bit</h5>
                            </div>
                            <div class="col-3">
                                <h4 class="text-white pb-1">处理器</h4>
                                <h5 class="text-white">Intel® Core™ i5-760 或 AMD FX™-8100 或更高配置</h5>
                            </div>
                            <div class="col-3">
                                <h4 class="text-white pb-1">处理器</h4>
                                <h5 class="text-white">Intel® Core™ i7-4770 或 AMD FX™-8310 或更高配置</h5>
                            </div>
                            <div class="col-3">
                                <h4 class="text-white pb-1">显卡</h4>
                                <h5 class="text-white">NVIDIA® GeForce® GTX 960 或 AMD™ Radeon™ R9 280 或更高配置</h5>
                            </div>
                        </div>
                        <div class="row pb-5">
                            <div class="col-3">
                                <h4 class="text-white pb-1">显卡</h4>
                                <h5 class="text-white">NVIDIA® GeForce® GT 560 2GB 或 AMD™ Radeon™ HD 7850 2GB 或 Intel® HD Graphics 530 (45W)</h5>
                            </div>
                            <div class="col-3">
                                <h4 class="text-white pb-1">内存</h4>
                                <h5 class="text-white">4 GB</h5>
                            </div>
                            <div class="col-3">
                                <h4 class="text-white pb-1">内存</h4>
                                <h5 class="text-white">8 GB</h5>
                            </div>
                            <div class="col-3">
                                <h4 class="text-white pb-1">储存空间</h4>
                                <h5 class="text-white">70GB可用空间的SSD</h5>
                            </div>
                        </div>
                        <div class="row pb-5">
                            <div class="col-3">
                                <h4 class="text-white pb-1">储存空间</h4>
                                <h5 class="text-white">70GB 可用空间的7200 RPM HDD</h5>
                            </div>
                            <div class="col-3">
                                <h4 class="text-white pb-1">网络</h4>
                                <h5 class="text-white">宽带网络</h5>
                            </div>
                            <div class="col-3">
                                <h4 class="text-white pb-1">网络</h4>
                                <h5 class="text-white">宽带网络</h5>
                            </div>
                            <div class="col-3">
                                <h4 class="text-white pb-1">输入设备</h4>
                                <h5 class="text-white">多按鍵滚轮电竞鼠标和键盘</h5>
                            </div>
                        </div>
                        <div class="row pb-5">
                            <div class="col-3">
                                <h4 class="text-white pb-1">输入设备</h4>
                                <h5 class="text-white">键盘和鼠标，其他输入工具不支持</h5>  
                            </div>
                            <div class="col-3">
                                <h4 class="text-white pb-1">分辨率</h4>
                                <h5 class="text-white">最低 1024 x 768</h5>  
                            </div>
                            <div class="col-6">
                                <h4 class="text-white pb-1">分辨率</h4>
                                <h5 class="text-white">最低 1024 x 768</h5>  
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row pt-5 detail">
                    <div class="col-2">
                        <h2 class="text-white">商品详情</h2>
                    </div>
                    <div class="col-10">
                        <div class="row">
                            <div class="col-4">
                                    <h4 class="text-white pb-3">类型</h4>
                                    <h5 class="text-white pb-5">大型多人角色扮演游戏</h5>
                                    <h4 class="text-white pb-3">平台</h4>
                                    <a href="#">
                                        <img src="images/detail/win.png" />
                                    </a>
                                    <span class="text-white h5">Windows</span>
                            </div>
                            <div class="col-4">
                                <h4 class="text-white pb-3">支持语言</h4>
                                <ul class="pb-5">
                                    <li  class="text-white">简体中文</li>
                                </ul>
                                <h4 class="text-white pb-3">可使用的地区</h4>
                                <ul>
                                    <li class="text-white">中国</li>
                                </ul>
                            </div>
                            <div class="col-4">
                                <h4 class="text-white pb-3">商品要求</h4>
                                <ul>
                                    <li class="text-white">
                                        <h5 class="text-white">截至2019年10月16日，25%的销售收入将用于扩充本年度《魔兽世界竞技场世界锦标赛》和《魔兽世界史诗钥石地下城全球锦标赛》线下比赛的奖金池，原有奖金池至少为50万美元（每项赛事25万美元）。 </h5>
                                    </li>
                                    <li class="text-white">
                                        <h5 class="text-white">变形将持续20分钟，并且在战斗中和死亡后仍将保持激活。游戏角色每60分钟只能被变形一次。 </h5>
                                    </li>
                                    <li class="text-white">
                                        <a href="#"> 需要《魔兽世界®》 </a>
                                    </li>
                                    <li class="text-white">
                                        <a href="#">  使用兑换码  </a>
                                    </li>
                                </ul>
                            </div>
                        </div>   
                    </div>  
                </div>
                <div class="row pt-5 pb-5">
                    <div class="col-2"></div>
                    <div class="col-10">
                        <h4 class="text-white">魔兽世界服务免责声明</h4>
                        <h4 class="text-white">魔兽世界时光徽章: 每个账号最多拥有20个。</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data(){
    return {
      pid:this.$route.query.pid,
      de:[],
      det:[{title:'',pri:''}]
    }
  },
  mounted () {
    this.load()
    window.scrollTo(0,0)
  },
  watch: {
    '$route' (to, from) {
      this.load()
    },
    de(){
        this.load()
    }
  },
  methods: {
    load(){
      this.pid=this.$route.query.pid
      var url='http://127.0.0.1:3000/shop/detail?pid='+this.pid
      this.axios.get(url).then(result=>{
        this.de=result.data[0]
      })
      var url='http://127.0.0.1:3000/shop/detail/content?pid='+this.pid
      this.axios.get(url).then(result=>{
        this.det=result.data
      })
    }
  }
}
</script>
<style scoped>
.detail>div:nth-child(2)>div>div:nth-child(3) ul li{
    padding-bottom: 10px;
}
.detail>div:nth-child(2)>div>div:nth-child(3) ul li h5{
    line-height: 1.5;
}
 .icon>div>ul{
    border-bottom: 2px solid white;
}
.icon>div>ul>li{
    width:120px;
    border-bottom: 2px solid #00AEFF;
    margin-bottom: -2px;
} 
.icon>div>ul>li img,.detail>div:nth-child(2)>div>div img{
    width:30px;
    vertical-align: top;
}
.icon>div>ul span{
    display: inline-block;
    padding-top:3px;
}
.content{
    padding:40px 60px;
    
}
.content>div:first-child,content>div:nth-child(2),.detail{
    border-bottom: 1px solid #26466A;
    padding-bottom: 60px;
}
.content>div h4{
    line-height: 1.5;
}
.con1 p{
    font-size: 16px;
    color:#ddd;
    line-height: 2;
}
.con2>ul li,.con2>ul li a{
    font-size: 14px;
}
.con2>ul li{
    padding-bottom: 8px;
}
.banner{
    width:100%;
    height:520px;
    position: relative;
}
.banner>img{
    width:100%;
    height:100%;
    border-bottom:1px solid #26466A;
}
.win{
    width:500px;
    height:450px;
    background:#262D3A;
    position: absolute;
    top:120px;
    right:150px;
    border-top:3px solid #3E4552;
}
.win>div>img{
    width:65px;
    height:65px;
}
.win>div{
    padding:20px 20px;
}
.win_ban{
    background:#FECC00;
}
.win_ban>p{
    font-size: 16px;
    color:#000;
}
.btn1>a{
   background-image: linear-gradient(#0E86CA,#10A1DE); 
   color:white;
}
.btn1>a,.btn2>a{
    font-size: 20px;
    width:100%;
    padding:15px 0;
    border:1px solid #10A1DE;
}
.btn2>a{
    background:#131820; 
   color:#10A1DE;
}
.btn2+p{
    font-size: 20px;
    color:#10A1DE;
}
</style>