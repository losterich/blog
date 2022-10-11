<template>

   
<!-- 评论 -->
 <el-card class="box">

<el-collapse accordion>
<el-collapse-item :body-style="{border:'none'}">
<template slot="title" >
<div class="title">
<el-avatar icon="el-icon-user-solid" :size="30"></el-avatar>说点什么
</div>
</template>
<div>

<el-row class="comment">
<el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="comment-col">
<div class="input-group textarea">
<textarea required="" type="text" name="text" autocomplete="off" class="input" rows="7" cols="5">
</textarea>
<label class="user-label">评论</label>
</div>
</el-col>


<el-col :xs="24" :sm="24" :md="9" :lg="9" :xl="9" class="comment-col">



<div class="input-group">
<input required="" type="text" name="text" autocomplete="off" class="input">
<label class="user-label">称呼</label>
</div>
</el-col>
<el-col :xs="24" :sm="24" :md="9" :lg="9" :xl="9" class="comment-col">
<div class="input-group">
<input required="" type="text" name="text" autocomplete="off" class="input">
<label class="user-label">邮箱</label>
</div>
</el-col>

<el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6" class="comment-col"><el-button type="primary" @click="submit">提交</el-button></el-col>

</el-row>

</div>
</el-collapse-item>
</el-collapse>

<!-- 评论区 -->
<el-card class="box" :body-style="{padding:'0px'}" style="margin-top:15px;">
<h3>评论</h3>

<el-col class="message" v-for="(item, index) in comments" :key="index">
<div class="message-info">
<el-avatar icon="el-icon-user-solid" :size="30"></el-avatar>
<div>
<p class="message-author">
{{item.commenter}}
</p>
<p class="date">{{item.comment_date}}</p>     
</div>
</div>
<p class="message-text">{{item.comment_content}}</p>




</el-col>



</el-card>
</el-card>

</template>

<script>
export default {
    name: 'comment',
    props:['comments'],
    formParam:{
      comment:'',
      commenter:'',
      email:''
    },
    methods:{
      submit(){
        this.$message({
          type:'success',
          message:'评论成功，评论筛选后将展示。'
        })
      }
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
  margin:5px 0;
}

.comment{
  margin-top: 10px;
  display: flex;
  justify-content: flex-start;
}
.comment .el-col{
   display: flex;
   justify-content:flex-end;
   padding-right: 10px;
   .el-button{
    margin: 0 ;
    width: 50%;
    margin-top: 15px;
}

}
.comment-col{
    display: flex;
    justify-content:flex-end;
    padding-right: 10px;
}

.title{
  display: flex;
  align-items: center;
  font-size:10px;
}
.el-collapse{
  border:2px solid rgb(137, 134, 134);
  border-radius:5px; 
  padding: 5px;
}

.el-avatar{
  margin-right: 15px; 
}

h3{
  line-height:40px;
  text-align:left;
  padding-left: 15px;
  margin-bottom: 25px;
}
.message{
   line-height:20px;
   text-align:left;
   display: flex;
   flex-direction: column;
   justify-content:flex-start;
   font-size:14px;
   margin-bottom: 25px;
   padding-left: 15px;
}
.message .message-info{
    display: flex;
    justify-content: flex-start;
    line-height:15px;
    font-size:12px;
}
.message-info .date{
    color:#9e9e9e;
}
.message-info .el-avatar{
    margin-right: 7px;
}
.message-text{
    padding:7px 15px 0 37px;
}
.message-author span:nth-child(3){
    color:#409EFF;
    padding-top: 2px;
    cursor: pointer;
}

.reply{
  border:none;
  position: relative;
  // 样式穿透 *************************************
  /deep/ .el-collapse-item__header {
    line-height: 15px;
    height: auto;
    width: 70px;
    padding-top: 5px;
    position: relative;
    left: 32px;
    color:#66B1FF;
  }
  .reply-textarea{
      padding-left: 32px;
  }

 
}

/* From uiverse.io by @alexruix */
.input-group {
      position: relative;
      width: 100%;
      margin-top: 15px;
}

.input {
      border: solid 1.5px #9e9e9e;
      border-radius: 5px;
      background: none;
      padding: 10px;
      font-size: 15px;
      color: black;
      transition: border 150ms cubic-bezier(0.4,0,0.2,1);
      width:100%;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
           box-sizing: border-box;
}

textarea{
  resize: none;
}

.user-label {
      position: absolute;
      left: 15px;
      top: 10px;
      color: black;
      pointer-events: none;   
      transition: 150ms cubic-bezier(0.4,0,0.2,1);
      letter-spacing: 10px;
}

.textarea .user-label {
      position:absolute;
      top:10px;
}

.input:focus, input:valid {
      outline: none;
      border: 1.5px solid #1a73e8;
}

.input:focus ~ label, input:valid ~ label,.textarea textarea:valid ~ label {
      position: absolute;
      top: -10px;
      transform: scale(0.9);
      background-color: white;
      padding: 0 .2em;
      color: #2196f3;
}

.textarea .input:focus ~ label, .textarea textarea:valid ~ label{
      position: absolute;
      top:-10px;
      transform: scale(0.9);
}

</style>