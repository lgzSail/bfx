<template>
  <div>
    <div class='bg border-b'>
      <div class='position-relative banner_f'>
        <img :src="banner" class='h-100 banner_fa position-absolute w-100'>
        <img :src="tb" class=' banner_fa1 position-absolute'>
      </div>
      <div class='container'>
        <div class='row dh3'>
          <div class='col-6 pt-2 h6 font_index line_h '>
            <span class='pr-4' v-for='elem of title'>{{elem.title}}</span>
          </div>
          <div class='offset-1 col-5 text-white'>
            <div class='row'>
                <div class='col-2 pt-2 h6 font_index line_h '>
                  <p classs=''>分组方式</p>
                </div>
                <div class='col-4'>
                  <select id="family-group-by" class='fa-group-by' >
                    <option value="1" active>按类别分组</option>
                    <option value="0">不分组</option>
                  </select>
                </div>
                <div class='col-2 pt-2 h6 font_index line_h '>
                  <p>排序方式</p>
                </div>
                <div class='col-4'>
                  <select id="family-group-by" class='fa-group-by' >
                    <option value="0" >精选</option>
                    <option value="1">价格最低</option>
                    <option value="2" active>价格最高</option>
                    <option value="3">折扣</option>
                    <option value="4">名称</option>
                  </select>
                </div>
            </div>
          
          </div>
        </div>
      </div>
    </div>
    <div class='bg border-b'>
      <div class='container text-white'>
        <div class='row pt-5 pb-5 border-b' v-for='(elem,i) of title' :key="i">
            <div class='col-3'>
              <h2>{{elem.title}}</h2>
              <p class='pt-2'>{{elem.bri}}</p>
            </div>
            <div class='col-9'>
              <div class='row'>
                  <div class='col-4' v-for='(ele,x) of elem.pri' :key="x">
                    <img :src="ele" @click='loa(elem.pid)' class=' xs'/>
                  </div>
              </div>
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
      banner:'',
      title:[{}],
      bri:[],
      pri:{},
      game:this.$route.query.game,
      tb:''
    }
  },
  watch: {
    '$route' (to, from) {
      this.load()
    }
  },
  mounted () {
    this.load()
  },
  methods: {
    loa(e){
      this.$router.push('/shop/detail?pid='+e)
    },
    load(){
      this.title=[{}]
      this.game=this.$route.query.game
      var game=this.game
      var url1='http://127.0.0.1:3000/index/banner?game='+game
      this.axios.get(url1).then(result=>{
        this.banner=result.data[0].banner
        
      })
      var url2='http://127.0.0.1:3000/index/shop?game='+game
      this.axios.get(url2).then(result=>{
        for(var i=0;i< result.data.length;i++){
          this.title[i]={}
          this.title[i].title=result.data[i].title
          this.title[i].bri=result.data[i].bri
        }
      })
      var t3=setInterval(()=>{
        if(this.title[0].title){
          var url3='http://127.0.0.1:3000/index/shop/pri?game='+game
          this.axios.get(url3).then(result=>{
          for(var i=0;i<this.title.length;i++){
            this.title[i].pri=[]
            for (var elem of result.data){
              if(elem.sid==i+1){
                this.title[i].pid=elem.pid
                this.title[i].pri.push(elem.pri)
              } 
            }
          }
          })
          clearInterval(t3)        
        }
      },10)
      
      var t1=setInterval(()=>{
        if(this.title[0].pri){
          var url4='http://127.0.0.1:3000/index/shop/tb?game='+game
          this.axios.get(url4).then(result=>{
            this.tb=result.data[0].tb
          })
          clearInterval(t1)
        }
      },10)
      
    }
  }
}
</script>
<style scoped>
.xs{
  cursor:pointer}
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
.fa-group-by{
  height:35px;background: #02132E;padding:0px 10px 0px;margin-top:3px;
}
.dh3{
  height:43px;
}
</style>