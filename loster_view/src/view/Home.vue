<template>
  <div>
  <el-card class="boxcard banner" shadow="never" :style="{backgroundImage:'url('+background+')'}">

  <div class="subtitle">
  <p class="name" >{{'loster'}}</p>
  <p class="saying">

  <vue-typed-js :strings="mottos" :loop="true"  :typeSpeed="200" :backSpeed="40">
  <h2><span class="typing"></span></h2>
  </vue-typed-js> 
  </p>
  </div>

  <a href="#down" class="down"><p class="tip-arrow">  <i class=" el-icon-arrow-down animate__animated animate__bounce  animate__infinite "></i></p></a>

  </el-card>

  <p id="down"></p>

  <el-row class="content">

  <EssayBox>
  <EssayBar :essayData="essayData"></EssayBar>
  </EssayBox>

  <SlideBar></SlideBar>
  </el-row>
  
  </div>

</template>


<script>
import {get_essay, get_mottos} from '../api/index'
import {mapActions} from 'vuex'
export default {
    name: 'Home',
    components: {
        Header:()=>import('../components/Header.vue'),
        SlideBar:()=>import('../components/SlideBar.vue'),
        EssayBox:()=>import('../components/EssayBox.vue'),
        EssayBar:()=>import('../components/EssayBar.vue'),
    },
    data() {
      return {
          background:require('../assets/index2.jpg'),
          mottos:['这里有一个bug'],
          essayData:[]
      }
    },
    mounted() {
      // 首页文章
      get_essay().then(response => {
          const essays = response.data.data
          // 时间格式化
          essays.forEach(item =>{
              item.date = item.date.slice(0, 16)
              item.date = item.date.replace('T',' ')
          })
          this.essayData = essays
      }).catch(err =>{
        console.error(err)
      })
      
     
    },
    created(){
       // 箴言
       get_mottos().then(res =>{
        let res_motto = res.data.data 
        let array = []
        res_motto.forEach(item =>{
          array.push(item.motto)
        })
        this.mottos = array
        console.log(this.mottos)
      })
    }
    
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
      font-weight: 500;
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