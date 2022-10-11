<template>
    <div class="header">
    <div class="left">
    <router-link to="/" class="index">
    <div class="logo">
    {{websiteInfo.website_name}}
    </div>
    </router-link>
    </div>

    <div class="right">
    <div class="menu hidden-md-and-up" @click="drawer()">
    <i class="bi-list-ul"></i>
    </div>


    <div class="dropdown hidden-sm-and-down">
    <!-- noChildren -->
    <el-dropdown v-for="item in noChildren" :key="item.path">
    <span class="el-dropdown-link">
    <i :class="item.icon"></i>{{item.first_cate_name}}<i class=" el-icon--right"></i>
    <hr>
    </span>
    </el-dropdown>

    <!-- hasChildren -->
    <el-dropdown v-for="item in hasChildren" :key="item.path">
    <span class="el-dropdown-link">
    <i :class="item.icon"></i>{{item.first_cate_name}}<i class="el-icon-arrow-down el-icon--right"></i>
    <hr>
    </span>
    <el-dropdown-menu slot="dropdown" >
    <router-link 
    v-for="(sub_item) in item.children"  
    :to="{name:'cates',query:{first_cate_id:sub_item.first_cate_id,first_cate_name:sub_item.first_cate_name,
        second_cate_id:sub_item.second_cate_id,second_cate_name:sub_item.second_cate_name}}"> 
        <el-dropdown-item 
        :icon="sub_item.icon" 
        :key="sub_item.path">{{sub_item.second_cate_label}}
        </el-dropdown-item>
    </router-link>
    </el-dropdown-menu>
    </el-dropdown>

    </div>
    </div>

    </div>

</template>

<script>


export default {
name: 'Header',
components: {
    Drawer:()=>import('../components/Drawer.vue'),
},
data() {
    return {
        title: '',
        menu:[],
        websiteInfo:[]
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

    this.meun
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
        this.$bus.$emit('drawer', drawer)
    },   
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