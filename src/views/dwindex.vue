<template>
    <div>
        <div>
            <my-header></my-header>
            <div class="container-fluid px-0" style="margin-top:-80px">
                <div id="demo" class="carousel" data-ride="carousel">
                    <!-- 1.轮播图片-->
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="w-100" src="../../src/assets/img/index/01.jpg">
                        </div>
                        <div class="carousel-item">
                            <img class="w-100" src="../../src/assets/img/index/02.jpg">
                        </div>
                    </div>
                    <!-- 2.左右箭头-->
                    <a data-slide="prev" href="#demo" class="carousel-control-prev">
                        <span class="carousel-control-prev-icon"></span>
                    </a>
                    <a data-slide="next" href="#demo" class="carousel-control-next">
                        <span class="carousel-control-next-icon"></span>
                    </a>
                    <!-- 3.轮播指示器-->
                    <ul class="carousel-indicators">
                        <li data-target="#demo" data-slide-to="0" class="active"></li>
                        <li data-target="#demo" data-slide-to="1"></li>
                    </ul>
                </div>
            </div>


            <!-- 一层手表 -->
            <div>
                <h2 style="text-align: center">为您精选</h2>
                <div class="row mx-0  my_style floor">
                    <div class="col-3 px-0 jst" v-for="(item,ig) of dwwatch1" :key="ig">
                        <img :src="`http://127.0.0.1:3000/`+item.pic" class="img1">
                        <div>
                            <span>{{item.title}}</span><br>
                            <span>{{item.size}}</span><br>
                            <span>￥{{item.price}}</span><br>
                            <button><router-link  :to="`/dwdetail/${item.href.split('=')[1]}`">立即购买</router-link></button>
                            
                        </div>
                    </div>
                  
                </div> 
                <img src="../../src/assets/img/index/601.jpg" alt="" class="img7">
                <!-- 二层手镯 -->
                <div class="row mx-0  my_style floor">
                    <div class="col-3 px-0 jst" v-for="(item,ig) of dwwatch2" :key="ig">
                        <img :src="`http://127.0.0.1:3000/`+item.pic" class="img1">
                        <div>
                            <span>{{item.title}}</span><br>
                            <span>{{item.size}}</span><br>
                            <span>￥{{item.price}}</span><br>
                            <button><router-link  :to="`/dwdetail/${item.href.split('=')[1]}`">立即购买</router-link></button>
                        </div>
                    </div>
                   
                </div>
                <img src="../../src/assets/img/index/603.jpg" alt="" class="img7">
                <!--第三层  -->
                <div class="row mx-0  my_style floor">
                    <div class="col-3 px-0 jst" v-for="(item,ig) of dwwatch3" :key="ig">
                        <img :src="`http://127.0.0.1:3000/`+item.pic" class="img1">
                        <div>
                            <span>{{item.title}}</span><br>
                            <span>{{item.size}}</span><br>
                            <span>￥{{item.price}}</span><br>
                            <button><router-link  :to="`/dwdetail/${item.href.split('=')[1]}`">立即购买</router-link></button>
                        </div>
                    </div>
                    
                </div>
                <img src="../../src/assets/img/index/602.jpg" alt="" class="img7">
                <!-- 第四层 -->
                <div class="row mx-0  my_style floor">
                    <div class="col-3 px-0 jst" v-for="(item,ig) of dwwatch4" :key="ig">
                        <img :src="`http://127.0.0.1:3000/`+item.pic" class="img1">
                        <div>
                            <span>{{item.title}}</span><br>
                            <span>{{item.size}}</span><br>
                            <span>￥{{item.price}}</span><br>
                            <button><router-link  :to="`/dwdetail/${item.href.split('=')[1]}`">立即购买</router-link></button>
                        </div>
                    </div>
                 
                </div>
                <img src="../../src/assets/img/index/10.jpg" alt="" class="img7">
                <!-- 第五层 -->
                <div class="row mx-0  my_style floor">
                    <div class="col-3 px-0 jst" v-for="(item,ig) of dwwatch5" :key="ig">
                        <img :src="`http://127.0.0.1:3000/`+item.pic" class="img1">
                        <div>
                            <span>{{item.title}}</span><br>
                            <span>{{item.size}}</span><br>
                            <span>￥{{item.price}}</span><br>
                            <button><router-link  :to="`/dwdetail/${item.href.split('=')[1]}`">立即购买</router-link></button>
                        </div>
                    </div>
                   
                </div>
                <h2 style="text-align: center">日志</h2>
                <p class="msg2">DANIEL WELLINGTON的最新情报</p>
                <!-- 日志 -->
                <div class="down">
                    <div style="text-align: center;background:#f4f4f4;margin-right:15px;">
                        <img src="../../src/assets/img/index/11.jpg" alt="">
                        <p>2019年8月1日</p>
                        <h2>时差恋人，时刻爱</h2>
                        <hr>
                        <p>跨越时区与地域，同步你我时间</p>
                        <p>阅读全部内容</p>

                    </div>
                    <div style="text-align: center;background:#f4f4f4;margin-right:15px;">
                        <img src="../../src/assets/img/index/12.jpg" alt="">
                        <p>2019年8月1日</p>
                        <h2>时差恋人，时刻爱</h2>
                        <hr>
                        <p>跨越时区与地域，同步你我时间</p>
                        <p>阅读全部内容</p>
                    </div>
                    <div style="text-align: center;background:#f4f4f4;">
                        <img src="../../src/assets/img/index/13.jpg" alt="">
                        <p>2019年8月1日</p>
                        <h2>时差恋人，时刻爱</h2>
                        <hr>
                        <p>跨越时区与地域，同步你我时间</p>
                        <p>阅读全部内容</p>
                    </div>

                </div>

            </div>
        </div>
        <foot></foot>
    </div>

</template>
<script>
    import FooTer from "./footer.vue"
    import ElRow from "element-ui/packages/row/src/row";




    export default {
        components: {

            "foot": FooTer,},
        data(){
            return{
                dwwatch1:[],
                dwwatch2:[],
                dwwatch3:[],
                dwwatch4:[],
                dwwatch5:[],
            }
        },
    props:[],
     watch:{},
       
     created() {
    this.axios.get("dwindex").then(result => {
        
      this.dwwatch1=result.data.slice(0,4);
      console.log(this.dwwatch1);
      this.dwwatch2=result.data.slice(4,8);
      console.log(this.dwwatch2);
      this.dwwatch3=result.data.slice(8,12);
      console.log(this.dwwatch3);
      this.dwwatch4=result.data.slice(12,16);
      console.log(this.dwwatch2);
      this.dwwatch5=result.data.slice(16,20);
      console.log(this.dwwatch5);
    });
  }

    }
</script>
<style>
    .msg1 div{
        margin-right:10%;
        margin-left: 15%;
        color: #00081c;
        font-size: 12px;
    }
    .floor{
        padding: 20px 0 65px;
    }

    .img1{
        height: 353px;
        width: 353px;
    }
    .img7{
        height: 500px;
        width: 100%;
    }
    .msg2{
        font-size: 18px;
        line-height: 1.8rem;
        letter-spacing: .3rem;
        margin-top: 15px;
        padding-bottom: 0;
        /* margin-left:25%; */
    }
    .down{
        /* width: 1440px; */
        display: flex;
        /* margin-left: 180px; */
        margin: 0 auto;
        justify-content: center;

    }
    .down img{
        width: 465px;
        height:258px;
    }

    .my_style{
        color: #00081C;
        font-size: 12px;
        text-align: center;
    }
    .top{
        position: relative;
    }
    .h{
        position: absolute;
        top:350px;
        left: 350px;
    }


    .xiangbabang{
        width: 100%;
        height: 84px;
        /*padding-top: 34px;*/
        background: rgba(0,14,34,.9);
        color:#00081c;
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: space-between;
        position: relative;
    }
    .bit{
        display: flex;
        list-style: none;

    }
    .bit a{
        text-decoration: none;
        color: #fff;
        line-height: 84px;
        font-size: 13px;
    }
    .bit a:hover{
        transition: color 250ms;
        outline: 0;
        outline-offset: -2px;
        border-bottom: 1px solid #fff;

    }
    .bit li{
        margin-right: 50px;

    }
    .person{
        width: 90px;
        height: 50px;
        margin-top: 20px;
        margin-right: 30px;
        background: rgba(0,14,34,.9);
    }
    .logo{
        width: 80px;
        height: 50px;
        margin-top: 18px;
        margin-left: 30px;

    }
.jst img:hover{
    background: rgb(218, 178, 178);
  cursor: pointer;
}
</style>