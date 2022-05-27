<template>
  <div class="header">
        <div class="left">
           <router-link to="/" class="index">
            <div class="logo">
                dzbook
            </div>
           </router-link>
        </div>

        <div class="right">
            <div class="menu hidden-md-and-up" @click="drawer()">
                <i class="bi-list-ul"></i>
            </div>

           
            
        <div class="dropdown hidden-sm-and-down">
                        <el-dropdown >
            <span class="el-dropdown-link">
                下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
                    <el-dropdown-item>狮子头</el-dropdown-item>
                    <el-dropdown-item>螺蛳粉</el-dropdown-item>
                    <el-dropdown-item>双皮奶</el-dropdown-item>
                    <el-dropdown-item>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
            </el-dropdown>

               <el-dropdown>
            <span class="el-dropdown-link">
                下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>黄金糕</el-dropdown-item>
                    <el-dropdown-item>狮子头</el-dropdown-item>
                    <el-dropdown-item>螺蛳粉</el-dropdown-item>
                    <el-dropdown-item>双皮奶</el-dropdown-item>
                    <el-dropdown-item>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
            </el-dropdown>

               <el-dropdown>
            <span class="el-dropdown-link">
                下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>黄金糕</el-dropdown-item>
                    <el-dropdown-item>狮子头</el-dropdown-item>
                    <el-dropdown-item>螺蛳粉</el-dropdown-item>
                    <el-dropdown-item>双皮奶</el-dropdown-item>
                    <el-dropdown-item>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
            </el-dropdown>

               <el-dropdown>
            <span class="el-dropdown-link">
                下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>黄金糕</el-dropdown-item>
                    <el-dropdown-item>狮子头</el-dropdown-item>
                    <el-dropdown-item>螺蛳粉</el-dropdown-item>
                    <el-dropdown-item>双皮奶</el-dropdown-item>
                    <el-dropdown-item>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
            </el-dropdown>

               <el-dropdown>
            <span class="el-dropdown-link">
                下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
                    <el-dropdown-item>狮子头</el-dropdown-item>
                    <el-dropdown-item>螺蛳粉</el-dropdown-item>
                    <el-dropdown-item>双皮奶</el-dropdown-item>
                    <el-dropdown-item>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
            </el-dropdown>
            
            <router-link to="/essay"> 
               <el-dropdown>
               <span class="el-dropdown-link">下拉菜单 </span>
               </el-dropdown>
            </router-link>

        </div>
        </div>

  </div>


  
</template>

<script>
import Drawer   from './Drawer.vue'

export default {
name: 'Header',
components: {
    Drawer
},
data() {
    
},  
methods: {
    drawer(){
        let drawer = true
        this.$bus.$emit('drawer',drawer)
    }
},
    mounted() {       
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
    }
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
    margin-left: 10px;
    color: white;
}

.el-dropdown-menu {
    position:relative;
    top:40px !important;
    
}

.el-dropdown-link {
    cursor: pointer;
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

span i{
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