<template>
  <div>
  <el-card class="boxcard banner" shadow="never" :style="{backgroundImage:'url('+background+')'}">

  <div class="subtitle">
  <p class="name" >{{essayData[0].author}}</p>
  <p class="saying">
  <!-- infinite loop -->
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
// 导入组件
import Header   from '../components/Header.vue'
import SlideBar from '../components/SlideBar'
import EssayBar from '../components/EssayBar.vue'
import EssayBox from '../components/EssayBox'
export default {
    name: 'Home',
    components: {
        Header,
        SlideBar,
        EssayBox,
        EssayBar,
    },
    data() {
      return {
          background:require('../assets/index2.jpg'),
          mottos:['无穷的远方与无尽的人们，都与我有关  ——鲁迅', '当恩怨各一半，我该怎么圈览'],
          essayData:[
            {
              author:'loster', 
              date:'2022-9-15', 
              title:'内网穿透其是就是在公司或者是家庭内部，建立的一种局域网络或者是办公网络，从而实现多台电脑之间可以进行资源的共享。',
              view_number:'2121', 
              likes:'2121', 
              comment_number:'1212', 
              tags:['nodejs','elementUI','vue'], 
              brief:'内网穿透类的产品，需要先明确自己的一个使用目标，带宽一般都不会很高的，所以主要是穿透网站，还有一些后台小流量的一些使用场景。如果想用内网穿透上一些大流量的高清视频，以现在的技术条件还是不现实的。'
            },
            {
              author:'loster', 
              date:'2022-9-15', 
              title:'内网穿透其是就是在公司或者是家庭内部，建立的一种局域网络或者是办公网络，从而实现多台电脑之间可以进行资源的共享。',
              view_number:'2121', 
              likes:'2121', 
              comment_number:'1212', 
              tags:['nodejs','elementUI','vue'], 
              brief:'内网穿透类的产品，需要先明确自己的一个使用目标，带宽一般都不会很高的，所以主要是穿透网站，还有一些后台小流量的一些使用场景。如果想用内网穿透上一些大流量的高清视频，以现在的技术条件还是不现实的。'
            },
            {
              author:'loster', 
              date:'2022-9-15', 
              title:'内网穿透其是就是在公司或者是家庭内部，建立的一种局域网络或者是办公网络，从而实现多台电脑之间可以进行资源的共享。',
              view_number:'2121', 
              likes:'2121', 
              comment_number:'1212', 
              tags:['nodejs','elementUI','vue'], 
              brief:'内网穿透类的产品，需要先明确自己的一个使用目标，带宽一般都不会很高的，所以主要是穿透网站，还有一些后台小流量的一些使用场景。如果想用内网穿透上一些大流量的高清视频，以现在的技术条件还是不现实的。'
            },
            {
              author:'loster', 
              date:'2022-9-15', 
              title:'内网穿透其是就是在公司或者是家庭内部，建立的一种局域网络或者是办公网络，从而实现多台电脑之间可以进行资源的共享。',
              view_number:'2121', 
              likes:'2121', 
              comment_number:'1212', 
              tags:['nodejs','elementUI','vue'], 
              brief:'内网穿透类的产品，需要先明确自己的一个使用目标，带宽一般都不会很高的，所以主要是穿透网站，还有一些后台小流量的一些使用场景。如果想用内网穿透上一些大流量的高清视频，以现在的技术条件还是不现实的。'
            },
          ]
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