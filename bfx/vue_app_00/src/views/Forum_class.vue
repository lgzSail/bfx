<template>
    <div id="contain">
        <div id="top" :style="'background-image:url('+img+')'">
            
        </div>
        <div id="main">
            <div id="main-body">
                <div class="forum general_forum" id="general1" @click='href(1)'>
                    <h3>综合讨论区</h3>
                    <p>讨论星际争霸2的一切</p>
                </div>
                <div class="forum grneral_forum" id="general2" @click='href(2)'>
                    <h3>客服支持区</h3>
                    <p>客服人员在此记录和解答您的问题</p>
                </div>
                <div class="forum general_forum" id="general3" @click='href(3)'>
                    <h3>战友招募区</h3>
                    <p>在这里发出你的招募队友的邀请把!</p>
                </div>
                <div class="forum grneral_forum" id="general4" @click='href(4)'>
                    <h3>活动讨论区</h3>
                    <p>官方活动获奖名单公布、活动内容讨论</p>
                </div>
                <div class="forum grneral_forum" id="general5" @click='href(5)'>
                    <h3>汉化及配音讨论区</h3>
                    <p>你可以在这里对国服的语言、文字等任何游戏内容改变进行讨论，我们的翻译团队也可能参与哦!</p>
                </div>
                <div class="forum grneral_forum" id="general5" @click='href(6)'>
                    <h3>游戏讨论区</h3>
                    <p>你可以在这里对游戏的各个内容进行讨论哦!</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            game:this.$route.query.game,
            img:''
        }
    },
    created() {
        window.scrollTo(0,0)
        if(this.game==1){
            this.img='http://127.0.0.1:3000/img/banner/ms.jpg'
        }else if(this.game==2){
            this.img='http://127.0.0.1:3000/img/scbg.jpg'
        }else if(this.game==3){
            this.img='http://127.0.0.1:3000/img/banner/ah3.jpg'
        }else if(this.game==4){
            this.img='http://127.0.0.1:3000/img/banner/sw.jpg'
        }else if(this.game==5){
            this.img='http://127.0.0.1:3000/img/banner/ls.jpg'
        }else if(this.game==6){
            this.img='http://127.0.0.1:3000/img/banner/fb.jpg'
        }else if(this.game==7){
            this.img='http://127.0.0.1:3000/img/banner/ms3.jpg'
        }else if(this.game==8){
            this.img='http://127.0.0.1:3000/img/banner/xj2.jpg'
        }
    },
    methods: {
        href(e){
            this.$router.push('/forum_list?game='+this.game+'&type='+e)
        }
    },
}
</script>
<style scoped>
       #contain{margin:0;padding:0;  
       height:1000px;
       text-align:left;        
        background-image:url('http://127.0.0.1:3000/img/sc_bg2.jpg');}
       #nav{
           height:100px;
           background-image:url('http://127.0.0.1:3000/img/scbg.jpg');
           background-position: -500px 100px;
       }
       #top{
           height:400px;
           background-image:url('http://127.0.0.1:3000/img/scbg.jpg');
           background-position: -500px 0;
           border-bottom: 1px solid rgba(255,255,255,.1);
           outline: 1px solid #000;
        }
        #top img{
            margin:38px 0 0 44px;
            width:38%;
            height:90%;
        }
        #main-body{
            margin: 60px 80px 0 120px;
            color:#fff;
        }
        #main-body>div.forum{
            width:46%;
            height:122px;
            border:1px solid #ccc;
            background-color: rgba(255,255,255,0.05);
            box-shadow: 0 0 0 1px #222;
            float:left;
            margin-right:1%;
            margin-left:1%;
            margin-bottom: 1%;
            border: solid 1px rgba(255,255,255,0.15);
            cursor: pointer;
        }
        #main-body>div.forum:hover{
            background-color: rgba(255,255,255,0.08);            
            filter:brightness(1.5);
        }
        .forum>h3,.forum>p{
            margin-left:15%;
            margin-bottom: 0;
        }
        .forum>p{
            color: rgba(255,255,255,0.5);
            margin-top:1%;
        }
        #general1{
            background-image:url('http://127.0.0.1:3000/img/sc2/common_70_icon.png');
            background-repeat:no-repeat;
            background-size: 8%;
            background-position: 4% 30%;
        }
        #general2{
            background-image:url('http://127.0.0.1:3000/img/sc2/common_71_icon.png');
            background-repeat:no-repeat;
            background-size: 8%;
            background-position: 4% 30%;
        }
        #general3{
            background-image:url('http://127.0.0.1:3000/img/sc2/common_72_icon.png');
            background-repeat:no-repeat;
            background-size: 8%;
            background-position: 4% 30%;
        }
        #general4{
            background-image:url('http://127.0.0.1:3000/img/sc2/common_73_icon.png');
            background-repeat:no-repeat;
            background-size: 8%;
            background-position: 4% 30%;
        }
        #general5{
            background-image:url('http://127.0.0.1:3000/img/sc2/common_74_icon.png');
            background-repeat:no-repeat;
            background-size: 8%;
            background-position: 4% 30%;
        }
        #general6{
            background-image:url('http://127.0.0.1:3000/img/sc2/common_75_icon.png');
            background-repeat:no-repeat;
            background-size: 8%;
            background-position: 4% 30%;
        }
        .clear{clear:both;}
</style>