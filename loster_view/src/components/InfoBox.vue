<template>
    <div>

    <div class="card">
    <div class="blob"></div>
    <span class="img">
    <img :src="websiteInfo.avatar">
    <p>{{websiteInfo.back_motto}}</p>
    </span>
    <h2>{{websiteInfo.author}}<br><span>{{websiteInfo.motto}}</span></h2>
    <p>
    <i class="el-icon-aim"></i>
    <i class="el-icon-mobile-phone"></i>
    <i class="el-icon-folder-remove"></i>
    </p>
    </div>
    <br>
    </div>
</template>

<script>
export default {
    name: 'InfoBox',
    data(){
        return {
            websiteInfo:[]
        }
    },
    methods:{

    },
    mounted(){
        this.websiteInfo = JSON.parse(sessionStorage.getItem('info_data'))[0]
    },
    computed:{
       

    },
    watch: {
    // 监听vuex中数据变化的变化，最新赋值

    info_data:{
        handler(newValue, oldValue){
            this.websiteInfo = newValue[0] 
        }
    },
    

},

}
</script>

<style  lang="less" scoped>
p i{
    font-size: 25px;
    margin: 0 15px 0 15px;
}

/* From uiverse.io by @gagan-gv */
.card {
    width: 100%;
    height: 200px;
    background: #f0f0f0;
    border-radius: 5px;
    text-align: center;
    transition: all 0.5s;
    overflow: hidden;
    position: relative;
}

.card:hover {
    background-color: #4bb8ff;
}

.card .blob {
    height: 14px;
    width: 60%;
    border-radius: 0 0 5px 5px;
    margin: 0 auto;
    background-color: #4bb8ff;
    visibility: visible;
    transition: all 0.3s;
 
}

.card:hover .blob {
    height: 0;
}

.card .img {
    display: flex;
    margin: 30px auto 10px auto;
    width: 70px;
    height: 70px;
    background-color: #4bb8ff;
    border-radius: 50%;
    font-size: 11px;
    justify-content: center;
    align-items: center;
    transition: all 0.5s;
    overflow: hidden;
}
.card .img img{
    height: 100%;
    z-index: 2;
    transition: all 0.5s;
}
.card .img p{
    width:98%;
    padding:15px;
    line-height:20px;
    text-align: center;
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    display:none;
    transition: all 0.5s;
    font-size:14px;
}
.card:hover .img img{
    display: none;
}
.card:hover .img p{
    display:block;
}
.card:hover .img {
    width: 100%;
    height: 70%;
    border-radius: 5px 5px ;
    margin: 0 auto;
    background-color: #f0f0f0;
    z-index: 99999;
}

.card h2 {
    padding: 15px 10px;
    font-size: 19px;
    transition: all 0.5s;
    z-index: -99;
    line-height: 17px;
}

.card span {
    font-size: 13px;
    font-weight:200;
}

.card:hover h2 {
    opacity: 0;
    width: 100%;
    position: absolute;
    transition: all 0.5s;
}

.card>p {
    opacity: 0;
    transition: all 0.75s;
    width: 100%;
}

.card:hover>p {
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%,-5%);
    opacity: 1;
    transition: all 0.5s;
}
</style>