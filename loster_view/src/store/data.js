import {get_cate, get_websiteInfo} from '../api/index'
export default{
  namespaced: true,
  actions:{
    get_menu(context, value){
      get_cate().then(response =>{
        if(response.data.code === '1'){
          context.state.menu_data = response.data.data
          sessionStorage.setItem('menu_data',JSON.stringify(context.state.menu_data))
        }
      }).catch( ()=> {
        if(response.data.code == 1){
          console.log('请求出错了')
        }
      })
    },

    get_info(context, value){
      get_websiteInfo().then( res => {
        if(res.data.code === '1'){
          context.state.info_data = res.data.data
          sessionStorage.setItem('info_data',JSON.stringify(context.state.info_data))

        }
      }).catch(() => {
        
      })

      
    }
  },

    mutations:{
        
    },

    state:{
      menu_data:'这是一个初始值',
      info_data:''
    },
}