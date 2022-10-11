<template>

<el-row class="essay-box">
    <el-col class="essay" :xs="24" :sm="24" :md="14" :lg="13" :xl="11" style="margin-top:15px">

    <Tags :tags="tags"/>

    <el-card class="box">
    
    <!-- markdown容器 -->
    <markdown :html="markdown" :essayData="essayData" />

    <!-- <el-row class="some-info"> 
    <i class="el-icon-view">1123</i> 
    <i class="bi-hand-thumbs-up">1111</i> 
    <i class="el-icon-chat-round">1341</i>
    </el-row> -->
    
    </el-card>

    <Comment :comments="comments"></Comment>

    </el-col>

   
    <SlideBar/>

    </el-row>

</template>

<script>
  import {get_essay} from '../api/index'
  import {marked} from 'marked'

  export default {
    name:'essay',
    components: {
      Comment:()=> import('../components/Comment.vue'),
      Markdown:() => import('../components/Markdown.vue'),
      Tags:()=> import('../components/Tags.vue'),
      SlideBar:()=> import('../components/SlideBar.vue'),
    },
    data(){
      return {
        viewer:null,
        essayData:this.$route.params,
        tags:this.$route.query,
        markdown:'',
        comments:[
          {
            commenter:'loster(作者)',
            comment_date:'2022-10-05',
            comment_content:'欢迎发表评论'
          }
        ]
      }
    },
    methods:{
    },
    mounted() {
      const essay_id = this.$route.query.essay_id
      const param ={
        essay_id: essay_id
      }
      get_essay(param).then(response => {
        this.essayData = response.data.data[0]
        // markdown转为html
        this.markdown = marked(this.essayData.content)
      })

    },
    activated(){
      this.essayData = this.$route.params
       // markdown转为html
      this.markdown = marked(this.essayData.content)
      this.tags = this.$route.query
    }
  
  }
</script>

<style lang="less" scoped>

.essay-box{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 80px;
  padding: 0 10px;
}

.some-info{
  line-height:30px;
  font-size: 30px;
  
}
</style>