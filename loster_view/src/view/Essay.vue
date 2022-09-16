<template>

<el-row>
    <el-col class="essay" :xs="24" :sm="24" :md="14" :lg="13" :xl="11" >

    <el-card class="box">
    <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>编程语言</el-breadcrumb-item>
    <el-breadcrumb-item>js</el-breadcrumb-item>
    </el-breadcrumb>

    <el-skeleton :rows="6" animated/>
    </el-card>

    <el-card class="box">
    <p class="text"></p>
    <el-row> <i class="el-icon-view">1123</i> <i class="bi-hand-thumbs-up">1111</i> <i class="el-icon-chat-round">1341</i> </el-row>
    
    </el-card>

    <Comment :comments="comments"></Comment>

    </el-col>

    <el-col class="some-info"  :xs="24" :sm="24" :md="{span:5,marginLeft:'15px'}" :lg="4" :xl="4" >
    <el-card></el-card>
    </el-col>

    </el-row>

</template>

<script>
  import Comment from '../components/Comment.vue'
  export default {
    name:'essay',
    data(){
      return {
        comments:[
          {
            commenter:'玛玛哈哈',
            comment_date:'2022-9-15',
            comment_content:'这主题真不错，我主人娜可露露很喜欢'
          }
        ]
      }
    },
    components: {
      Comment
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