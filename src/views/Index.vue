<template>
  <div style="background-color: #e8e8e8;">



    <el-header>
      <el-row>
        <el-col :span="24">
          <my-header></my-header>
        </el-col>
        <el-col :span="24">
          <el-carousel :interval="4000" type="card" height="400px">
            <el-carousel-item v-for="item in imagesbox" :key="item.id">
              <img :src="item.idView" class="image" style="width: 100% !important;" />
            </el-carousel-item>
          </el-carousel>
        </el-col>
      </el-row>
    </el-header>
    <div>
      <div class="consult">
        <div class="consult_contact">
          <div class="consult_wrap">
            <div class="tip">Hello,欢迎来咨询~</div>
            <img src="../../public/images/ball.png" class="ball" alt="">
            <img  @click="kefu" src="../../public/images/kefuyi.png" class="staff_img " style="border-radius: 50%">
            <img src="../../public/images/bg_1.png" class="bg-1" alt="">
            <img src="../../public/images/bg_2.png" class="bg-2" alt="">
            <img  src="../../public/images/bg_3.png" class="bg-3" alt="">
          </div>
        </div>
      </div>
      <el-row :gutter="10">
        <el-col :xs="16" :sm="18" :md="20" :lg="21" style="padding-left: 130px !important;">
          <img src="../../src/assets/imgss/index_1.jpg" />
        </el-col>

        <el-col :xs="8" :sm="6" :md="4" :lg="3"></el-col>
      </el-row>

      <el-row :gutter="10">
        <el-col :xs="16" :sm="18" :md="20" :lg="21" style="padding-left: 130px !important;">
          <h1>为您精选浪琴系列</h1>
        </el-col>

        <el-col :xs="8" :sm="6" :md="4" :lg="3"></el-col>
      </el-row>

      <el-row :gutter="10">
        <el-col :xs="16" :sm="18" :md="20" :lg="21">
          <div class="bbq">
            <div
              v-show="show2"
              v-for="(item,i) of list"
              :key="i"
              class="single-member effect-3"
              style=" box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)"
            >
              <div class="member-image">
                <img :src="'http://127.0.0.1:3000/'+item.img_url" alt="Member" />
              </div>
              <div class="member-info">
                <h3>{{item.title}}</h3>
                <h5>{{item.price}}</h5>
                <p>{{item.type}}</p>
                <div class="social-touch">
                  <div class="fb-touch">
                    <el-button type="danger"><router-link :to="`watchdetails/${item.href.split('=')[1]}`"> 立即购买 </router-link></el-button>
                  </div>
                  <div class="tweet-touch"></div>
                  <div class="linkedin-touch">
                    <button
                      class="btn btn-primary"
                      @click="addcart"
                      :data-lid="item.lid"
                      :data-price="item.price"
                      :data-title="item.title"
                      type="warning"
                    >加入购物车</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-col>

        <el-col :xs="8" :sm="6" :md="4" :lg="3">
          <el-button type="primary" @click="jumpCart" plain>我的购物车</el-button>
          <img src="../../src/assets/imgss/pcdh1.png" />
        </el-col>
      </el-row>

      <el-row :gutter="10">
        <el-col :xs="16" :sm="18" :md="20" :lg="21">
          <el-button @click="loadMore" type="info" plain>加载更多</el-button>
        </el-col>

        <el-col :xs="8" :sm="6" :md="4" :lg="3"></el-col>
      </el-row>

      <el-row :gutter="10">
        <el-col :xs="24" :sm="24" :md="24" :lg="24">
          <div style="display: flex; width: 100%">
            <img style="position: relative" src="../../src/assets/imgss/index_bg3.png" />
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :xs="24" :sm="24" :md="24" :lg="24">
          <div style="display: flex; width: 100%">
            <img style="position: relative" src="../../src/assets/imgss/index_bg2.jpg" />
            <div
              style="display: flex;flex-wrap: wrap; position: absolute;width: 1000px;height: 700px;top: 90px;left: 488px"
            >
              <div class="shoesfor" v-for="(item,i) of gl" :key="i">
                <img :src="`http://127.0.0.1:3000/`+item.pic" style="width: 100%" />
                <div >
                    <span>￥{{item.price}}</span>
                    <span>{{item.title}}</span>
                </div>
                <img src="../../public/images/Dj.jpg" @click="jumpGlass" alt="">
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :xs="24" :sm="24" :md="24" :lg="24">
          <div style="display:flex;width: 100%;">
            <img style="position: relative" src="../../src/assets/imgss/pc_shoes.jpg" />
            <div style="display: flex;flex-wrap: wrap; position: absolute;width: 1000px;height: 900px;top: 600px;left: 464px">
              <div class="shoesfor" v-for="(item,i) of shoess" :key="i">
                <img :src="`http://127.0.0.1:3000/`+item.img_url" style="width: 100%" />
                <div >
                    <span>￥{{item.price}}</span>
                    <span>{{item.title}}</span>
                </div>
                <img src="../../public/images/Dj.jpg" @click="jumpShoes" alt="">
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <foot></foot>
  </div>
</template>
<script>
import ElCol from "element-ui/packages/col/src/col";
import FooTer from "./footer.vue";
import ElRow from "element-ui/packages/row/src/row";

export default {
  components: {
    ElRow,
    foot: FooTer,
    ElCol
  },
  data() {
    return {
      list: [], //保存玩服务器返回商品列表
      pno: 0, //当前页码
      show2: true,
      num2:0,
      imagesbox: [
        { id: 0, idView: require("../assets/imgss/dg_lb_1.jpg") },
        {
          id: 1,
          idView: require("../assets/imgss/dg_lb_2.jpg")
        },

        { id: 2, idView: require("../assets/imgss/dg_lb_3.jpg") }
      ],
      shoess: [], //保存服务器返回鞋子商品详情
      gl: []
    };
  },
  created() {
    this.loadMore();
    this.addshoes();
    this.axios.get("glass").then(result => {
      this.gl = result.data.slice(0, 6);
      this.num2 = parseInt(Math.random()*5);
    });
  },
  methods: {
    loadMore() {
      //功能一，当组件创建成功后获取第一页数据
      //1.创建url地址
      var url = "product";
      //将当前页码加一
      this.pno++;
      var obj = { pno: this.pno };
      //2.发送ajax请求获取第一页数据
      this.axios.get(url, { params: obj }).then(res => {
        //console.log(res.data.data);
        //3.将数据保存在data中
        //this.list = res.data.data;
        //数组拼接的操作
        var rows = this.list.concat(res.data.data);
        this.list = rows;
        console.log(rows);
      });
    },
    addcart(event) {
      //1.获取购物车中数据lid,lname,price
      var lid = event.target.dataset.lid;
      var title = event.target.dataset.title;
      var price = event.target.dataset.price;
      //2.创建url
      var url = "addcart";
      var obj = { lid: lid, title: title, price: price };
      console.log(obj);
      //3.发送ajax请求获取数据
      this.axios.get(url, { params: obj }).then(res => {
        if (res.data.code == -1) {
          //显示一个提示框
          this.$alert("请登录", "消息").then(res => {
            //跳转登录组件
            this.$router.push({ path: "/login" });
          });
        } else if (res.data.code == -2) {
          this.$notify({
            title: "添加失败",
            message: "这是一条警告的提示消息",
            type: "warning"
          });
        } else {
          this.$notify({
            title: "添加成功",
            message: "这是一条成功的提示消息",
            type: "success"
          });
        }
      });
    },
    jumpCart() {
      this.$router.push({ path: "/cart" });
    },
    jumpGlass(){
        this.$router.push({path:`/dwdetail/${this.num2}`})
    },
    jumpShoes(){
        this.$router.push({path:`/watchdetails/${this.num2}`})
    },
      kefu(){
        this.$router.push({path:`/kefu`})
      },
    addshoes() {
      this.axios.get("shoes").then(result => {
        this.shoess = result.data;
      });
    }
  }
};
</script>
<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

/*********************************************************************************************/
.bbq {
  font-family: Lato, "Open Sans", sans-sarif;
  font-size: 16px;
  background-color: #1f1f1f;
}

.bbq {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/*= common css to all effects =*/
.single-member {
  width: 280px;
  float: left;
  margin: 43px 25px 26px 110px;
  background-color: #fff;
  text-align: center;
  position: relative;
}

.member-image img {
  max-width: 100%;
  vertical-align: middle;
}

h3 {
  font-size: 24px;
  font-weight: normal;
  margin: 10px 0 0;
  text-transform: uppercase;
}

h5 {
  font-size: 16px;
  font-weight: 300;
  margin: 0 0 15px;
  line-height: 22px;
}

p {
  font-size: 14px;
  font-weight: 300;
  line-height: 22px;
  padding: 0 30px;
  margin-bottom: 10px;
}

.social-touch div {
  display: inline-block;
  width: 50px;
  height: 26px;
  vertical-align: middle;
  margin: 0 2px; /*background-image: url(../assets/imgss/social-icons.png);*/
  background-repeat: no-repeat;
  opacity: 0.7;
  transition: 0.3s;
}

.social-touch div:hover {
  opacity: 1;
  transition: 0.3s;
}

.fb-touch {
  background-position: 0 0;
  margin-left: -50px !important;
}

.tweet-touch {
  background-position: -35px 0;
}

.linkedin-touch {
  background-position: -71px 0;
}

.icon-colored .fb-touch {
  background-position: 0 -27px;
}

.icon-colored .tweet-touch {
  background-position: -35px -27px;
}

.icon-colored .linkedin-touch {
  background-position: -71px -27px;
}

/*= common css to all effects end =*/

/*= effect-1 css =*/
.effect-1 {
  border-radius: 5px 5px 0 0;
  padding-bottom: 40px;
}

.effect-1 .member-image {
  border: 2px solid #fff;
  border-radius: 60px 0;
  display: inline-block;
  margin-top: -72px;
  overflow: hidden;
  transition: 0.3s;
}

.effect-1 .social-touch {
  background-color: #e13157;
  position: absolute;
  left: 0;
  bottom: 0;
  height: 5px;
  overflow: hidden;
  padding: 5px 0 0;
  width: 100%;
  transition: 0.3s;
}

.effect-1 .member-image img {
  transition: 0.3s;
  border-radius: 60px 0;
}
.shoesfor div{
    position:absolute;
    left: 15%;top: 68%;
    text-align: center;
    margin: 0 auto;
}
.shoesfor div span{
    display: block;
} 
.shoesfor>img:last-child{
    position:absolute;
    left: 75%;top: 68%;
    transition-duration :0.3s;
}
.shoesfor>img:first-child:hover{
    transform: scale(1.2)
}
.shoesfor>img:last-child:hover{
   border-radius:50%

}
.effect-1:hover .member-image {
  border-color: #e13157;
  transition: 0.3s;
  border-radius: 50%;
}

.effect-1:hover .social-touch {
  padding: 6px 0;
  height: 38px;
  transition: 0.3s;
}

/*= effect-1 css end =*/

/*= effect-2 css =*/
.effect-2 {
  max-height: 302px;
  min-height: 302px;
  overflow: hidden;
}

.effect-2 h3 {
  padding-top: 7px;
  line-height: 33px;
}

.effect-2 .member-image {
  border-bottom: 5px solid #1fb554;
  height: 212px;
  overflow: hidden;
  width: 100%;
  transition: 0.4s;
  display: inline-block;
  float: none;
  vertical-align: middle;
}

.effect-2 .member-info {
  transition: 0.4s;
}

.effect-2 .member-image img {
  width: 100%;
  vertical-align: bottom;
}

.effect-2 .social-touch {
  background-color: #1fb554;
  float: left;
  left: 0;
  bottom: 0;
  overflow: hidden;
  padding: 5px 0;
  width: 100%;
  transition: 0.4s;
}

.effect-2:hover .member-image {
  height: 81px;
  transition: 0.4s;
}

/*= effect-2 css end =*/

/*= effect-3 css =*/
.effect-3 {
  max-height: 302px;
  min-height: 302px;
  overflow: hidden;
}

.effect-3 h3 {
  padding-top: 7px;
  line-height: 33px;
}

.effect-3 .member-image {
  border-bottom: 5px solid #e5642b;
  transition: 0.4s;
  height: 212px;
  width: 100%;
  display: inline-block;
  float: none;
  vertical-align: middle;
}

.effect-3 .member-info {
  transition: 0.4s;
}

.effect-3 .member-image img {
  width: 100%;
  vertical-align: bottom;
}

.effect-3 .social-touch {
  background-color: #fff;
  float: left;
  left: 0;
  bottom: 0;
  overflow: hidden;
  padding: 5px 0;
  width: 100%;
  transition: 0.4s;
}

.effect-3:hover .member-image {
  border-bottom: 0;
  border-radius: 0 0 50px 50px;
  height: 81px;
  display: inline-block;
  overflow: hidden;
  width: 109px;
  transition: 0.4s;
}

/*= effect-3 css end =*/

/*= effect-4 css =*/
.effect-4 {
  max-height: 289px;
  min-height: 289px;
  overflow: hidden;
}

.effect-4 h3 {
  line-height: 35px;
}

.effect-4 .member-image {
  position: absolute;
  width: 100%;
  transition: 0.4s;
}

.effect-4 .member-image img {
  width: 100%;
}

.effect-4 .more-info {
  height: 0;
  transition: 0.4s;
  overflow: hidden;
  z-index: 9;
  position: relative;
  background-color: #fff;
}

.effect-4:hover .more-info {
  height: 208px;
  transition: 0.4s;
}

/*= effect-4 css end =*/

/*= effect-5 css =*/
.effect-5 {
  max-height: 289px;
  min-height: 289px;
  overflow: hidden;
}

.effect-5 .member-info {
  background-color: #fff;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  height: 82px;
  transition: 0.3s;
  z-index: 2;
}

.effect-5 .member-image {
  margin-top: 82px;
  float: left;
  width: 100%;
  position: relative;
  transition: 0.3s;
  z-index: 4;
}

.effect-5 .member-image img {
  width: 100%;
}

.effect-5 .member-info:before {
  border-left: 140px solid transparent;
  border-right: 140px solid transparent;
  border-top: 15px solid #fff;
  bottom: -15px;
  content: "";
  left: 0;
  position: absolute;
  z-index: 9;
}

.effect-5:hover .member-info {
  height: 215px;
  transition: 0.3s;
  z-index: 6;
}

.effect-5:hover .member-image {
  margin-top: 200px;
  transition: 0.3s;
}

/*= effect-5 css end =*/

/*= effect-6 css =*/
.effect-6 {
  max-height: 289px;
  min-height: 289px;
  overflow: hidden;
}

.effect-6 .member-info {
  background-color: #fff;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  height: 82px;
  transition: 0.3s;
  z-index: 2;
}

.effect-6 .member-image {
  margin-top: 82px;
  float: left;
  width: 100%;
  position: relative;
  transition: 0.3s;
  z-index: 4;
  overflow: hidden;
}

.effect-6 .member-image img {
  width: 100%;
}

.effect-6:hover .member-info {
  height: 215px;
  transition: 0.3s;
  z-index: 6;
  border-radius: 0 0 50% 50%;
  overflow: hidden;
}

.effect-6:hover .member-image {
  margin-top: 100px;
  transition: 0.3s;
  border-radius: 0;
}

/*= effect-6 css end =*/

/*= effect-7 css =*/
.effect-7 {
  max-height: 289px;
  min-height: 289px;
  overflow: hidden;
}

.effect-7 h3 {
  line-height: 35px;
}

.effect-7 .member-image {
  position: absolute;
  bottom: 0;
  width: 100%;
  transition: 0.4s;
  z-index: 1;
}

.effect-7 .member-image img {
  width: 100%;
  transition: 0.4s;
  opacity: 1;
  height: 100%;
}

.effect-7 .more-info {
  height: 208px;
  transition: 0.4s;
  overflow: hidden;
  position: relative;
  background-color: #fff;
}

.effect-7:hover .member-image {
  bottom: 40%;
}

.effect-7:hover .member-image img {
  width: 0;
  height: 0;
  transition: 0.4s;
  opacity: 0;
}

/*= effect-7 css end =*/

/*= effect-8 css =*/
.effect-8 {
  max-height: 289px;
  min-height: 289px;
  overflow: hidden;
  perspective: 800px;
}

.effect-8 h3 {
  line-height: 35px;
}

.effect-8 .member-image {
  position: absolute;
  bottom: 0;
  width: 100%;
  transition: 0.4s;
  z-index: 1;
}

.effect-8 .member-image img {
  width: 100%;
  transition: 0.4s;
  height: 100%;
}

.effect-8 .more-info {
  height: 208px;
  transition: 0.4s;
  overflow: hidden;
  position: relative;
  background-color: #fff;
}

.effect-8:hover .member-image {
  transform: rotateX(82deg);
  transform-origin: center bottom 0;
  transition: 0.4s;
}

/*= effect-8 css end =*/

/*= effect-9 css =*/
.effect-9 {
  max-height: 289px;
  min-height: 289px;
  overflow: hidden;
  perspective: 800px;
}
.consult{ font-family:"Microsoft YaHei",\5FAE\8F6F\96C5\9ED1,"微软雅黑";font-size:12px;}
.consult_contact{position:fixed;bottom:22%;right:0;width:114px;height:114px;cursor:pointer;z-index: 999}
.consult_wrap{position:relative;width:114px;height:114px;}
.consult_wrap .tip{position:absolute;right:95px;top:45px;display:none;width:150px;height:24px;border-radius:3px;font-size:14px;line-height:24px;text-align:center;background:#3091f2;color:#fff;-webkit-transition:display 1s ease;transition:display 1s ease;}
.consult_wrap .tip:after{position:absolute;right:-8px;top:50%;content:"";width:0;height:0;border-top:4px solid transparent;border-right:4px solid transparent;border-bottom:4px solid transparent;border-left:4px solid #3091f2;-webkit-transform:translateY(-50%);transform:translateY(-50%);}
.consult_contact img{position:absolute;left:50%;top:50%;width:auto;-webkit-transform:translate3d(-50%, -50%, 0);transform:translate3d(-50%, -50%, 0);}
.consult_contact .staff_img{z-index:999;}
@keyframes ballRotate{0%{transform:rotate(0);}
 100%{transform:rotate(360deg);}
}
.consult_contact .ball{top:20px;width:auto;transform-origin:0 38px;animation:ballRotate 2.5s infinite linear;z-index:9999;}
@keyframes bg2Animation{0%{opacity:0;}
 50%{opacity:1;}
 100%{opacity:0;}
}
.consult_contact .bg-2{animation:bg2Animation 2.5s infinite linear;}
.consult_contact:hover .tip{display:block;}

.effect-9 h3 {
  line-height: 35px;
}

.effect-9 .member-image {
  position: absolute;
  bottom: 0;
  width: 100%;
  transition: 0.4s;
  z-index: 1;
}

.effect-9 .member-image img {
  width: 100%;
  transition: 0.4s;
  height: 100%;
}

.effect-9 .more-info {
  height: 208px;
  transition: 0.4s;
  overflow: hidden;
  position: relative;
  background-color: #fff;
}

.effect-9:hover .member-image {
  transform: translateY(100%);
  transition: 0.4s;
}

.shoesfor {
  float: left;
  position: relative;
  width: 280px;
  height: 302px;
  margin: 25px 25px 30px 20px;
}

/*= effect-9 css end =*/

/*= Media Query
    =============== */
@media only screen and (max-width: 980px) {
  .row {
    width: 100%;
    margin: 110px 0;
  }

  .team-members {
    text-align: center;
  }

  .single-member {
    float: none;
    display: inline-block;
    vertical-align: bottom;
  }
}

/*= Media Query End
    =================== */
</style>