<template>
<el-card class="box">
<el-breadcrumb separator-class="el-icon-arrow-right">
<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
<el-breadcrumb-item :to="{name:'',query:{first_cate_id:tags.first_cate_id}}">{{tags.first_cate_name}}</el-breadcrumb-item>

<el-breadcrumb-item 
:to="{name:'cates',query:{second_cate_id:tags.second_cate_id,second_cate_name:tags.second_cate_name,first_cate_id:tags.first_cate_id,first_cate_name:tags.first_cate_name,}}">
{{tags.second_cate_name}}
</el-breadcrumb-item>

<el-breadcrumb-item v-if="tags.title">{{tags.title}}</el-breadcrumb-item>

</el-breadcrumb>
</el-card>
</template>

<script>
import {get_cate} from '../api/index'
export default {
    props:['tags'],
    mounted() {

        const param = {
            second_cate_id: '1'
        }
        get_cate(param).then(res =>{
            console.log(res)
        })
    },
    watch: {
      tags: {
        handler(){
          this.tags = this.tags
        }
    }
  }
}
</script>

<style lang="less" scoped>

.box{
  margin-bottom: 15px;
}
.el-breadcrumb{
  display: flex;
  overflow: hidden;
  overflow-x:auto;
  overflow-y:hidden;
}
/deep/.el-breadcrumb__item{
  cursor: pointer;
  display: flex !important;
  flex-wrap: nowrap;
}
/deep/.el-breadcrumb__inner{
  white-space: nowrap;
}

</style>