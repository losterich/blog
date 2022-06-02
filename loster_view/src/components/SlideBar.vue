<template>

    <el-col class="hidden-sm-and-down" :md="5" :lg="4" :xl="4"  style="margin:15px 0 0 10px"> 
    <el-card class="info-box" shadow="never" :body-style="{padding:'0'}">
    <InfoBox></InfoBox>
    </el-card>
    </el-col>
      
</template>

<script>
// 组件导入
import InfoBox from './InfoBox.vue'
export default {
    components:{
        InfoBox
    }

}
</script>

<style>

.info-box{
    padding: 0 !important;
}

</style>