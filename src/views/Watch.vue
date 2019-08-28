<template>
    <div>
        <my-header></my-header>
        <main>
            <div class="slider_bg s7">
                <!-- 开始da-slider-->
                <div id="da-slider" class="da-slider">
                    <div class="da-slide">
                    </div>
                    <div class="da-slide">
                    </div>
                    <div class="da-slide">
                    </div>
                    <div class="da-slide">
                    </div>
                    <div class="da-slide">
                    </div>
                </div>
            </div>
            <!--开始主菜单折叠导航栏-->
            <div class="container-fluid px-0">
                <div class="navbar navbar-expand-sm bg-light navbar-light">
                    <!--2折叠之后出现的按钮，小屏显示，大屏不显示-->
                    <button data-toggle="collapse" data-target="#content" class="navbar-toggler">
                        <span class=" navbar-toggler-icon"></span>
                    </button>
                    <!--3.折叠的导航，小屏折叠，大屏横向-->
                    <div id="content" class="collapse navbar-collapse">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a href="" class="nav-link mx-2"><h3 class="text-muted">腕表选购</h3></a>
                            </li>
                            <li class="nav-item">
                                <a href="" class="nav-link mx-2"><h3 class="text-muted">浪琴世界</h3></a>
                            </li>
                            <li class="nav-item">
                                <a href="" class="nav-link mx-2"><h3 class="text-muted">品牌</h3></a>
                            </li>
                            <li class="nav-item">
                                <a href="" class="nav-link mx-2"><h3 class="text-muted">零售店</h3></a>
                            </li>
                            <li class="nav-item">
                                <a href="" class="nav-link mx-2"><h3 class="text-muted">搜索</h3></a>
                            </li>
                        </ul>
                    </div>
                    <!--1最前面不折叠不隐藏的菜单-->
                    <a class="navbar-brand " href="" style="float: left;left: 500px" ><img src="../../public/images/logo.svg"></a>
                </div>
            </div>

            <!--商品展示页面-->
            <div class="container-fluid px-0" style="background-color: #002744;">
                <div class="container bg-white" >

                    <!--标题栏-->
                    <div class="row border-top">
                        <div class="col-sm-12 p-0">
                            <h1 class="text-center" style="color: #002744">畅销表款</h1>
                            <p class="text-center " style="color: #002744">Elegance is an attitude 优雅态度真我个性</p>
                        </div>
                    </div>
                    <!--宣传栏-->
                    <div class="row" >
                        <div class="col-sm-12 p-0 ">
                            <a href="#"><img class="w-100" src="../../public/images/watch-title1.jpg" alt=""></a>
                        </div>

                        <div class="row m-sm-3">
                            <div class="col-sm-3 border-right" v-for="(item,i) of others" :key="i">
                                <a href="#"><img class="w-100" :src="item.pic"></a>
                                <div>
                                    <p class="font" v-text="item.title"></p>
                                    <p class="font" v-text="item.details"></p>
                                    <p class="font" v-text="item.family"></p>
                                    <P class="font1"> ￥{{item.price.toFixed(2)}}</P>
                                    <button type="button" class="btn btn-primary font mx-lg-5 mb-3 " ><router-link class="text-muted " :to="`/watchdetails/${item.href.split('=')[1]}`">立即选购</router-link></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--2222222222222222222222222222222-->
                    <div class="row" >
                        <div class="col-sm-12 p-0 ">
                            <a href="#"><img class="w-100" src="../../public/images/watch-title1.jpg" alt=""></a>
                        </div>

                        <div class="row m-sm-3">
                            <div class="col-sm-3 border-right" v-for="(item,i) of others2" :key="i">
                                <a href="#"><img class="w-100" :src="item.pic"></a>
                                <div>
                                    <p class="font" v-text="item.title"></p>
                                    <p class="font" v-text="item.details"></p>
                                    <p class="font" v-text="item.family"></p>
                                    <P class="font1"> ￥{{item.price.toFixed(2)}}</P>
                                    <button type="button" class="btn btn-primary font mx-lg-5 mb-3 " ><router-link class="text-muted " :to="`/watchdetails/${item.href.split('=')[1]}`">立即选购</router-link></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--333333333333333333333333333333333333-->
                    <div class="row" >
                        <div class="col-sm-12 p-0 ">
                            <a href="#"><img class="w-100" src="../../public/images/watch-title1.jpg" alt=""></a>
                        </div>

                        <div class="row m-sm-3">
                            <div class="col-sm-3 border-right" v-for="(item,i) of others3" :key="i">
                                <a href="#"><img class="w-100" :src="item.pic"></a>
                                <div>
                                    <p class="font" v-text="item.title"></p>
                                    <p class="font" v-text="item.details"></p>
                                    <p class="font" v-text="item.family"></p>
                                    <P class="font1"> ￥{{item.price.toFixed(2)}}</P>
                                    <button type="button" class="btn btn-primary font mx-lg-5 mb-3 " ><router-link class="text-muted " :to="`/watchdetails/${item.href.split('=')[1]}`">立即选购</router-link></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--444444444444444444444444444444444444444-->
                    <div class="row" >
                        <div class="col-sm-12 p-0 ">
                            <a href="#"><img class="w-100" src="../../public/images/watch-title1.jpg" alt=""></a>
                        </div>

                        <div class="row m-sm-3">
                            <div class="col-sm-3 border-right" v-for="(item,i) of others4" :key="i">
                                <a href="#"><img class="w-100" :src="item.pic"></a>
                                <div>
                                    <p class="font" v-text="item.title"></p>
                                    <p class="font" v-text="item.details"></p>
                                    <p class="font" v-text="item.family"></p>
                                    <P class="font1"> ￥{{item.price.toFixed(2)}}</P>
                                    <button type="button" class="btn btn-primary font mx-lg-5 mb-3 " ><router-link class="text-muted " :to="`/watchdetails/${item.href.split('=')[1]}`">立即选购</router-link></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--55555555555555555555555555555555555555555-->
                    <div class="row" >
                        <div class="col-sm-12 p-0 ">
                            <a href="#"><img class="w-100" src="../../public/images/watch-title1.jpg" alt=""></a>
                        </div>

                        <div class="row m-sm-3">
                            <div class="col-sm-3 border-right" v-for="(item,i) of others5" :key="i">
                                <a href="#"><img class="w-100" :src="item.pic"></a>
                                <div>
                                    <p class="font" v-text="item.title"></p>
                                    <p class="font" v-text="item.details"></p>
                                    <p class="font" v-text="item.family"></p>
                                    <P class="font1"> ￥{{item.price.toFixed(2)}}</P>
                                    <button type="button" class="btn btn-primary font mx-lg-5 mb-3 " ><router-link class="text-muted " :to="`/watchdetails/${item.href.split('=')[1]}`">立即选购</router-link></button>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>


                <!--      第二版-->
                <div class="container bg-white ">
                    <p class="topfont_col p-4">浪琴表官方品质承诺</p>
                    <ul class="list-unstyled d-flex justify-content-around py-5">
                        <li class="fa fa-binoculars fa-4x pr-5 border-right"><P class="text-muted mysmall text-center">瑞士制造</P></li>
                        <li class="fa fa-car fa-4x pr-5 border-right"><P class="text-muted mysmall text-center">正品保障</P></li>
                        <li class="fa fa-diamond fa-4x pr-5 border-right"><P class="text-muted mysmall text-center">花呗分期</P></li>
                        <li class="fa fa-group fa-4x pr-5 border-right"><P class="text-muted mysmall text-center">银行保障</P></li>
                    </ul>
                    <div class="row ">
                        <div class="col-lg-12  p-0">
                            <a><img class="w-100" src="../../public/images/watch-4-1.jpg" alt=""></a>
                        </div>

                        <!--分类图片栏-->
                        <ul class="list-unstyled d-flex  justify-content-start pt-3">
                            <li class="text-center mr-2 bg-bl">
                                <img class="w-100" src="../../public/images/watch-pc-1.jpg">
                                <p><a href="#" class="text-white" style="text-decoration: none">男士腕表点击选购 >>></a></p>
                            </li>
                            <li class="text-center mr-2 bg-bl">
                                <img class="w-100" src="../../public/images/watch-pc-2.jpg">
                                <p><a href="#" class="text-white" style="text-decoration: none">女士腕表点击选购 >>></a></p>
                            </li>
                            <li class="text-center mr-2 bg-bl">
                                <img class="w-100" src="../../public/images/watch-pc-3.jpg">
                                <p><a href="#" class="text-white" style="text-decoration: none">机械腕表 >>></a></p>
                            </li>
                            <li class="text-center mr-2 bg-bl">
                                <img class="w-100" src="../../public/images/watch-pc-4.jpg">
                                <p><a href="#" class="text-white" style="text-decoration: none">精选腕表 >>></a></p>
                            </li>
                        </ul>

                        <!--商品带大图轮播图-->
                        <div class="col-lg-8 col-md-8 p-0">
                            <div id="lunbo" class="carousel " data-ride="carousel">
                                <!--1.轮播图片-->
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img class="w-100" src="../../public/images/lb_watch1.jpg">
                                    </div>
                                    <div class="carousel-item ">
                                        <img class="w-100" src="../../public/images/lb_watch2.jpg">
                                    </div>
                                    <div class="carousel-item ">
                                        <img class="w-100" src="../../public/images/lb_watch3.jpg">
                                    </div>


                                    <!--3.轮播指示器-->
                                    <ul class="carousel-indicators mb-0">
                                        <li data-slide-to="0" data-target="#lunbo" class="active"></li>
                                        <li data-slide-to="1" data-target="#lunbo"></li>
                                        <li data-slide-to="2" data-target="#lunbo"></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4  ">
                            <img class="w-100" src="../../public/images/watch_lb1.jpg">
                            <p class="text-muted text-center mb-0 " style="font-size: 20px">浪琴开创者系列</p>
                            <p class="text-center  mb-0" style="font-size: 15px; color: #84888b;">自动机械男士腕表</p>
                            <button class="btn btn-primary mt-3" style="margin: 0px 125px">立即选购</button>
                            <!--2.左右箭头-->
                            <a data-slide="prev" href="#lunbo" class="carousel-control-prev">
                                <span class="carousel-control-prev-icon"></span>
                            </a>
                            <a data-slide="next" href="#lunbo" class="carousel-control-next">
                                <span class="carousel-control-next-icon"></span>
                            </a>
                        </div>
                    </div>
                </div>
                <watch-world>

                </watch-world>
            </div>
        </main>

    </div>



</template>
<script>
    export default {
        data(){
            return {
                others:[],
                others2:[],
                others3:[],
                others4:[],
                others5:[]
            }
        },
        props:[],
        methods:{},
        watch:{},
        computed:{},
        created(){
            this.axios.get("http://127.0.0.1:5050/index").then(
                result=>{
                    this.others=result.data.slice(0,4);
                    this.others2=result.data.slice(4,8);
                    this.others3=result.data.slice(8,12);
                    this.others4=result.data.slice(12,16);
                    this.others5=result.data.slice(16,20);

                }
            )
        }

    }

</script>
<style scoped>
    @import "../assets/css/watch_index.css";
</style>