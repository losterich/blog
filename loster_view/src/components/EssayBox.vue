<template>
   
<el-col :xs="23" :sm="23" :md="15" :lg="11" :xl="9"  style="margin-top:15px">
    <el-card class="essaybox"  shadow="never" :body-style="{padding:'8px'}">
    <slot></slot>
    </el-card>
</el-col>

</template>

<script>
// 导入组件
import EssayBar   from './EssayBar.vue'
export default {
    name: 'EssayBox',
    components: {
        EssayBar
    }
}
</script>

<style lang="less" scoped>

@media screen and (min-width:768px){
    .el-card{
        padding: 10px;
    }
}

</style>