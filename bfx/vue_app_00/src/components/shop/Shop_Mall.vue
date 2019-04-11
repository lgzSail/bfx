<template>
    <div class="app-mall">
        <header></header>
        <main>
            <div id="demo" class="carousel" data-ride="carousel">
                <!--1.轮播图片-->
                <!-- 所有的轮播图片，统一放在carousel-inner中-->
                <div class="carousel-inner h-100">
                    <!-- 每一张图片，单独放在一个carousel-item中,carousel-item设置了display：none-->
                    <!--carousel-item.active设置了display：block -->
                    <div class="carousel-item active  h-100">
                        <img src="images/shoppingmall/572d3dacf9ba25d7edc8a9ff909a7dc3-WC3_Arthas_BNet_Shop_1900x300_MN01.jpg" class="w-100 h-100 "/>
                        <div id="demo1">
                                <img src="images/shoppingmall/08fb01a52b61882255838d33fe746f5b-warcraft3-reforged-zhcn-1000x500.png"/>
                                <div id="demo1_item">
                                   <a href="#" class="btn text-white">预约</a> 
                                </div> 
                        </div>
                    </div>
                    <div class="carousel-item  h-100">
                        <img src="images/shoppingmall/0c02f09c46d9e1f4e977da2159fb1433-1900x300.jpg" class="w-100 h-100 "/>
                        <div id="demo2">
                                <img src="images/shoppingmall/4f6559f9dd0e290cd7fadd9b0958697b-Rastakhans-Rumble-Logo_zhCN.png"/>
                                <p>全新拓展包</p>
                                <div id="demo2_item">
                                   <a href="#" class="btn text-white">立即购买</a> 
                                </div> 
                        </div>
                    </div>
                    <div class="carousel-item  h-100">
                        <img src="images/shoppingmall/c23b21a7910f8d1d3f7178e6fb79a6b5-1900x300.png" class="w-100 h-100 "/>
                        <div id="demo3">
                                <img src="images/shoppingmall/d8ac9dd02a30596c8dfb933c1efb26f2-scr-remastered-cn-1000.png"/>
                                <div id="demo3_item">
                                   <a href="#" class="btn text-white">立即购买</a> 
                                </div> 
                        </div>
                    </div>
                </div>
                <!--2.轮播指示器-->
                <!--carousel-indicators绝对定位，水平居中对齐，弹性布局横向显示 -->
                <ul class="carousel-indicators">
                    <!-- carousel-indicators .active背景变为白色-->
                    <!-- 事件data-slide-to=“0”点击滑动到第0张图片-->
                    <!-- data-target="#demo"点击后修改的轮播是#demo这个轮播-->
                    <li class="active" data-slide-to="0" data-target="#demo"></li>
                    <li data-slide-to="1" data-target="#demo"></li>
                    <li data-slide-to="2" data-target="#demo"></li>
                </ul>
                <!--3.左右箭头-->
                <a href="#demo" class="carousel-control-prev" data-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                </a>
                <a href="#demo" class="carousel-control-next" data-slide="next">
                    <span class="carousel-control-next-icon"></span>
                </a>
            </div>
            <div id="banner" class="pt-2 pb-2">
                <ul class="d-flex justify-content-center list-unstyled mb-0">
                    <li>
                        <p class="pt-3 h6 text-white">暴雪游戏</p>
                    </li>
                    <li>
                        <a href="#">
                            <img src="images/shoppingmall/logo-mobile-wow-e09169bb480f819c.png" title="魔兽世界"/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="images/shoppingmall/logo-mobile-wow-e09169bb480f819c.png" title="守望先锋"/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="images/shoppingmall/logo-mobile-wow-e09169bb480f819c.png" title="黑暗破坏神III"/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="images/shoppingmall/logo-mobile-hs-8f578d9162ef6bef.png" title="炉石传说">
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="images/shoppingmall/logo-mobile-heroes-9b18acd85698e3f5.png" title="风暴英雄">
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="images/shoppingmall/logo-mobile-sc2-9bcca3ce838c0ada.png" title="星际争霸II">
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="images/shoppingmall/logo-mobile-scr-6ab1a55de1242f54.png" title="星际争霸">
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="images/shoppingmall/logo-mobile-w3r-cd7d6195e1b6ea02.png" title="魔兽争霸III">
                        </a>
                    </li>
                </ul>
            </div>
            <div id="list">
                <div class="item">
                    <h2 class="text-white pt-5 pb-3">精选</h2>
                    <div class="d-flex justify-content-between mt-3 mb-3">
                        <div class="cart pb-4" v-for="item of foor1">
                            <img :src="item.bg_img" @click='loa(item.pid)'/>
                            <div>
                                <img :src="item.logo_img" class='tb'>
                                <h4 class="text-white">{{item.lname}}</h4>
                                <p class="p_col">{{item.style}}</p>
                                <p class="pb-4">{{item.expend}}</p>
                                <h3 class="text-white">￥{{item.price}}</h3> 
                            </div>
                        </div> 
                    </div>
                </div> 
            <div class="item">
                <h2 class="text-white pt-5 pb-3">当下流行</h2>
                <div class="d-flex justify-content-between mt-3 mb-3">
                    <div class="cart pb-4" v-for="item of foor2">
                        
                            <img :src="item.bg_img" @click='loa(item.pid)' />
                            <div>
                                <img :src="item.logo_img">
                                <h4 class="text-white">{{item.lname}}</h4>
                                <p class="p_col">{{item.style}}</p>
                                <p class="pb-4">{{item.expend}}</p>
                                <h3 class="text-white">￥{{item.price}}</h3> 
                            </div>
                        
                        
                    </div> 
                </div>
            </div>
            <div class="item">
                <h2 class="text-white pt-5 pb-3">热门赠礼</h2>
                <div class="d-flex justify-content-between mt-3 mb-3">
                    <div class="cart pb-4" v-for="item of foor3">
                        <img :src="item.bg_img" @click='loa(item.pid)'/>
                        <div>
                            <img :src="item.logo_img">
                            <h4 class="text-white">{{item.lname}}</h4>
                            <p class="p_col">{{item.style}}</p>
                            <p class="pb-4">{{item.expend}}</p>
                            <h3 class="text-white">￥{{item.price}}</h3> 
                        </div>
                    </div> 
                </div>
            </div>
            <div class="item">
                <h2 class="text-white pt-5 pb-3">推荐</h2>
                <div class="d-flex justify-content-between mt-3 mb-3">
                    <div class="cart pb-4" v-for="item of foor4">
                        <img :src="item.bg_img" @click='loa(item.pid)'/>
                        <div>
                            <img :src="item.logo_img">
                            <h4 class="text-white">{{item.lname}}</h4>
                            <p class="p_col">{{item.style}}</p>
                            <p class="pb-4">{{item.expend}}</p>
                            <h3 class="text-white">￥{{item.price}}</h3> 
                        </div>
                    </div> 
                </div>
            </div>
            </div>
        </main>
        
    </div>
</template>
<script>
    export default {
        data(){
            return{
                foor1:[],
                foor2:[],
                foor3:[],
                foor4:[]
            }
        },
        mounted() {
            this.load();
        },
        methods: {
            loa(e){
                this.$router.push('/shop/detail?pid='+e)
            },
            load(){
                var url="http://127.0.0.1:3000/getlist"
                this.axios.get(url).then(result=>{
                    for(var i=0;i<40;i++){
                        if(i<10) this.foor1.push(result.data[i]);
                        if(i>=10&&i<20) this.foor2.push(result.data[i]);
                        if(i>=20&&i<30) this.foor3.push(result.data[i]);
                        if(i>=30&&i<40) this.foor4.push(result.data[i]);
                    }
                })
            }
        }
    }
</script>
<style scoped>
.tb{
    width:48px;height:48px;
}
.cart{
    transition:all 1s;
    border-radius: 8px;
}
.cart:hover{
    transform:scale(1.1);
} 
.item>div{
    flex-wrap: wrap;
}
#list{
    margin:0 130px;
}
.cart{
    position: relative;
    
}

.cart>img{
    width:280px;
    height:420px;
    border-radius: 10px;
}
.cart>div{
    position: absolute;
    top:190px;
    left:12px;
}
.p_col{
    color:#FF8A00;
    padding:10px 0;
}
#banner{
    border-bottom: 1px solid #ddd;
}
#banner>ul>li{
    margin-right:15px;
}
.app-mall{
    background:url(../../imgs/bg_bottom_mobile.c2cc1fa8b7f35f5e7058.png);
    background-size: cover;
}
#demo1,#demo2,#demo3{
    position: absolute;
    z-index: 100;
    top:15%;
    left:5%;
}
#demo3{
    top:23%;
}
#demo2{
    top:12%;
    left: 7%;
}
#demo2 p{
    font-size:22px;
    padding-left:64px;
}
#demo1 img,#demo3 img{
    width:280px;
}
#demo2 img{
    width:250px;
}
#demo2_item{
    margin-top:10px;
    margin-left:-16px;
}
#demo1_item,#demo3_item{
    margin-top:10px;
    margin-left:4px;
}
#demo3_item{
    margin-left:-10px;
}
#demo1_item>a,#demo2_item>a,#demo3_item>a{
    background:#0E86CA;
    font-size:18px;
}
#demo1_item>a,#demo3_item>a{
    padding:8px 113px;
}
#demo2_item>a{
    padding:8px 100px;
}
#demo{
    height:300px;
    position: relative;
}
.carousel-control-prev,.carousel-control-next{
    width:35px;
    height:70px;
    background-color:#000;
    border:1px solid #aaa;
    top:36%;
}
.carousel-control-prev-icon{
    color:#07698C;
}
</style>