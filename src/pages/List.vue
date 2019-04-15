<template>
	<div>
	  <div class="index">
	    <div class="recommend">
	    	<div  v-for="item in buildingList" @click="buildingSingle(item.estateid)">
	    		<img :src='item.photourl[0]' alt="" />
	    		<p>{{item.estatename}}</p>
	    	</div>	    	
	    </div>
	  </div>
	  <button @click="back()">返回</button>
	</div>
</template>

<script>

export default {

  data(){
  	return {
  		list:[],
  		buildingList:[]
  	}
  },
  created(){
  	 console.log(this.$route.params)
    var param = this.$route.params;//接受传参
   
    this.queryBuildingInfo('全部区域',param.n)
  },
  methods:{
  	queryBuildingInfo(r,s){
  		var that = this
  		fetch("https://www.hzfc.xyz/estateinfo/find?"+"region="+r+"&"+"state="+s).then(
  			res=>{return res.json()
  			}).then(res=>{
  				console.log(res)
  				that.buildingList = JSON.parse(res.data.data)
  			}).catch(err=>{
  				console.log(err)
  			})
//		this.$axios.get('https://www.hzfc.xyz/estateinfo/find',{
//			params:{
//			   region:r,
//			   state:s	
//			}
//		})
//		.then(function(res){
//			console.log(res) 			
//				that.buildingList = JSON.parse(res.data.data.data)
//				console.log(that.buildingList)
//		})
//		.catch(function(error){
//			console.log(error)
//		})
  	},
  	buildingSingle(id){  
  		var that = this
        that.$router.push({name:'Single',params:{id:id}})
  	},
  	back(){
  		var that = this
  		that.$router.go(-1)
  	}
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
button{
	width:100px;
	height:30px;
	line-height:30px;
	color:white;
	background-color:#00aeff;
	border:none;
	outline:none;
	}
</style>
