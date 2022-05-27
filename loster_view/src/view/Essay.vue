<template>

  <el-row>
    <el-col class="essay" :xs="24" :sm="24" :md="14" :lg="13" :xl="11">
    <el-card>

    </el-card>

    <!-- 评论 -->
    <el-card>
      <el-collapse accordion>
      <el-collapse-item :body-style="{border:'none'}">
        <template slot="title" >
            <div class="title">
            <el-avatar icon="el-icon-user-solid"></el-avatar>说点什么
            </div>
        </template>
       <div>
        
       <el-row class="comment">
            <el-col :xs="24" :sm="24" :md="11" :lg="11" :xl="11">
              <div class="input-group">
              <input required="" type="text" name="text" autocomplete="off" class="input">
              <label class="user-label">称呼</label>
              </div>
          </el-col>
         <el-col :xs="24" :sm="24" :md="11" :lg="11" :xl="11">
              <div class="input-group">
              <input required="" type="text" name="text" autocomplete="off" class="input">
              <label class="user-label">邮箱</label>
              </div>
          </el-col>

          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <div class="input-group textarea">
              <textarea required="" type="text" name="text" autocomplete="off" class="input" rows="7" cols="5">
                </textarea>
              <label class="user-label">留言</label>
              </div>
          </el-col>

       </el-row>
         
       </div>
      </el-collapse-item>
      </el-collapse>

    <el-card>
      
    </el-card>
    </el-card>

    
    </el-col>

    <el-col class="some-info"  :xs="24" :sm="24" :md="5" :lg="4" :xl="4">
    <el-card></el-card>

    </el-col>
    
  </el-row>

</template>

<script>
  export default {
  }
</script>

<style lang="less" scoped>

.el-row{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 80px;
}
.comment{
  margin-top: 10px;
  display: flex;
  justify-content: start;
}
.comment .el-col{
   margin-left: 10px;
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


/* From uiverse.io by @alexruix */
.input-group {
 position: relative;
 width: 90%;
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
 width: 100%;

}
textarea{
  resize: none;
}

.user-label {
 position: absolute;
 left: 15px;
 color: black;
 pointer-events: none;
 transform: translateY(-30px) ;
 transition: 150ms cubic-bezier(0.4,0,0.2,1);
 letter-spacing: 10px;

}
.textarea .user-label {
  transform: translateY(-150px) ;
}

.input:focus, input:valid {
 outline: none;
 border: 1.5px solid #1a73e8;
}

.input:focus ~ label, input:valid ~ label {
 transform: translateY(-220%) scale(0.9);
 background-color: white;
 padding: 0 .2em;
 color: #2196f3;

}
.textarea .input:focus ~ label, .textarea input:valid ~ label{
     transform: translateY(-163px) scale(0.9);
}

</style>