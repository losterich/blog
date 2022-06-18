import axios from '../api/axios'

export default{
    namespaced: true,
    actions:{
    
    headerData (context,param){
       context.commit('headerData',axios.request({
        url: '/api/header',
        method: 'post',
        data: param ,
    }))
    console.log(axios,'wqwqw')
    }
    },
    mutations:{
        headerData (state,value){
            state.headerData = value
        }
    },
    state: {
        headerData:'',
    },
    getters: {
        data(state){
            return state
        }
    },
}