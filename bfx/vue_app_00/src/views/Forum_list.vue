<template>
     <div id="main">
        <div id="contain">
            <table></table>
            <h1><a href="#" :style="'background-image:url('+logo+')'"></a> {{typetxt}}</h1>
            <div class="pgs">
                <a href="javascript:;" @click='hrefadd' class="button"><span class="new_topic"></span>发新帖</a>
                <div class="pg">
                    <a href="#" class="prev">上一页</a>
                    <a href="#" class="selected">1</a>
                    <a href="#" class="next">下一页</a>
                </div>
                <div class="clear"></div>
            </div>
            <div class="thead">
                <div id="title">标题</div>
                <div id="author">作者</div>
                <div id="reply">回复</div>
                <div id="watch">查看</div>
                <div id="last">最后发表</div>
            </div>
            <ul class="forum_list">
                <li v-for="item of forumlist" @click='href(item.fid,item.clicks)' class='xs'>
                    <div class="title"><img src="http://127.0.0.1:3000/img/folder_common.png" alt="">{{item.title}}</div>
                    <div class="author">{{item.uname}}</div>
                    <div class="reply">回复</div>
                    <div class="watch">{{item.clicks}}</div>
                    <div class="last">{{item.time}}</div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            forumlist:[],
            pno:0,
            game:this.$route.query.game,
            type:this.$route.query.type,
            logo:'',
            typetxt:''
        }
    },
    created(){
        window.scrollTo(0,0)
        this.axios.get(`http://127.0.0.1:3000/post/getforumlist?game=${this.game}&type=${this.type}&pno=0`)
        .then(res=>{
            this.forumlist=res.data;
            for(var i=0; i<this.forumlist.length;i++){
                let date=new Date(this.forumlist[i].time*1000)
                this.forumlist[i].time=date.format('yyyy-MM-dd hh:mm:ss');  
            }
        })
        if(this.type==1){
            this.typetxt='综合讨论区'
        }else if(this.type==2){
            this.typetxt='客服支持区'
        }else if(this.type==3){
            this.typetxt='战友招募区'
        }else if(this.type==4){
            this.typetxt='活动讨论区'
        }else if(this.type==5){
            this.typetxt='汉化及配音讨论区'
        }else if(this.type==6){
            this.typetxt='游戏讨论区'
        }
        if(this.game==1){
            this.logo='http://127.0.0.1:3000/img/xtb/ms.png'
        }else if(this.game==2){
            this.logo='http://127.0.0.1:3000/img/xtb/xj2.png'
        }else if(this.game==3){
            this.logo='http://127.0.0.1:3000/img/xtb/ah3.png'
        }else if(this.game==4){
            this.logo='http://127.0.0.1:3000/img/xtb/sw.png'
        }else if(this.game==5){
            this.logo='http://127.0.0.1:3000/img/xtb/ls.png'
        }else if(this.game==6){
            this.logo='http://127.0.0.1:3000/img/xtb/fb.png'
        }else if(this.game==7){
            this.logo='http://127.0.0.1:3000/img/xtb/ms3.png'
        }else if(this.game==8){
            this.logo='http://127.0.0.1:3000/img/xtb/xj.png'
        }
    },
    methods: {
        hrefadd(){
            
            this.$router.push(`/forum_add?game=${this.game}&type=${this.type}`)
        },
        href(e,f){
            f++
            this.axios.get(`http://127.0.0.1:3000/post/see?fid=${e}&clicks=${f}`).then(res=>{
                console.log(res)
            })
            this.$router.push(`/forum_detail?fid=${e}&game=${this.game}&type=${this.type}`)
        }
    },
}
</script>
<style scoped> 
 body{margin:0;padding:0;}
 .xs{
     cursor: pointer;
 }
      #nav{height:100px;width:100%;}
      #main{
          width:100%;
          height:1000px;
          background-image:url('http://127.0.0.1:3000/img/sc_bg.jpg');
          background-position: center -200px;
      }
      #contain{
          width:1400px !important;
          margin:0  auto;
      }
      #contain>h1{
          color:#fff;
          height:50px;
          line-height: 50px;
          font-size:30px;
          font-weight: 500;
          text-align:left;
          margin:50px 0 40px 0;
      }
      #contain>h1>a{
          width:50px;
          height:50px;
          display:block;
          float:left;
          margin-right:10px;
          background-image:url('http://127.0.0.1:3000/img/logo-sc2.png');
          background-repeat:no-repeat;
          background-size: 50px;
      }
      #contain .button{
          display:block;
          width:140px;
          height:36px;
          background:#ffc729;
          color:#000;
          text-align: center;
          line-height: 36px;
          text-decoration: none;
          font-size: 16px;
          font-weight:800;
      }
     span.new_topic{
         display:inline-block;
         position:relative;
         top:5px;
         width:24px;
         height:24px;
         background-image:url('http://127.0.0.1:3000/img/sprite.png');
         background-position: -48px -168px;
     }
     a.button{float:left;}
     .pg{
         text-align: right;
         width:500px;
         float:right;margin-top:7px;}
     .pg>a{
         display:inline-block;
         width:32px;
         height:24px;
         line-height:24px;
         background: rgba(255,255,255,0.1);
         color: rgba(255,255,255,0.5);
         text-decoration: none;
         margin-right:5px;
         vertical-align:bottom; 
         text-align: center;     
    }
    a.selected,.pg>a.selected:hover{
        background:#f8b700;
        color:#000;
    }
    .pg>a:hover{
        background:rgba(255,255,255,0.2);
        color:rgba(255,255,255,0.8);
    }
     a.prev,a.next{
         width:66px;
     }
     .pg>input{
         width:25px;
         height:18px;
         text-align: center;
     }
     .pg>span{
         color:rgba(255,255,255,0.5);
         margin-left:5px;
         letter-spacing:3px;
     }
     .clear{
         clear:both;
     }
     .thead{
         width:100%;
         height:60px;
         background:rgba(0,0,0,0.2);
         margin-top:25px;
         border-top:1px solid rgba(255,255,255,0.2);
         border-bottom:1px solid rgba(255,255,255,0.2);
     }
     .thead>div,.forum_list>li>div{float:left;color:rgba(255,255,255,0.7);padding:0;}
     .forum_list{
         list-style: none;
         padding:0;
         margin:0;
     }
     .forum_list>li{
         width:100%;
         height:60px;
         border-bottom:1px solid rgba(255,255,255,0.2);
        
     }
     #title{
         width:720px;
         height:60px;
         line-height:60px;
         text-align:left;
         margin-left:40px;
         }
     .title{
         width:760px;
         height:60px;
         line-height:60px;
         text-align:left;
         }
      .thead .title{
          width:750px;
          padding-left:50px;
      }
     #author,.author{
         width:120px;
         height:60px;
         line-height: 60px;
         text-align:left;
     }
     #reply,#watch,.reply,.watch{
         width:80px;
         height:60px;
         line-height: 60px;
     }
     #last,.forum_list>li>div.last{
         width:300px;
         height:60px;
         line-height: 60px;
         float:right;
         text-align: right;
         padding-right:12px;
     }
     .title>img{
       margin-left:25px;
       vertical-align: text-bottom;
       margin-right:15px;
     }
</style>