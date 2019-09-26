<template>
  <div>
    <my-header></my-header>
    <!-- 这是头部 -->
    <div style="text-align: center;padding:30px;">
      <span>开始&nbsp;&nbsp; ,&nbsp;&nbsp; 经典耀眼</span>
      <br />
      <h1 class="s_1 pt-3 h_1">
        <small class="p-3"> 
          <b>RAY-BAN</b> 雷朋太阳镜
        </small>
      </h1>
      <h6 class="s_2">标志性太阳镜是归属&nbsp; 、&nbsp;风格与态度的宣言。</h6>
    </div>
    <div class="container-fluid">
      <div class="row mb-3 pl-2">
        <div class="col-md-3 p-0 pr-2 img-group"  v-for="(item,idex) of gl" :key="idex" >
          <div class="img-tip">
            <span>{{item.title}}</span>
            <span>￥{{item.price}}</span>
          </div>
          <img :src="`http://127.0.0.1:3000/`+item.pic" class="w-100 group_img" />
          <div class="animation">
           <div class="introduce">
            <p>RB4165F</p>
           </div>
          </div>
        </div>
      </div>
      <div class="row pl-2">
        <div class="col-md-6 p-0 pr-2">
          <img src="../assets/yximgs/Mj-05.jpg" class="w-100" />
        </div>
        <div class="col-md-6 p-0">
          <div class="row pl-2 pb-3">
            <div class="col-md-6 p-0 pr-2" v-for="(item,idex) of gla" :key="idex">
              <div class="img-tip">
                <span>{{item.title}}</span>
                <span>¥{{item.price}}</span>
              </div>
              <img :src="`http://127.0.0.1:3000/`+item.pic" class="w-100" />
         
            </div>
            <!-- <div class="col-md-6 p-0 pr-2">
              <div class="img-tip">
                <span>爱丽卡·经典</span>
                <span>¥ 1,280.00</span>
              </div>
              <img src="../assets/yximgs/Mj-07.jpg" class="w-100" />
            </div> -->
          </div>
          <div class="row pl-2">
            <div class="col-md-6 p-0 pr-2">
              <div class="img-tip">
                <span>圆形·金属</span>
                <span>¥ 1,280.00</span>
              </div>
              <img src="../assets/yximgs/Mj-08.jpg" class="w-100" />
            </div>
            <div class="col-md-6 p-0 pr-2 lgg">
              <p>需要更多灵感?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 中部文字 -->
    <div style="text-align: center;padding:30px;">
      <span style="font-size: 20px">类别</span>
      <br />
      <h1 class="s_1 pt-3 h_1">
        <small class="p-3">
          <b>RAY-BAN</b> 我们有适合你们每个人、任何人的太阳镜。
        </small>
      </h1>
      <h6 class="s_2">登上潮流</h6>
    </div>

    <div class="container-fluid">
      <div class="row">


        <div class="col-md-6 pl-3">
          <div class="row">

            <div class="col-lg-6 pr-0 mb-3" v-for="(item,i) of glas" :key="i" >
              <div class="img-tip">
                <p>
                  <span class="smOne_img_Etext">Wayfarer II</span>
                  <span>二代徒步旅行者</span>
                  <span class="smOne_img_Etext">Evolve</span>
                  <span>进化</span>
                </p>
                <span>¥{{item.price}}</span>
              </div>
              <img :src="`http://127.0.0.1:3000/`+item.pic" class="w-100" alt />
            </div>

            <div class="col-lg-6 pr-0 mb-3" v-for="(item,i) of glass" :key="'info2-'+i" >
              <div class="img-tip">
                <span>
                  <h6>Wings II</h6>二代飞翼
                </span>
                <span>¥ {{item.price}}</span>
              </div>
              <img :src="`http://127.0.0.1:3000/`+item.pic" class="w-100" alt />
            </div>

            <div class="col-lg-6 pr-0 mb-3" v-for="(item,i) of glae" :key="'info3-'+i" >
              <div class="img-tip">
                <p>
                  <span>骄阳将军款</span>
                </p>
                <span>¥{{item.price}}</span>
              </div>
              <img :src="`http://127.0.0.1:3000/`+item.pic" class="w-100" alt />
            </div>

            <div class="col-lg-6 pr-0 mb-3" v-for="(item,i) of glaee" :key="'info4-'+i" >
              <div class="img-tip">
                <span>
                  <h6>{{item.title}}</h6>
                </span>
                <span>¥ {{item.price}}</span>
              </div>
              <img :src="`http://127.0.0.1:3000/`+item.pic" class="w-100" alt />
            </div>

          </div>

        </div>



        <div class="col-md-6">
          <img src="../assets/yximgs/Mj-13.jpg" class="w-100" alt />
        </div>



      </div>

    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
        gl:[''],
        gla:[''],
        glas:[''],
        glass:[''],
        glae:[''],
        glaee:['']

    }
  },
  created() {
    this.axios.get("glass").then(result => {
      this.gl = result.data.slice(0, 4);
      this.gla = result.data.slice(4,6);
      this.glas=result.data.slice(7,8);
      this.glass=result.data.slice(8,9);
      this.glae=result.data.slice(9,10);
      this.glaee=result.data.slice(10,11);

    });
  }
};
</script>
<style scoped>
.glasses {
  margin: 0;
  padding: 0;
}
/* img宽高 */

/* 导航 */
.b_1 {
  display: flex;
  justify-content: space-around;
  line-height: 55px;
}
.f_1 {
  height: 55px;
  background: #000;
}
/* 字体颜色 */
.c_1 {
  color: #fff;
}
.c_1:hover {
  color: #cc7755;
  text-decoration: none;
}
/*中部图片*/

/* 左 */
.left_main {
  float: left;
  overflow: hidden;
  position: relative;
}
.row .leftTop {
  width: 100%;
  position: relative;
  margin-bottom: 10px;
  float: left;
  overflow: hidden;
  width: calc(55.8% - 10px);
  position: relative;
}
.leftTop {
  width: 100%;
  position: relative;
  margin-bottom: 10px;
}
.row .leftBottom {
  width: 100%;
  position: relative;
}
.img_1 {
  display: block;
  width: 100%;
  height: 400px;
}
.img_2 {
  display: block;
  width: 100%;
}
.img_1 {
  display: block;
  width: 100%;
  height: 400px;
}
.img_2 {
  display: block;
  width: 100%;
}
/* 右 */
.right {
  width: 44.2%;
  float: right;
  position: relative;
}
/* 图片中托盘文字 */
.w_1 {
  position: absolute;
  left: 110px;
  bottom: 0px;
  text-align: center;
  color: #fff;
  font-size: 30px;
}

.w_1_right {
  position: absolute;
  left: 110px;
  bottom: 350px;
  text-align: center;
  color: #fff;
  font-size: 30px;
}
/* 下面是_1的css样式 */
.img-group {
  position: relative;
}

.img-tip {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 50px;
  margin: 0 auto;
}

.group_img {
  display: block;
  max-width: 100%;
  height: auto;
}

.img-tip > span {
  display: block;
}

.lgg {
  text-align: center;
  position: relative;
  background-color: #f8f8f8;
}

.lgg > p {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  margin: 0 auto;
}
/* 中部第一张小图片字体样式 */
.smOne_img_Etext {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
/* 隐藏显示样式 */

.animation{
  transition: all .3s;
  border: 0;
  font-size: 100%;
  font: inherit;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
  position:absolute;
  display: none;
  position:absolute;
  left: 0%;right: 1%;top: 0%;bottom: 0%;
  background-color: rgb(191, 191, 191);
  opacity:.5;
}
.img-group:hover>.animation{
  display: block;
}

.introduce{
transform:translateY(-100%);
transition: all .3s;
position: absolute;
top: 50%;
right: 0;
left: 0;
text-align: center;
font-size: 14px;
font-weight: 500;
line-height: 2;
letter-spacing: .2em;
color: #fff;
}
.introduce p{
 
  display: inline-block;
  text-align: center;
  border-bottom: 0 solid #fff;
  color:rgb(249, 249, 249);
  margin: 0;
  padding: 0;
  animation-delay:2s 
}

</style>