<template>
  <div>
    <div class="clear"></div>
      <div class="reply" id='hf'>
        <div class="reply_left">
            <input type="text" placeholder="标题" v-model='title'>
        </div>
        <div id="editorElem"></div> 
        <div class="clear"></div>
        <a href="javascript:;" class="button" @click="getContent">发表</a>
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
  data() {
    return {
      editorContent:'',
      title:'',
      game:this.$route.query.game,
      type:this.$route.query.type
    }
  },
  mounted() {
    var editor = new E('#editorElem')
    editor.customConfig.onchange = (html) => {
      this.editorContent = html
    }
    editor.create()
  },
  methods: {
    getContent() {
            if(sessionStorage['user'] ){
                var content=this.editorContent.slice(3,-4);
                if(content==''){
                    Toast("内容不能为空");
                    return
                }
                if(this.title==''){
                  Toast("标题不能为空");
                  return
                }
                var timestamp = parseInt((new Date()).getTime()/1000); 
                var param={
                  uid:sessionStorage['uid'],
                  uname:sessionStorage['user'],
                  title:this.title,
                  contant:content,
                  time:timestamp,
                  game:this.game,
                  type:this.type,
                  clicks:0};
                this.axios.post(`http://127.0.0.1:3000/post/sendforum`,Qs.stringify(param),
                {headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                })
                .then((res)=>{
                    if(res.data.code==200){
                      this.$router.push('/forum_list?game='+this.game+'&type='+this.type)
                    }else{
                      Toast("发表失败");
                    }
                })
            }else{
                this.$router.push('/Login')
            }
        },
  },
}
</script>
<style scoped>
  .button{
    display:block;
    width:140px;
    height:36px;
    background:#ffc729;
    color:#000;
    text-align: center;
    line-height: 36px;
    font-size: 16px;
    font-weight:800;
    margin-top:10px;
  }
</style>