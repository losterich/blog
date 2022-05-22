<template>

<div>



 <el-card  :body-style="{padding:'3px'}">
     
    <el-row>
        <el-col class="text" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-row><h4>前言在写一个项目时用了easyswoole框架，需要用到批量更新方法，但是easyswoole没有去实现方法，只能自己封装</h4></el-row>
        <el-row><i class="el-icon-user-solid">loster</i> <i class="el-icon-time">2022-12-17</i> <i class="el-icon-view">1123</i> <i class="bi-hand-thumbs-up">1111</i> <i class="el-icon-chat-round">1341</i> </el-row>
        <el-row>
            <el-tag effect="dark">nodejs</el-tag> <el-tag effect="dark">vue</el-tag> <el-tag effect="dark">elementUi</el-tag>

        </el-row>
        <el-row><p>前言在写一个项目时用了easyswoole框架，需要用到批量更新方法，但是easyswoole没有去实现方法，只能自己封装</p></el-row>
        
        </el-col>
       
    </el-row>
</el-card>



 <el-card  :body-style="{padding:'3px'}">
     
    <el-row>
        <el-col class="text" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-row><h4>前言在写一个项目时用了easyswoole框架，需要用到批量更新方法，但是easyswoole没有去实现方法，只能自己封装</h4></el-row>
        <el-row><i class="el-icon-user-solid">loster</i> <i class="el-icon-time">2022-5-17</i> <i class="el-icon-view">1123</i> <i class="bi-hand-thumbs-up">1111</i> <i class="el-icon-chat-round">1341</i> </el-row>
        <el-row>
            <el-tag effect="dark">nodejs</el-tag> <el-tag effect="dark">vue</el-tag> <el-tag effect="dark">elementUi</el-tag>

        </el-row>
        <el-row><p>前言在写一个项目时用了easyswoole框架，需要用到批量更新方法，但是easyswoole没有去实现方法，只能自己封装</p></el-row>
        
        </el-col>
       
    </el-row>
</el-card>


 <el-card  :body-style="{padding:'3px'}">
     
    <el-row>
        <el-col class="text" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-row><h4>前言在写一个项目时用了easyswoole框架，需要用到批量更新方法，但是easyswoole没有去实现方法，只能自己封装</h4></el-row>
        <el-row><i class="el-icon-user-solid">loster</i> <i class="el-icon-time">2022-5-17</i> <i class="el-icon-view">1123</i> <i class="bi-hand-thumbs-up">1111</i> <i class="el-icon-chat-round">1341</i> </el-row>
        <el-row>
            <el-tag effect="dark">nodejs</el-tag> <el-tag effect="dark">vue</el-tag> <el-tag effect="dark">elementUi</el-tag>

        </el-row>
        <el-row><p>前言在写一个项目时用了easyswoole框架，需要用到批量更新方法，但是easyswoole没有去实现方法，只能自己封装</p></el-row>
        
        </el-col>
       
    </el-row>
</el-card>


</div>


</template>

<script>
export default {
    name: 'EssayBar',
}
</script>

<style lang="less" scoped>
.el-card{
    margin-bottom: 15px;
    line-height:20px;
    border:1px solid rgb(137, 134, 134);
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
   -webkit-line-clamp:2;
}
.text .el-row p{
    overflow: hidden;
    display: -webkit-box; 
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
.text .el-row .el-tag{
    padding: 0 1px;
    height: 18px;
    line-height:16px; 
    border-radius:3px;
}
.img{
    height: 130px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    
}
</style>