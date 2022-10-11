<template>

<el-drawer title="我是标题"  :visible.sync="drawer" :with-header="false" :style="{transition:'none'}" size="240px">
<div class="head">
 <el-avatar :size="85"  @error="errorHandler" :style="{background:'url('+')'}">

    </el-avatar>
<div class="some-info">
     <h2>{{websiteInfo.author}}<br><span>{{websiteInfo.motto}}</span></h2>
    <p>
    <i class="el-icon-aim"></i>
    <i class="el-icon-mobile-phone"></i>
    <i class="el-icon-folder-remove"></i>
    </p>
</div>
</div>

<el-collapse accordion>
    <!-- hasChildren -->
    <el-collapse-item v-for="item in hasChildren" :key="item.label">
    <template slot="title">
    <p><i :class="item.icon"></i>{{item.first_cate_name}}</p>
    </template>

    <router-link v-for="sub_item in item.children" :key="sub_item.label" 
    :to="{name:'cates',query:{first_cate_id:sub_item.first_cate_id,first_cate_name:sub_item.first_cate_name,
        second_cate_id:sub_item.second_cate_id,second_cate_name:sub_item.second_cate_name}}"> 
    <div class="sub-item" @click="drawer = false">
    {{sub_item.second_cate_name}}
    </div>
    </router-link>
    </el-collapse-item>

    <!-- noChildren -->
    <el-collapse-item class="noChildren" v-for="item in noChildren" :key="item.label" @click="drawer = false">
    <template slot="title">
    <p><i :class="item.icon"></i>{{item.first_cate_name}}</p>
    </template>
    </el-collapse-item>

</el-collapse>

</el-drawer>

</template>

<script>

export default {
    data() {
        return {
        
        drawer:false,
        websiteInfo:[],
        menu:[]
        }
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
    this.websiteInfo = JSON.parse(sessionStorage.getItem('info_data'))[0]
    this.menu = JSON.parse(sessionStorage.getItem('menu_data'))
   
    // 全局事件总线传递
    this.$bus.$on('drawer',(data) => {
            this.drawer = data
    })
   
},

methods: {
    errorHandler() {
    return true
    }
},

// 在组件销毁之前 解除占用事件
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
    font-size:17px;
    margin-left: 15px;
    letter-spacing:5px;
    padding-left: 10px;
}
.sub-item{
    font-size:15px;
    text-align:left;
    padding:10px 15px;
    border-radius: 9px;
    background: #ffffff;
    box-shadow:  6px 6px 12px #858585,
             -6px -6px 12px #ffffff;
    width: 70%;
    margin: 10px;
}
/deep/.noChildren i{
    display: none;
}
</style>