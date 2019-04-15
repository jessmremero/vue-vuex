import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
Vue.use(Vuex);

const state={
	showFooter:true,
	changeableNum:0,
	userName:"",
	buildlist:[],
	state:-1,
	region:'全部区域'
}
const getters = {   //实时监听state值的变化(最新状态)
    isShow(state) {  //承载变化的showFooter的值
       return state.showFooter
    },
    getChangedNum(state){  //承载变化的changebleNum的值
       return state.changableNum
    },
    getUserName(state){
       return state.userName
    },
    getBuildList(state){
       return state.buildlist
    }
};
const mutations = {
    show(state) {   //自定义改变state初始值的方法，这里面的参数除了state之外还可以再传额外的参数(变量或对象);
        state.showFooter = !state.showFooter;
    },
    hide(state) {  //同上
        state.showFooter = false;
    },
    newNum(state,sum){ //同上，这里面的参数除了state之外还传了需要增加的值sum
       state.changableNum = 2
    },
    login(state,payload){
    	state.userName = payload
    },
    logout(state,payload){
    	state.userName =""
    },
    queryBuildList(state,payload){
    	state.buildlist = payload
    },
    stateJisuan(state,payload){
    	state.state = payload
    },
    regionJisuan(state,payload){
    	state.region = payload
    }
};
const actions = {
    hideFooter(context) {  //自定义触发mutations里函数的方法，context与store 实例具有相同方法和属性
        context.commit('hide');
    },
    showFooter(context) {  //同上注释
        context.commit('show');
    },
    getNewNum(context,num){   //同上注释，num为要变化的形参
        context.commit('newNum',num)
    },
    login(context,payload){
    	context.commit('login',payload)
    },
    logout(context){
    	context.commit('logout')
    },
    queryBuildList(context,payload){
		axios.get('https://www.hzfc.xyz/estateinfo/find',{
		params:{
		   region:context.state.region,
		   state:context.state.state
		}
  		})
  		.then(function(res){
           context.commit('queryBuildList',JSON.parse(res.data.data.data))
           console.log(context.state.buildlist)
  		})
  		.catch(function(error){
  			console.log(error)
  		})
    }
};
const store = new Vuex.Store({
	state,
	getters,
	mutations,
	actions
});
 
export default store;