<template>

<el-drawer title="我是标题" style="padding:'10px'" :visible.sync="drawer" :with-header="false" :style="{transition:'none'}" size="240px">
<div class="head">
 <el-avatar :size="85" src="https://empty" @error="errorHandler" :style="{background:'url('+info.avatar+')'}">

    </el-avatar>
<div class="some-info">
     <h2>{{info.author}}<br><span>{{info.motto}}</span></h2>
    <p>
    <i class="el-icon-aim"></i>
    <i class="el-icon-mobile-phone"></i>
    <i class="el-icon-folder-remove"></i>
    </p>
</div>
</div>

<el-collapse accordion>
  <el-collapse-item v-for="item in hasChildren" :key="item.label">
    <template slot="title">
     <p><i :class="item.icon"></i>{{item.label}}</p>
    </template>
    <div v-for="sub_item in item.children" :key="sub_item.label">{{sub_item.label}}</div>
  </el-collapse-item>
  
  <el-collapse-item v-for="item in noChildren" :key="item.label">
    <template slot="title">
     <p><i :class="item.icon"></i>{{item.label}}</p>
    </template>
  </el-collapse-item>

</el-collapse>

</el-drawer>

</template>

<script>
import {headerData} from '../api/data'
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
export default {
     data() {
      return {
        drawer:false,
        info:{
            avatar:require('../assets/bg2.jpg'),
            author:'loster',
            back:'当恩怨各一半，我该怎么圈览,当灯笼血红染，寻仇已太晚',
            motto:'行者常至，为者常成!'
            },
        title: '',
        menu:['1']
        
        
      };
    },
computed:{
    noChildren(){
        return this.menu.filter(item => !item.children)
    },
    hasChildren(){
        return this.menu.filter(item =>  item.children)
    },
}, 
mounted() {
    // 全局事件总线传递
    this.$bus.$on('drawer',(data) => {
            this.drawer = data
    })
   
    const x = {...mapState('data',['headerData'])}
    console.log(x,'wwwwwww')
    console.log(this.$store.module)
    headerData().then(res =>{
        const {code,data} = res.data
        if(code == 0){
            let {menu,title} = data
            this.menu = menu
            this.title = title
        }
    })},

     methods: {
      errorHandler() {
        return true
      }
    },
  
    // 在组件销毁之前 解除占用 hello 事件
    beforeDestroy() {
        this.$bus.$off('drawer') // 解绑vm	上挂载的事件
    }
    }
</script>

<style lang="less" scoped>

/deep/ .el-drawer__body{
    padding: 10px;
}
.el-avatar {
    background-size: cover !important;
    background-position: center !important;
    background-repeat: no-repeat !important;
}
.head{
    display:flex;
    flex-direction:column;
    justify-content:start;
    align-items:center;
    margin-top: 30px;
} 
.head .some-info{
    margin-top: 10px;
    line-height:25px;
    span{
        font-size:12px;
        font-weight:500;
        text-align:center;
    }
    p{
        display:flex;
        justify-content:space-between;
        margin-top: 20px;
    }
    p i{
        font-size:20px;
    }
}
.el-collapse{
    padding:0 5px 0 10px;
    margin-top: 20px;
}
.el-collapse p{
    font-weight: 800;
}

</style>