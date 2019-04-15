<template>
	<div>
	<div class="demo-input-suffix">
      <el-input
	    placeholder="请输入楼盘区域"
	    v-model="region">
	    <i slot="prefix" class="el-input__icon el-icon-search"></i>
	  </el-input>
	  <el-input
	    placeholder="请输入楼盘状态"
	    v-model="state">
	    <i slot="prefix" class="el-input__icon el-icon-search"></i>
	  </el-input>
	  <el-button type="primary" @click="commit" icon="el-icon-search">搜索</el-button>
	</div>
	<el-table
        :data="$store.state.buildlist"
	    stripe
	    style="width: 100%">
    <el-table-column
	      prop="estatename"
	      label="楼盘名字"
	      width="180">
    </el-table-column>
    <el-table-column
	      prop="saletime"
	      label="销售时间"
	      width="180">
    </el-table-column>
    <el-table-column
	      prop="estateaddr"
	      label="地址">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="200">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
  <div class="block">
    <span class="demonstration">完整功能</span>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
  </div>
  </div>
</template>

<script>
export default {
    data() {
      return {
        tableData: [],
        region:'',
        state:''
      }
    },
    created(){   	
    	this.$store.dispatch('queryBuildList')
    },
    methods:{
    	commit(){
    		 this.$store.commit('stateJisuan',this.state)
    		 this.$store.commit('regionJisuan',this.region)
    		 console.log(this.$store.region,this.$store.state)
    		 this.$store.dispatch('queryBuildList')
    	}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.demo-input-suffix{
	display:flex;
	justify-content:space-around ;
	align-items:center;
	padding:30px;
}
.demo-input-suffix>input{
	width:100px;
	display:block;
}
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
</style>
