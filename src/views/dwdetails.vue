<template>
  <div>
    <div class="bg-picture">
      <my-header></my-header>
      <div class="row killer">

        <div class="col-6 px-0 background-color:#fff">
          <div class="row">
            <div id="preview" class="col pr-0">
              <div class="card bg-transparent mr-5 position-absolute">
                <img  :src="`http://127.0.0.1:3000/`+pics[0].md" class="main_picture w-100" />
                <div id="mask" class="position-absolute" v-show="show" :style="maskStyle"></div>
                <div @mouseover="toggle" @mouseout="toggle" @mousemove="drag" id="super-mask" class="position-absolute"></div>
                <div id="div-lg" class="position-absolute abo" v-show="show" :style="{'background-position':gbPosition}"></div>
              </div>
            </div>


          </div>
          <!---->
          <div class="row">
            <ul class="img_size d-flex list-unstyled iopcu">
              <li>
                <img src="../../src/assets/img/watch/sm_1_10.png" />
              </li>
              <li>
                <img src="../../src/assets/img/watch/sm_1_7.png" />
              </li>
              <li>
                <img src="../../src/assets/img/watch/sm_1_1.png" />
              </li>
              <li>
                <img src="../../src/assets/img/watch/sm_1_2.png" />
              </li>
              <li>
                <img src="../../src/assets/img/watch/sm_1_3.png" />
              </li>
              <li>
                <img src="../../src/assets/img/watch/sm_1_9.png" />
              </li>
            </ul>
          </div>
        </div>



        <div class="col-6 right_border_10">
          <div class="right_all_10 mx-0">
            <div>
              <span class="DAPP">D A P P E R | 3 4 M M</span>
              <h1 class="YORK my-3">Y &nbsp;O &nbsp;R &nbsp;K</h1>
              <div class="yanse mt-3">
                <h3 class="f-font my-3">颜色</h3>
                <img src="../../src/assets/img/watch/circle.png" class="circle" />
              </div>
              <div class="chicun mb-3">
                <hr />
                <h3 class="f-font">尺寸</h3>
                <img src="../../src/assets/img/watch/circle.png" class="circle" />
                <img src="../../src/assets/img/watch/circle.png" class="circle" />
              </div>

              <button
                      class="f-font btn-price"
                      style="display: block;width:360px;height:50px;background:#000e22"
              >
                <span style="padding-right:40px;color: #cdbc7a">
                  ￥ 1,290
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
                </span>
                <span style="color: #cdbc7a">立即购买</span>
              </button>
              <ul
                      class="list-unstyled d-flex justify-content-around chengnuo"
                      style="margin-top: 18px;margin-bottom: 8px;"
              >
                <li>
                  <img src="../../src/assets/img/watch/baoyou.png" />
                  <p class="f-font text-center">顺丰包邮</p>
                </li>
                <li>
                  <img src="../../src/assets/img/watch/zhibao.png" />
                  <p class="f-font text-center">两年质保</p>
                </li>
                <li>
                  <img src="../../src/assets/img/watch/fenqi.png" />
                  <p class="f-font text-center">花呗分期</p>
                </li>
              </ul>
              <button style="display: block;width:360px;height:50px;background:#cdbd7a">
                <span style="display: block;" class="f-font">开启个性定制服务</span>
              </button>
              <div class="fenxiang" style="margin-top:20px;text-align: center;">
                <span>分享：</span>
                <img src="../../src/assets/img/watch/weixin.png" style="margin:0 20px 0 20px;" />
                <img src="../../src/assets/img/watch/weibo.png" style="margin:0 20px 0 0;" />
                <img src="../../src/assets/img/watch/kongjian.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div style="width:1000px;margin: 0 auto;padding:40px 0;">
      <div style="display: flex;">
        <img
                src="../../src/assets/img/zhengfangxing.png"
                style="width:18px;height: 18px;margin: 10px 15px 0 70px;"
        />
        <div style="position: relative;width:100%">
          <p>定制贺卡</p>
          <hr />
          <p style="font-size:13px;position: absolute;top: 40px;">GREETING CARD</p>
        </div>
        <div style="padding: 0 120px 0 32px;position: relative;">
          <span style="padding-right:20px;position: absolute;bottom: 8px;">￥0</span>
          <img
                  src="../../src/assets/img/xiala.png"
                  style="width:16px;height: 14px;position: relative;left: 50px;top:55px; "
          />
        </div>
      </div>

      <div
              style="text-align: center;margin:0 auto;line-height: 50px;border:2px solid #85714d;width: 300px;height:50px;margin-top: 40px;"
      >
        <span>&nbsp;&nbsp;&nbsp;&nbsp;￥0 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;加入购物车</span>
      </div>
    </div>

    <div class="backcolor_10">
      <div style="text-align: center;">
        <h2 style="margin-bottom: 30px;margin-top: 30px;">DAPPER</h2>
        <p>DAPPER系列腕表，罗马数字加上日期的搭配，利用优雅的湛蓝作为指针的颜</p>
        <p>色，凸显浪漫的北欧风情。</p>
      </div>
      <div>
        <img src="../../src/assets/img/watch/girl.jpg" style="width:100%;" alt />
      </div>
      <div style="background: #00081c;height:367px;margin-bottom: 40px;">
        <div
                style="background: #fff;height:322px;width:900px;margin:0 auto;display: flex;"
                class="justify-content-around liebiao"
        >
          <ul class="list-unstyled;">
            <li>
              <span>尺寸</span>
              <span style="float:right;">38mm</span>
            </li>
            <li>
              <span>表盘颜色</span>
              <span>蛋白壳</span>
            </li>
            <li>
              <span>Case thickness</span>
              <span>6mm</span>
            </li>
            <li>
              <span>表带尺寸</span>
              <span>190*19mm</span>
            </li>
          </ul>
          <ul class="list-unstyled">
            <li>
              <span>机芯</span>
              <span>日本石英机芯</span>
            </li>
            <li>
              <span>表带颜色</span>
              <span>棕色鳄鱼纹路</span>
            </li>
            <li>
              <span>牛皮革</span>
              <span>是</span>
            </li>
            <li>
              <span>防水等级</span>
              <span>30米生活防水</span>
            </li>
          </ul>

        </div>
      </div>
      <div class="d-flex" style="background: #f4f4f4;">
        <img
                src="../../src/assets/img/watch/sm_1_1.png"
                style="width:300px;height:282px;margin-left:90px;"
        />
        <div style="padding: 75px 0 0 30px;">
          <h2>PETITE 系列</h2>
          <p style="margin-top: 15px;">32mm/28mm精致表盘，遵循人体工学设计，彰显女士纤巧玉腕，愈显迷人</p>
        </div>
      </div>

      <div style="position: relative;">
        <img src="../../src/assets/img/watch/packaging-pc.png" style="width:100%" />
        <div style="text-align: center;position: absolute;top: 100px;width: 365px;left:310px;">
          <p style="font-size:18px;margin-bottom: 0;">雅致包装</p>
          <p
                  style="font-size:14px;margin-bottom: 0;margin-top: 20px;"
          >所有从Daniel Wellington官网选购的单品或套装, 均享雅致礼盒和精美手袋包装。</p>
        </div>
      </div>
      <hr class="m-0" />

      <div class="d-flex" style="height: 300px;">
        <h2 style="color: #00081c;font-size: 18px;width: 180px;line-height: 300px;">价格说明</h2>

        <div style="width: 750px;padding:52px 0;">
          <ul class="list-unstyled">
            <li style="padding-bottom: 40px;">
              <h3 style="font-size: 16px;color: #00081c;">划线价格</h3>
              <p
                      style="font-size: 14px;color: #757575"
              >指商品的专柜价、吊牌价、建议零售价或该商品的曾经展示过的销售价格等，并非原价，仅供您参考。</p>
            </li>
            <li>
              <h3 style="font-size: 16px;color: #00081c;">未划线价格</h3>
              <p
                      style="font-size: 14px;color: #757575"
              >指商品的实时标价，具体成交价格根据商品参加活动，或因顾客使用折扣码、优惠券、积分等发生变化，最终以订单结算页价格为准。</p>
            </li>
          </ul>
        </div>
      </div>
      <hr class="m-0" />

      <div class="d-flex" style="height: 300px;">
        <div style="line-height: 300px;">更换表带教程</div>
        <div style="padding: 75px 0 0 85px;">
          <img src="../../src/assets/img/watch/video-PC.jpg" style="width: 750px;height:120px;" />
          <p
                  style="text-align: center;margin-top: 10px;font-size: 14px;color: #757575"
          >更换表带教程，学习如何拆卸皮质/织纹表带</p>
        </div>
      </div>
      <hr class="m-0" />

      <div class="d-flex" style="height: 300px;">
        <div style="line-height: 300px;width: 110px;">日常保养</div>
        <div style="text-align: center" class="w-100">
          <ul
                  class="list-unstyled d-flex justify-content-around chengnuo"
                  style="margin-top: 100px;margin-bottom: 40px;"
          >
            <li>
              <img src="../../src/assets/img/watch/clean.png" />
              <p class="f-font text-center">可用软布擦拭或软刷清洁</p>
            </li>
            <li>
              <img src="../../src/assets/img/watch/stopHit.png" />
              <p class="f-font text-center">避免接触尖锐物体</p>
            </li>
            <li>
              <img src="../../src/assets/img/watch/stopWash.png" />
              <p class="f-font text-center">请勿在潮湿环境中佩戴(浴室、泳池等)</p>
            </li>
          </ul>
        </div>
      </div>
      <hr class="m-0" />
    </div>
    <p style="font-size:18px;margin:30px 0px 20px 0px;">搭配灵感</p>
    <div style="background: #f4f4f4; display: flex;justify-content: space-around;">
      <div style="display: flex; width: 1100px; ">
        <div class="margcc">
          <img
                  class="w-100"
                  src="../../src/assets/img/watch/1_1.jpg"
                  style="float: left; width:400px;height: 268px;"
          />
        </div>
        <div class="margcc">
          <img
                  class="w-100"
                  src="../../src/assets/img/watch/2_2.jpg"
                  style="float: left; width:400px;height: 268px;"
          />
        </div>
        <div class="margcc">
          <img
                  class="w-100"
                  src="../../src/assets/img/watch/2_5.jpg"
                  style="float: left; width:400px;height: 268px;"
          />
        </div>
        <div class="margcc">
          <img
                  class="w-100"
                  src="../../src/assets/img/watch/3_2.jpg"
                  style="float: left; width:400px;height: 268px;"
          />
        </div>
      </div>
    </div>

    <h2 style="font-size:18px;margin:30px 0px 20px 0px;">您可能也喜欢</h2>
    <div>
      <div
              style="display: flex;justify-content: space-around;width:1300px;margin:0 auto;"
              class="change"
      >
        <div>
          <img src="../../src/assets/img/watch/501.png" style="width:241px;height: 241px;" />
          <p>D A P P E R S T M A W E S</p>
          <span>28 MM | 32MM</span>
          <p>￥ 1190</p>
        </div>
        <div>
          <img src="../../src/assets/img/watch/502.png" style="width:241px;height: 241px;" />
          <p>D A P P E R S T M A W E S</p>
          <span>28 MM | 32MM | 36MM</span>
          <p>￥ 1290</p>
        </div>
        <div>
          <img src="../../src/assets/img/watch/503.png" style="width:241px;height: 241px;" />
          <p>D A P P E R S T M A W E S</p>
          <span>28 MM | 32MM | 36MM</span>
          <p>￥ 1290</p>
        </div>
        <div>
          <img src="../../src/assets/img/watch/504.png" style="width:241px;height: 241px;" />
          <p>D A P P E R S T M A W E S</p>
          <span>28 MM | 32MM | 36MM</span>
          <p>￥ 1290</p>
        </div>
      </div>
    </div>
    <!-- <foot></foot>-->
  </div>







</template>


<script>
    import FooTer from "./footer.vue"
export default {
    components: {
        "foot": FooTer,
    },
        data(){
            return{
                product:{},
                pics:[{md:""}],
                show: false, //定义mask，div-lg两个元素的显示和隐藏
                times: 0, //记录点击按钮左移的li个数（次数）
                // ul的margin-left始终=time*-62
                // 左边按钮，当times=0时（没有左移的li时），禁用（启用class disabled）
                // 右边按钮，当times=总图片张数-4时（已没有多余图片，可以左移了）禁用（启用class disabled）
                // 其实，总图片张数<=4张时，也禁用右边按钮
                // 点击右边按钮，ul左移一个li，times+1
                // 点击左边按钮，ul右移一个li，times-1
                // times变化，自动触发两个按钮的disabled class状态和ul的margin-left值变化
                i: 0, //记录当前鼠标进入第几张小图片
                // 中图片的src等于pics中第i张图片的中图片版本
                // 大图片div的background-image属性，拿到的是pics数组中第i张图片的大图片版本
                // 每次鼠标进入第i张小图片时，将i改为小图片的下标位置，触发页面中图片的src和大图片background-image自动变化
                maskStyle: { left: 0, top: 0 },
                specs: []



                }
        },
        methods:{
            load1(){
                (async () => {
                    var result = await this.axios.get(
                        "http://127.0.0.1:3000/dwdetail",
                        {
                            params: {lid:this.$route.params.lid}
                        }
                    );

                    this.product = result.data.product;
                    this.pics = result.data.pics;

                    
                    
                })();
            },
            //   当鼠标在super-mask div上移动时
            drag(e) {
                // 通8过实践对象获得鼠标相对于div左上角的偏移量，-mask的一半大小，就算出mask左上角相对于div左上角的left和top值
                var left = e.offsetX-88;
                var top = e.offsetY-88;
                //如果mask左边越界，就停留在最左边，而不超出
                if (left < 0) {
                    left = 0;
                }
                //否则如果left超过mImg的宽-mask的宽，说明右边越界，就停留在最右边，而不超出
                else if (left > 176) {
                    left = 176
                }
                //如果mask上边越界，就停留在最上边，而不超出
                if (top < 0) {
                    top = 0;
                }
                //否则如果top超过mImg的高-mask的高，说明下边越界，就停留在最下边，而不超出
                else if (top > 176) {
                    top = 176
                }
                //为最终计算结果left和top添加单位
                left = left + "px";
                top = top + "px";
                //修改maskStyle对象，自动触发页面mask元素位置的更改
                this.maskStyle = { left, top };
            },
            //鼠标进出div，切换this.show为true或false
            toggle() {
                this.show = !this.show;
            },
            //当鼠标进入第i个小图片时
            changei(e) {
                //如果进入的img元素
                if (e.target.nodeName == "IMG") {
                    // 就修改变量i的值为img元素v-for绑定时，用自定义属性data-i缓存的自己对应的序号
                    this.i = e.target.dataset.i;
                }
            },
            move(n) {
                if (this.pics.length > 4) {
                    this.times += n;
                    if (this.times < 0) {
                        this.times = 0;
                    } else if (this.times > this.pics.length - 4) {
                        this.times = this.pics.length - 4;
                    }
                }
            },
            load() {
                (async () => {
                    var result = await this.axios.get("/details", {
                        params: {
                            lid: this.$route.params.lid
                        }
                    });

                    this.product = result.data.product;

                    this.specs = result.data.specs;
                    this.pics = result.data.pics;
                })();
            }







        },
        //用watch 监视变量，只要props变量变化，就重新查找数据 修改data中的变量引起页面切换
        props: ["lid"],
    computed: {
        gbPosition() {
            return `${-parseInt(this.maskStyle.left) * 16/7}px
      ${-parseInt(this.maskStyle.top) * 16/7}px`;
        }
    },
        created(){
             this.load1();
        },
        watch:{
            $route(){
                this.load1();
                this.times = 0;
                this.i = 0;
                //   所有修改后的内容，都需要重置
                this.maskStyle = { left: 0, top: 0 };
                this.show = false;
                this.load();

            }
        }




};
</script>
<style scoped>
  /*定制规格参数按钮的颜色*/
  #details > div:nth-child(5) > div .btn-outline-secondary:hover {
    color: #0069d9;
    background-color: #f5f5f5;
    border-color: #e4393c;
  }
  #details > div:nth-child(5) > div .btn-outline-secondary.active {
    color: #6c757d;
    background-color: #f5f5f5;
    border-color: #e4393c;
    border-width: 2px;
  }
  /*定制数量按钮的颜色*/
  #details > div:nth-child(6) .btn-outline-secondary {
    width: 30px;
  }
  #details > div:nth-child(6) .btn-outline-secondary:hover,
  #details > div:nth-child(6) .btn-outline-secondary:active,
  #details > div:nth-child(6) .btn-outline-secondary:focus {
    color: #6c757d;
    background-color: #f5f5f5;
    border-color: #0069d9;
    box-shadow: none;
  }
  /*定制立即购买按钮背景色*/
  #details > div:nth-child(7) > a:first-child {
    background: linear-gradient(to bottom, #f0f0f0, #e0e0e0);
  }

  /*定制放大镜样式*/
  #preview > .card > .card-body > div {
    width: 248px;
    overflow: hidden;
  }
  #preview > .card > .card-body > div > ul {
    /* 这里不要写all，会导致ul宽变化也出现不应该有的过渡，应该只有margin-left变化时，才需要过渡效果，所以，transition只监听margin-left即可 */
    transition: margin-left 0.5s linear;
  }
  #preview > .card > .card-body > div > ul > li {
    width: 62px;
    height: 62px;
  }
  #preview > .card > .card-body > div > ul img {
    width: 52px;
    height: 52px;
  }
  #preview > .card > .card-body > div > ul img:hover {
    border: 1px solid #e4393c;
  }
  #preview > div > img {
    width: 354px;
  }
  #mask {
    width: 176px;
    height: 176px;
    background-color: #ffa;
    opacity: 0.5;
  }
  #super-mask {
    width: 500px;
    height: 500px;
  }
  #div-lg {
    width: 400px;
    height: 400px;
    left: 354px;
    z-index: 1000;
    border: 1px solid rgba(0, 0, 0, 0.125);
  }
  .abo{
    background-image: url("../assets/imgss/fangda1.png");
  }




  /*商品详情背景图片 */
  .bg-picture {
    background-image: url(../../src/assets/img/watch/RRbackground.jpg);
    height: 607px;
  }
  .backcolor_10 {
    background-color: #fff;
    width: 1000px;
    margin: 0 auto;
  }

  .killer {
    width: 1000px;
    margin: 0 auto;
    background: #fff;
  }
  /* !* 上面大图 *! */
  /*.main_picture {
    width: 500px;
    height: 500px;
  }*/
  /* !* 下面细节图 *! */
  .img_size li > img {
    width: 87px;
    height: 87px;
  }
  .right_border_10 {
    background: #fafafa;
    padding-left: 70px;
  }

  .right_all_10 {
    width: 360px;
    height: 607px;
    padding-top: 25px;
  }

  .DAPP {
    display: block;
    /*font-size: px;*/
    color: #00081c;
    padding-bottom: 5px;
    text-align: center;
  }
  .YORK {
    font-size: 24px;
    color: #00081c;
    text-align: center;
    margin-bottom: 20px;
    padding: 10px 20px 0;
  }

  .f-font {
    font-size: 12px;
    color: #00081c;
  }
  .circle {
    width: 30px;
    height: 30px;
  }

  .yanse {
    text-align: center;
  }
  .chicun {
    text-align: center;
    margin: 30px 0;
  }
  .chengnuo li img {
    width: 45px;
    height: 45px;
    margin-bottom: 10px;
  }

  .fenxiang img {
    width: 23px;
    height: 23px;
  }
  .margcc {
    padding: 0px 10px 0px 0px;
  }
  .margcc img:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
  .change div:hover {
    background: rgb(218, 178, 178);
    cursor: pointer;
  }
  .liebiao ul li {
    width: 300px;
    height: 70px;
    line-height: 70px;
    display: block;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #e8e8e8;
  }
  .liebiao ul li span {
    font-size: 14px;
  }
  .iopcu{
    margin-top: 500px;
  }
</style>