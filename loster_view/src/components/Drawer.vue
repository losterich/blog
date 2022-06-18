<template>

<el-drawer title="我是标题" style="padding:'10px'" :visible.sync="drawer" :with-header="false" :style="{transition:'none'}" size="240px">
<div class="head">
 <el-avatar :size="85" src="https://empty" @error="errorHandler" :style="{background:'url(https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp2.itc.cn%2Fq_70%2Fimages03%2F20200713%2F1ec56383d2a242028ad4050340ca01ae.jpeg&refer=http%3A%2F%2Fp2.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1657030068&t=959716dd7d0d5c5dc026310e3c4d7973)'}">

    </el-avatar>
<div class="some-info">
     <h2>loster<br><span>行者常至，为者常成!</span></h2>
    <p>
    <i class="el-icon-aim"></i>
    <i class="el-icon-mobile-phone"></i>
    <i class="el-icon-folder-remove"></i>
    </p>
</div>
</div>

<el-collapse accordion>
  <el-collapse-item>
    <template slot="title">
     <p><i class="header-icon el-icon-info"></i> 一致性 Consistency </p>
    </template>
    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
  </el-collapse-item>
 <el-collapse-item>
    <template slot="title">
     <p><i class="header-icon el-icon-info"></i> 一致性 Consistency </p>
    </template>
    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
  </el-collapse-item>
  <el-collapse-item>
    <template slot="title">
     <p><i class="header-icon el-icon-info"></i> 一致性 Consistency </p>
    </template>
    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
  </el-collapse-item>
</el-collapse>

</el-drawer>

</template>

<script>
export default {
     data() {
      return {
        drawer:false,
      };
    },
     methods: {
      errorHandler() {
        return true
      }
    },
    mounted(){
        this.$bus.$on('drawer',(data) => {
            this.drawer = data
        })
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