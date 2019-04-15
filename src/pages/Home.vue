<template>
	<div>
	  <header-com v-bind:loginInfo = "loginInfo"></header-com>
	  <router-view></router-view>
	  <p class="test">{{msg}}</p>
	  <!--<p class="test">showFooter的值为：{{$store.state.showFooter}}</p>
	  <p class="test">schangeableNum的值为：{{$store.state.changeableNum}}</p>
	  <button class="btn"  @click="showFooter()">改变showFooter值</button>
	  <button class="btn"  @click="schangeableNum()">改变schangeableNum值</button>-->
	  <footer-com v-bind:loginInfo = "loginInfo" v-on:order="currentIndex"></footer-com>
	</div>
	
</template>

<script>
import HeaderCom from "@/components/Header"
import FooterCom from "../components/Footer"
export default {
	components:{
		 FooterCom,
		 HeaderCom
	},
  data(){
  	return {
  		title : "",
  		loginInfo:{},
  		list:[],
  		number1:'',
  		number2:'',
  		number3:'',
  		number4:'',
  		buildingList:[],
  		msg:''
  	}
  },
  created(){
  	console.log(this.$store.state.showFooter)
    var param = this.$route.query;
    this.msg = '还没有传值哦'
    this.loginInfo = {username:sessionStorage.getItem("username"),title:'信息系统'}     
  },
  methods:{
  	currentIndex(i){
  		var that = this
  		this.msg = i
  	},
  	showFooter(){
  		var that = this
//		that.$store.commit('show') 
  		this.$store.dispatch('showFooter')
  		console.log(this.$store.state.showFooter)
  	},
  	schangeableNum(){
  		var that = this
  		that.$store.commit('newNum') 
  		console.log(this.$store.state.changeableNum)
  	},
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.splitLine{
	 background-color:#efefef;
     height:10px;
}
.topbar,.list1,.list2,.recommend{
	padding:30px 50px;
}

.topbar{
	display:flex;
	justify-content:center;
	align-items:center;
}
.topbar>input{
	width:500px;
	height:40px;
	border-radius:4px;
	outline:none;
	box-shadow: none;
}
.topbar>p{
	margin-left:20px;
	color:white;
	background-color: #00aeff;
	width:80px;
	height:40px;
	line-height:40px;
	border-radius:4px;
}
.list1,.list2{
	display:flex;
	justify-content:space-between ;
	algin-items:center;
	flex-wrap:wrap;
}
.list1>div{
	width:80px;
	height:80px;
	line-height:80px;
	border-radius:4px;
	font-size:30px;
	color:white;
}
.list1>div:nth-of-type(1){
background-color: #52a0f2;
}
.list1>div:nth-of-type(2){
background-color: #fd8a5b;
}
.list1>div:nth-of-type(3){
background-color: #ffb053;
}
.list1>div:nth-of-type(4){
background-color: #00c682;
}
.list2>div{
	width:80px;
	height:80px;
	line-height:80px;
	border-radius:50%;
	border:1px solid #00aeff;
}
.list2>div>img{
	width:100%;
	height:100%;
}
.recommend{
	display:flex;
	justify-content:space-between ;
	algin-items:center;
	flex-wrap:wrap;
}
.recommend>div{
	width:300px;
	height:200px;
	margin-bottom:20px;
}
.recommend>div>img{
	width:100%;
	height:100%;
}
.test{
	padding-bottom:30px;
}
.btn{
	padding-bottom:30px;
}

</style>
