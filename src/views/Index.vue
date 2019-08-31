<template>
    <div>
        <el-header>
            <el-row>
                <el-col :span="24"><my-header></my-header></el-col>
                <el-col :span="24">
                    <el-carousel indicator-position="outside" height="700px">
                        <el-carousel-item v-for="item in 4" :key="item">
                            <h3>{{ item }}</h3>
                        </el-carousel-item>
                    </el-carousel>
                </el-col>
            </el-row>
        </el-header>
        <el-main>
            <el-row :gutter="10">
                <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
                    123
                </el-col>
                <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">

                    <div class="bbq">

                      <div v-show="show2" v-for="(item,i) of list" :key="i" class="single-member effect-3">
                        <div class="member-image">
                            <img :src="'http://127.0.0.1:3000/'+item.img_url" alt="Member">
                        </div>
                        <div class="member-info">
                            <h3>{{item.title}}</h3>
                            <h5>{{item.price}}</h5>
                            <p>usmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div class="social-touch">
                                <a class="fb-touch" href="#">
                                    <el-button type="danger">立即购买</el-button>
                                </a>
                                <a class="tweet-touch" href="#">

                                </a>
                                <a class="linkedin-touch" href="#">
                                    <el-button type="warning">加入购物车</el-button>
                                </a>
                            </div>
                        </div>
                      </div>




                    </div>

                </el-col>

                <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">

                    <div class="bbq">

                        <div v-show="show2" v-for="(item,i) of list" :key="i" class="single-member effect-3">
                            <div class="member-image">
                                <img :src="'http://127.0.0.1:3000/'+item.img_url" alt="Member">
                            </div>
                            <div class="member-info">
                                <h3>{{item.title}}</h3>
                                <h5>{{item.price}}</h5>
                                <p>usmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <div class="social-touch">
                                    <a class="fb-touch" href="#">
                                        <el-button type="danger">立即购买</el-button>
                                    </a>
                                    <a class="tweet-touch" href="#">

                                    </a>
                                    <a class="linkedin-touch" href="#">
                                        <el-button type="warning">加入购物车</el-button>
                                    </a>
                                </div>
                            </div>
                        </div>


                    </div>


                </el-col>

                <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
                    123
                </el-col>
                <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"></el-col>
                <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
                    <el-button @click="loadMore" type="info" plain>加载更多</el-button></el-col>
                <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
                    <el-button @click="loadMore" type="info" plain>加载更多</el-button></el-col>
                <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"></el-col>
            </el-row>


        </el-main>


        <div>






        </div>

    </div>

</template>
<script>
    import ElCol from "element-ui/packages/col/src/col";

    export default {
        components: {ElCol},
        data(){
          return{
              list:[],//保存玩服务器返回商品列表
              pno:0,//当前页码
              show2: true
          }
        },
        created(){
          this.loadMore();
        },
        methods:{
            loadMore(){
                //功能一，当组件创建成功后获取第一页数据
                //1.创建url地址
                var url = "product";
                //将当前页码加一
                this.pno++;
                var obj = {pno:this.pno};
                //2.发送ajax请求获取第一页数据
                this.axios.get(url,{params:obj}).then(res=>{
                    //console.log(res.data.data);
                    //3.将数据保存在data中
                    //this.list = res.data.data;
                    //数组拼接的操作
                    var rows = this.list.concat(res.data.data);
                    this.list = rows;
                })

            },
        }

    }
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

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
    /*********************************************************************************************/
    .bbq{ font-family: Lato,'Open Sans', sans-sarif; font-size: 16px; background-color: #1F1F1F; }
    .bbq{margin: 0; padding: 0; box-sizing: border-box;}
    /*= common css to all effects =*/
    .single-member{width: 280px; float: left; margin: 30px 2.5%; background-color: #fff; text-align: center; position: relative;}
    .member-image img{max-width: 100%; vertical-align: middle;}
    h3 {font-size: 24px; font-weight: normal; margin: 10px 0 0; text-transform: uppercase;}
    h5 {font-size: 16px; font-weight: 300; margin: 0 0 15px; line-height: 22px;}
    p {font-size: 14px; font-weight: 300; line-height: 22px; padding: 0 30px; margin-bottom: 10px;}
    .social-touch a{display: inline-block; width: 50px; height: 26px; vertical-align: middle; margin: 0 2px; /*background-image: url(../assets/imgss/social-icons.png);*/ background-repeat: no-repeat; opacity: 0.7; transition: 0.3s;}
    .social-touch a:hover{opacity: 1; transition: 0.3s;}
    .fb-touch{background-position: 0 0; margin-left: -50px!important;}
    .tweet-touch{background-position: -35px 0;}
    .linkedin-touch{background-position: -71px 0;}
    .icon-colored .fb-touch{background-position: 0 -27px;}
    .icon-colored .tweet-touch{background-position: -35px -27px;}
    .icon-colored .linkedin-touch{background-position: -71px -27px;}
    /*= common css to all effects end =*/

    /*= effect-1 css =*/
    .effect-1{border-radius: 5px 5px 0 0; padding-bottom: 40px;}
    .effect-1 .member-image {border: 2px solid #fff; border-radius: 60px 0; display: inline-block; margin-top: -72px; overflow: hidden; transition: 0.3s;}
    .effect-1 .social-touch{background-color: #e13157; position: absolute; left: 0; bottom: 0; height: 5px; overflow: hidden; padding: 5px 0 0; width: 100%; transition: 0.3s;}
    .effect-1 .member-image img{transition: 0.3s; border-radius: 60px 0;}
    .effect-1:hover .member-image{border-color: #e13157; transition: 0.3s; border-radius: 50%;}
    .effect-1:hover .social-touch{padding: 6px 0; height: 38px; transition: 0.3s;}
    /*= effect-1 css end =*/

    /*= effect-2 css =*/
    .effect-2{max-height: 302px; min-height: 302px; overflow: hidden;}
    .effect-2 h3{padding-top: 7px; line-height: 33px;}
    .effect-2 .member-image{border-bottom: 5px solid #1fb554; height: 212px; overflow: hidden; width: 100%; transition: 0.4s; display: inline-block; float: none; vertical-align: middle;}
    .effect-2 .member-info{transition: 0.4s;}
    .effect-2 .member-image img{width: 100%; vertical-align: bottom;}
    .effect-2 .social-touch{background-color: #1fb554; float: left; left: 0; bottom: 0; overflow: hidden; padding: 5px 0; width: 100%; transition: 0.4s;}
    .effect-2:hover .member-image{height: 81px; transition: 0.4s;}
    /*= effect-2 css end =*/

    /*= effect-3 css =*/
    .effect-3{max-height: 302px; min-height: 302px; overflow: hidden;}
    .effect-3 h3{padding-top: 7px; line-height: 33px;}
    .effect-3 .member-image{border-bottom: 5px solid #e5642b; transition: 0.4s; height: 212px; width: 100%; display: inline-block; float: none; vertical-align: middle;}
    .effect-3 .member-info{transition: 0.4s;}
    .effect-3 .member-image img{width: 100%; vertical-align: bottom;}
    .effect-3 .social-touch{background-color: #fff; float: left; left: 0; bottom: 0; overflow: hidden; padding: 5px 0; width: 100%; transition: 0.4s;}
    .effect-3:hover .member-image{border-bottom: 0; border-radius: 0 0 50px 50px; height: 81px; display: inline-block; overflow: hidden; width: 109px; transition: 0.4s;}
    /*= effect-3 css end =*/

    /*= effect-4 css =*/
    .effect-4{max-height: 289px; min-height: 289px; overflow: hidden;}
    .effect-4 h3{line-height: 35px;}
    .effect-4 .member-image{position: absolute; width: 100%; transition: 0.4s;}
    .effect-4 .member-image img{width: 100%;}
    .effect-4 .more-info{height: 0; transition: 0.4s; overflow: hidden; z-index: 9; position: relative; background-color: #fff;}
    .effect-4:hover .more-info{height: 208px; transition: 0.4s;}
    /*= effect-4 css end =*/

    /*= effect-5 css =*/
    .effect-5{max-height: 289px; min-height: 289px; overflow: hidden;}
    .effect-5 .member-info {background-color: #fff; position: absolute; width: 100%; top: 0; left: 0; height: 82px; transition: 0.3s; z-index: 2;}
    .effect-5 .member-image{margin-top: 82px; float: left; width: 100%; position: relative; transition: 0.3s; z-index: 4;}
    .effect-5 .member-image img{width: 100%;}
    .effect-5 .member-info:before{border-left: 140px solid transparent; border-right: 140px solid transparent; border-top: 15px solid #fff; bottom: -15px; content: ""; left: 0; position: absolute; z-index: 9;}
    .effect-5:hover .member-info{height: 215px; transition: 0.3s; z-index: 6;}
    .effect-5:hover .member-image{margin-top: 200px; transition: 0.3s;}
    /*= effect-5 css end =*/

    /*= effect-6 css =*/
    .effect-6{max-height: 289px; min-height: 289px; overflow: hidden;}
    .effect-6 .member-info {background-color: #fff; position: absolute; width: 100%; top: 0; left: 0; height: 82px; transition: 0.3s; z-index: 2;}
    .effect-6 .member-image{margin-top: 82px; float: left; width: 100%; position: relative; transition: 0.3s; z-index: 4; overflow: hidden;}
    .effect-6 .member-image img{width: 100%;}
    .effect-6:hover .member-info{height: 215px; transition: 0.3s; z-index: 6; border-radius: 0 0 50% 50%; overflow: hidden;}
    .effect-6:hover .member-image{margin-top: 100px; transition: 0.3s; border-radius: 0;}
    /*= effect-6 css end =*/

    /*= effect-7 css =*/
    .effect-7{max-height: 289px; min-height: 289px; overflow: hidden;}
    .effect-7 h3{line-height: 35px;}
    .effect-7 .member-image{position: absolute; bottom: 0; width: 100%; transition: 0.4s; z-index: 1;}
    .effect-7 .member-image img{width: 100%; transition: 0.4s; opacity: 1; height: 100%;}
    .effect-7 .more-info{height: 208px; transition: 0.4s; overflow: hidden; position: relative; background-color: #fff;}
    .effect-7:hover .member-image{bottom: 40%;}
    .effect-7:hover .member-image img{width: 0; height: 0; transition: 0.4s; opacity: 0;}
    /*= effect-7 css end =*/

    /*= effect-8 css =*/
    .effect-8{max-height: 289px; min-height: 289px; overflow: hidden;  perspective: 800px;}
    .effect-8 h3{line-height: 35px;}
    .effect-8 .member-image{position: absolute; bottom: 0; width: 100%; transition: 0.4s; z-index: 1;}
    .effect-8 .member-image img{width: 100%; transition: 0.4s; height: 100%;}
    .effect-8 .more-info{height: 208px; transition: 0.4s; overflow: hidden; position: relative; background-color: #fff;}
    .effect-8:hover .member-image{transform: rotateX(82deg); transform-origin: center bottom 0; transition: 0.4s;}
    /*= effect-8 css end =*/

    /*= effect-9 css =*/
    .effect-9{max-height: 289px; min-height: 289px; overflow: hidden;  perspective: 800px;}
    .effect-9 h3{line-height: 35px;}
    .effect-9 .member-image{position: absolute; bottom: 0; width: 100%; transition: 0.4s; z-index: 1;}
    .effect-9 .member-image img{width: 100%; transition: 0.4s; height: 100%;}
    .effect-9 .more-info{height: 208px; transition: 0.4s; overflow: hidden; position: relative; background-color: #fff;}
    .effect-9:hover .member-image{transform: translateY(100%); transition: 0.4s;}
    /*= effect-9 css end =*/

    /*= Media Query
    =============== */
    @media only screen and (max-width: 980px){
        .row{width: 100%; margin: 110px 0;}
        .team-members{text-align: center;}
        .single-member{float: none; display: inline-block; vertical-align: bottom;}
    }
    /*= Media Query End
    =================== */






</style>