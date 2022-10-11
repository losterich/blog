<template>

<el-row>

<el-col :xs="23" :sm="23" :md="15" :lg="11" :xl="11"  style="margin-top:15px">

<Tags :tags="tags"/>

<el-card class="essaybox"  shadow="never" :body-style="{padding:'8px'}">
<EssayBar :essayData="essayData"/>
</el-card>
</el-col>


<SlideBar></SlideBar>
</el-row>


</template>

<script>
 
import {get_essay} from '../api/index'
export default {
  components: {
      EssayBar:()=> import('../components/EssayBar.vue'),
      SlideBar:()=> import('../components/SlideBar.vue'),
      Tags:()=> import('../components/Tags.vue')
  },
  data(){
    return {
      second_cate_id:this.$route.second_cate_id,
      essayData:'',
      tags:this.$route.query
    }
  },
  mounted() {
    console.log(this.tags)
    let second_cate_id = this.second_cate_id
    get_essay(second_cate_id).then(res =>{
      console.log(res.data);
      this.essayData = res.data.data
    })
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

@media screen and (min-width:768px){
    .essaybox{
        padding: 10px;
    }
}

</style>