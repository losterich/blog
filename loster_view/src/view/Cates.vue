<template>

<el-row>

<el-col :xs="23" :sm="23" :md="15" :lg="13" :xl="11"  style="margin-top:15px">

<el-card class="box">
<el-breadcrumb separator-class="el-icon-arrow-right">
<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
<el-breadcrumb-item>编程语言</el-breadcrumb-item>
<el-breadcrumb-item>js</el-breadcrumb-item>
</el-breadcrumb>
</el-card>

<el-card class="essaybox"  shadow="never" :body-style="{padding:'8px'}">
<EssayBar></EssayBar>
</el-card>
</el-col>


<SlideBar></SlideBar>
</el-row>


</template>

<script>
import EssayBar from "../components/EssayBar.vue"
import SlideBar from "../components/SlideBar.vue"
export default {
    components: {
        EssayBar,
        SlideBar,
    }
}
</script>

<style lang="less" scoped>
.el-row{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 80px;
}
.box{
  margin-bottom:5px;
}
</style>