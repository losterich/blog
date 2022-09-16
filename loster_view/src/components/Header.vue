<template>
    <div class="header">
    <div class="left">
    <router-link to="/" class="index">
    <div class="logo">
    {{title}}
    </div>
    </router-link>
    </div>

    <div class="right">
    <div class="menu hidden-md-and-up" @click="drawer()">
    <i class="bi-list-ul"></i>
    </div>


    <div class="dropdown hidden-sm-and-down">
    <el-dropdown v-for="item in noChildren" :key="item.path">
    <span class="el-dropdown-link">
    <i :class="item.icon"></i>{{item.label}}<i class=" el-icon--right"></i>
    <hr>
    </span>
    </el-dropdown>

    <el-dropdown v-for="item in hasChildren" :key="item.path">
    <span class="el-dropdown-link">
    <i :class="item.icon"></i>{{item.label}}<i class="el-icon-arrow-down el-icon--right"></i>
    <hr>
    </span>
    <el-dropdown-menu slot="dropdown" >
    <router-link :to="{name:'cates',param:''}"> <el-dropdown-item :icon="sub_item.icon" v-for="(sub_item) in item.children" :key="sub_item.path">{{sub_item.label}}</el-dropdown-item></router-link>
    </el-dropdown-menu>
    </el-dropdown>

    </div>
    </div>

    </div>

</template>

<script>
// 数据
import {headerData} from '../api/data'
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'


// 组件
import Drawer   from './Drawer.vue'
export default {
name: 'Header',
components: {
    Drawer
},
data() {
    return {
        title: '',
        menu:['1']
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
    })
        
    // 页面滚动，导航栏效果
    window.addEventListener('scroll', function () { 
        // 透明度变化
        const header = this.document.querySelector('.header')
        header.classList.toggle("opacityChange", this.scrollY > 0)
        
        // 导航栏的隐藏与显示
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        let scroll = scrollTop - this.to
        this.to = scrollTop;
        header.classList.toggle("hidden", !(scroll < 0))
    })
},

methods: {
    // 全局事件总线，事件发布
    drawer(){
        let drawer = true
        this.$bus.$emit('drawer',drawer)
    }
},
    
}
</script>

<style lang="less" scoped>
.header.hidden{
    transform: translate(0,-100%);
}
.header.opacityChange{
    background: #212121;    
}
.header{
    color: white;
    padding:0 20px 0 20px;
}
.el-dropdown{
    height: 45px;
    line-height:45px;
    margin-left:40px;
    color: white;
    font-size: 17px;
}

.el-dropdown-menu {
    position:relative;
    top:42px !important;
    
}

.el-dropdown-link {
    cursor: pointer;
    position:relative;
    
}
.el-dropdown-link hr{
    height: 4px;
    width: 0px;
    background: #16ADF7;
    border:none;
    position:absolute;
    top: 24px;
}
.el-dropdown-link:hover hr{
    width:100%;
   
}

.el-icon-arrow-down {
    font-size: 12px;
    
}

.logo{
    font-size:30px;
    color:white;
}
.index{
     text-decoration: none;
}

.menu{
    padding-top:5px;
    font-size:40px;
}

.header{
    display: flex;
    justify-content: space-between;
}

span i:nth-child(1){
    margin-right: 5px ;
    font-size:17px;

}

span i:nth-child(2){
    font-size: 20px !important;
    position: relative;
    top: 3px;
    font-weight:1000 !important;
}




.el-dropdown-link:hover  i{
    transform:rotate(180deg);
    transition: all .4s;
}

</style>