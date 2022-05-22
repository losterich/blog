<template>

<a href="#top">
    <el-card class="up" shadow="always" :body-style="{padding:0,paddingTop:'3px',paddingRight:'1px',}">
    <i class="el-icon-top"></i>
    </el-card>
</a>

</template>  
<script>
export default {
name:'BackTop',
    mounted() {
    // 页面滚动，返回顶部效果
    window.addEventListener('scroll',function() {
        console.log('ofiuerhui')
        const up = document.querySelector('.up')
        // 返回顶部的隐藏与显示
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        up.classList.toggle("hidden",scrollTop > 500)
    })
    },
}

</script>
<style lang="less" scoped>
.el-card{
    position:fixed;
    top: 85%;
    right:10px;
    line-height:25px;
    text-align:center;
    font-size:40px;
    transform: translate(150%,0)
}

.el-card.hidden{
    transform: translate(0,0)
}

a{
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    -webkit-user-select: none;
    -moz-user-focus: none;
    -moz-user-select: none;
}
</style>
