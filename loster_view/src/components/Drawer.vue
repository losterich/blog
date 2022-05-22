<template>

<el-drawer title="我是标题" :visible.sync="drawer" :with-header="false" :style="{transition:'none'}" size="230px">
  <span>我来啦!1111</span>
</el-drawer>



</template>

<script>
export default {
     data() {
      return {
        drawer:false,
      };
    },
    mounted(){
        this.$bus.$on('drawer',(data) => {
            this.drawer = data
            console.log(this.drawer+'为什么')
            console.log(this)
        })
    },
    // 在组件销毁之前 解除占用 hello 事件
    beforeDestroy() {
        this.$bus.$off('drawer') // 解绑vm	上挂载的事件
    }
    }
</script>

<style lang="less" scoped>
.el-drawer{
  
}


</style>