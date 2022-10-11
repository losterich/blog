<template>
  <div>
    <div class="title-box">
      <h1>{{essayData.title}}</h1>
      <p>@{{essayData.author}}，{{essayData.date}}</p>
    </div>
  <div v-highlight class="text markdown-body" v-html="html"/>
  </div>
</template>

<script>
export default {
    props:['html', 'essayData'],
}
</script>

<style lang="less" scoped>  
// github markdown样式
@import 'github-markdown-css/github-markdown.css';

.title-box {
  line-height: 40px;
  margin-bottom: 50px;
}
.text{
  line-height:25px;
  text-align:left;
  text-align: left;
}

</style>