<template>

    <div>

    <router-link  v-for="(item, index) in essayData" :key="index" :to="{name:'essay',param:{essay_id,}}">
        <el-card :body-style="{padding:'3px'}">
        <el-row>
        <el-col class="text" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-row class="author"><i class="el-icon-user-solid">{{item.author}}</i> <i class="el-icon-time">{{item.date}}</i></el-row>
        <el-row><h4>{{item.title}}</h4></el-row>
        <el-row> <i class="el-icon-view">{{item.view_number}}</i> 
        <i class="bi-hand-thumbs-up">{{item.likes}}</i> 
        <i class="el-icon-chat-round">{{item.comment_number}}</i> 
        </el-row>
        <el-row>
        <el-tag effect="dark" v-for="tag_item in item.tags" :key="tag_item">{{tag_item}}</el-tag>
        </el-row>
        <el-row><p>{{item.brief}}</p></el-row>
        </el-col>
        </el-row>
        </el-card>

    </router-link>

    </div>

</template>

<script>
export default {
    name: 'EssayBar',
    props:['essayData'],
}
</script>

<style lang="less" scoped>
.el-card{
    margin-bottom: 15px;
    line-height:20px;
    border:2px solid rgb(137, 134, 134);
    transition: all 0.3s;
}
// 阴影效果
.el-card:hover{
   box-shadow: 6px 6px 4px #b3b3b3,
              -6px -6px 4px #ffffff;
   transform: scale(101%);
}
.text{
    background: rgb(255, 255, 255);
    margin-top: 10px;
}
.text .el-row{
    padding:0 8px;
    line-height:20px;
    text-align:left;
    margin-bottom: 5px;
    font-size:0.9rem;
}

//  文字超出隐藏
.text .el-row h4{
    padding-top: 5px;
    font-weight: 600;
    font-size:1.1rem;
    overflow: hidden;
    display: -webkit-box; 
   -webkit-box-orient:vertical;
   -webkit-line-clamp:1;
}
.text .el-row p{
    overflow: hidden;
    display: -webkit-box; 
    color: rgb(82, 82, 82);
   -webkit-box-orient:vertical;
   -webkit-line-clamp:3;
}

.text .el-row i{
    margin-right:3px;
    font-size:14px;
    font-weight: 500;
    font-style:normal;
    letter-spacing: 0px;
}
.author {
    border-bottom:1px solid rgb(137, 134, 134);
    padding-bottom: 5px !important;
    line-height:15px !important;
}
.author i{
    font-size:16px;
}

.text .el-row .el-tag{
    padding: 0 2px;
    height: 18px;
    line-height:16px; 
    border-radius:3px;
    margin-right: 6px;
}
.img{
    height: 130px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}


@media screen and (min-width:768px){
   .el-card:hover{
   box-shadow: 6px 6px 4px #b3b3b3,
              -6px -6px 4px #ffffff;
   transform: scale(102%);
}
}
</style>