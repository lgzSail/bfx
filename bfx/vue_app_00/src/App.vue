<template>
 <div class="app-container" id='#app'>
    <router-view></router-view>
</div>
</template>
<style>
@media (min-width: 1200px){
.container{
  max-width:1600px;
}
}
   .app-container{
     padding-top:0px;
     padding-bottom:0px;
     overflow-x:hidden;
     background:#002650;
   }

 .mui-bar-tab .mui-tab-item-tao.mui-active {
    color: #007aff;
 }
.mui-bar-tab .mui-tab-item-tao {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item-tao .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}

.mui-bar-tab .mui-tab-item-tao .mui-icon~.mui-tab-label {
   font-size:11px;
   display:block;
   overflow:hidden;
   text-overflow:ellipsis;

}
.ul_list>ul>li{
    font-size:17px;
    color:#ddd;
}
footer{
    background:#002650;
}
.ul_list>ul>li i,.ul_list~div span{
    display:inline-block;
    padding:0 10px 0 8px;
    font-size: 5px;
    color: #4D6885 !important;
}
.ul_list~div{
    font-size: 14px;
    color:#4D6885;
}
.im>ul li>img{
    padding-right: 15px;
}
.im>ul>li:last-child>img{
    width:45px;
}
</style>
