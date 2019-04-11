<template>
    <div id="main">
        <div id="contain">
            <table></table>
            <h1><a href="#" :style="'background-image:url('+logo+')'"></a>{{forum[0].title}}</h1>
            <div class="pgs">
                <a href="#hf" class="button">回复</a>
                <a href="javascript:;" class="button2" @click='href'>返回列表</a>
                <div class="clear"></div>
            </div>
            <div class="host">
                <div class="head">
                    <img src="http://127.0.0.1:3000/user/1.jpg" alt="">
                    <a href="#">{{forum[0].uname}}</a>
                </div>
                <div class="middle">
                    <p>{{forum[0].contant}}</p>
                </div>
                <div class="foot">
                    <span>楼主</span>
                    <p>{{forum[0].time}}</p>
                </div>
            </div>
            <div class='clearF'></div>
            <div class="floor" v-for="(item,i) of comments">
                 <div class="head">
                     <img src="http://127.0.0.1:3000/user/1.jpg" alt="">
                     <a href="#">{{item.uname}}</a>
                 </div>
                 <div class="middle">
                     <p>{{item.contant}}</p>
                 </div>
                 <div class="foot">
                     <span>{{i+1}}</span>
                     <sup>#</sup>
                     <p>{{item.time}}</p>
                 </div>
            </div> 
            <div class="clear"></div>
            <div class="reply" id='hf'>
                <div class="reply_left">
                    <p>快速回复</p>
        
                </div>
                <div id="editorElem"></div> 
                <div class="clear"></div>
                <a href="javascript:;" class="button" @click="getContent">提交回复</a>
            </div>  
        </div>
    </div>
</template>
<script>
import {Toast} from "mint-ui"
import '../assets/util.js'
import E from 'wangeditor'
import Qs from 'qs'
export default {
    name: 'editor',
    data(){
       return{
           forum:[{title:''}],
           comments:[],    
           editorContent: '',
           fid:this.$route.query.fid,
           edi:'',
           game:this.$route.query.game,
           logo:''
       }
    },
    created(){
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
        window.scrollTo(0,0)
        this.axios.get(`http://127.0.0.1:3000/post/getforumlist?fid=${this.fid}`)
        .then(res=>{
            let date=new Date(res.data[0].time*1000);
            res.data[0].time=date.format('yyyy-MM-dd hh:mm:ss');
            this.forum=res.data;
            this.fid=this.forum[0].fid;
        }),
            this.axios.get(`http://127.0.0.1:3000/comment/getcomment?fid=${this.fid}`)
        .then(res=>{
            for(var item of res.data){
                let date=new Date(item.time*1000);
                item.time=date.format('yyyy-MM-dd hh:mm:ss');  
            }
            this.comments=res.data;
        })
    },
    methods:{
        href(){
            this.$router.push(`/forum_list?game=${this.$route.query.game}&type=${this.$route.query.type}`)
        },
        getContent: function () {
            if(sessionStorage['user'] ){
                var content=this.editorContent.slice(3,-4);
                if(content==''){
                    Toast("评论内容不能为空");
                    return
                }
                var timestamp = parseInt((new Date()).getTime()/1000); 
                var param={fid:this.fid,uname:sessionStorage['user'],contant:content,time:timestamp};
                this.axios.post(`http://127.0.0.1:3000/comment/sendcomment`,Qs.stringify(param),
                {headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                })
                .then((res)=>{
                    let date=new Date(param.time*1000)
                    param.time=date.format('yyyy-MM-dd hh:mm:ss');  
                    this.comments.push(param)
                    $('p:last').html('')
                })
            }else{
                this.$router.push('/Login')
            }
        },
    },
    mounted() {
        var editor = new E('#editorElem')
        editor.customConfig.onchange = (html) => {
          this.editorContent = html
        }
       editor.create()
    },
    


}
</script>
<style scoped>
    .clearF{
        clear: both;
    }
      body{margin:0;padding:0;}
      #nav{height:100px;width:100%;}
      a{text-decoration: none;}

      #main{
          width:100%;
          background:url('http://127.0.0.1:3000/img/sc_bg.jpg') no-repeat fixed;
          background-position: center -200px;
      }
      #contain{
          margin:0 40px 0 60px;max-width: 1600px;
      }
      #contain>h1{
          color:#fff;
          height:50px;
          line-height: 50px;
          text-align:left;
          font-size:30px;
          font-weight: 500;
          margin:50px 0 30px 0;
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
          font-size: 16px;
          font-weight:800;
      }
     a.button{float:left;} 
     .clear{
         clear:both;
     }
     .pgs{
         margin-bottom:26px;
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
     .title{
         width:800px;
         height:60px;
         line-height:60px;
        
         }
      .thead .title{
          width:750px;
          padding-left:50px;
      }
     .author{
         width:150px;
         height:60px;
         line-height: 60px;
     }
     .reply,.watch{
         width:80px;
         height:60px;
         line-height: 60px;
     }
     .last{
         width:300px;
         height:60px;
         line-height: 60px;
         float:right;
         text-align: right;
     }
     .title>img{
       margin-left:25px;
       vertical-align: text-bottom;
       margin-right:15px;
     }
     .button2{
         display:block;
         width:80px;
         height:24px;
         line-height: 24px;
         color:rgba(255,255,255,.5);
         background:rgba(255,255,255,.1);
         text-align:center;
         font-size:0.9rem;
         float:right;
         transition:all 0.5s;
     }
     .button2:hover{
         background:rgba(255,255,255,.3);
         color:rgba(255,255,255,.8)
     }
     .floor{
         width:100%;
         min-height:150px;
         border-top:1px solid rgba(255,255,255,.2);
         border-bottom:1px solid rgba(255,255,255,.2);
     }
     .head{
         height:110px;
         width:240px;
         float:left;
         padding:25px 0 0 0;
     }
     .head>img{
         height:78px;
         width:78px;
         border:1px solid #000;
         vertical-align: top;
         float:left;
     }
     .head>a{
         color:rgba(255,255,255,.5);
         margin-left:13px;
         float:left;
     }
     .middle{
         width:940px;
         height:150px;
         float:left;
         padding:25px 0 0 25px;
     }
     .middle>p{
         margin:0;
         color:rgba(255,255,255,.9);
         line-height:1.8rem;
         text-align:left;
     }
     .foot{
         color:rgba(255,255,255,.8);
         width:138px;
         height:150px;
         float:right;
     }
     .foot>span{
         margin-left:100px;
     }
     .foot>p{
         font-size:.8rem;
         margin-top:0;
     }
     .reply{
         width:100%;
         height:480px;
         background:rgba(255,255,255,.05);
     }
     .reply_left{
         margin-top:40px;
         width:20%;
         float:left;
         color:#fff;
     }
     .reply_left>img{
         width:78px;
         height:78px;
         vertical-align:text-top;
     }
     .reply_left>p{
         font-size:1.5rem;
         font-weight:bold;
     }
     .reply_left>span{
        font-size:0.9rem;
        margin-left:5px;
     }
     #editorElem{
         margin-top:50px;
         text-align:left;
         color:#fff;
         width:75%;
         float:right;
         margin-right:20px;
     }
     .reply>a{
         margin-left:331px;
         margin-top:12px;
     }
</style>