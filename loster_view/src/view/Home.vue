<template>
  <div>
  <el-card class="boxcard banner" shadow="never" :style="{backgroundImage:'url('+background+')'}">

  <div class="subtitle">
  <p class="name" >loster</p>
  <p class="saying">
  <!-- infinite loop -->
  <vue-typed-js :strings="['无穷的远方与无尽的人们，都与我有关  ——鲁迅', '当恩怨各一半，我该怎么圈览']" :loop="true"  :typeSpeed="200" :backSpeed="40">
  <h2><span class="typing"></span></h2>
  </vue-typed-js> 
  </p>
  </div>

  <a href="#down" class="down"><p class="tip-arrow">  <i class=" el-icon-arrow-down animate__animated animate__bounce  animate__infinite "></i></p></a>

  </el-card>

  <p id="down"></p>

  <el-row class="content">
  <EssayBox></EssayBox>
  <SlideBar></SlideBar>
  </el-row>
  
  </div>

</template>


<script>
// 导入组件
import Header   from '../components/Header.vue'
import SlideBar from '../components/SlideBar'
import EssayBox from '../components/EssayBox'
export default {
    name: 'Home',
    components: {
        Header,
        SlideBar,
        EssayBox,
    },
    data() {
      return {
          background:require('../assets/index2.jpg')
      }
    },
}
</script>

<style lang="less" scoped>  

.boxcard {
    height: 100vh;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
    border: none !important;
    border-radius: 0 !important;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 ;
    position: relative;
}

.el-row {
  width: 100%;
  background: rgba(0, 0, 0, 0);
}

.content {
    display: flex;
    justify-content: center;
}
.subtitle{
    p {
      line-height:45px;
      color:white;
    }
    .name {
      font-size:3em;
      font-weight: 500;
    }
    .saying .typing {
      font-size: 1.2rem;
      font-weight: 200;
    }
}

.tip-arrow {
    color:rgb(210, 209, 209);
    line-height:45px;
    width: 20%;
    
    position: absolute;
    left: 50%;
    bottom:-5px;
    transform: translate(-50%,0);
    transition: all 1s;
    text-shadow: 0 0 1em ;
}

.tip-arrow i {
    font-size: 40px;    
    font-weight: 1000;
    cursor: pointer;
}


    
</style>