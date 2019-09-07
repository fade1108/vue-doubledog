<template>
    <div id="wdetail">
        <my-header></my-header>
    <main>
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
                <a class="navbar-brand " href="" style="float: left;left: 500px" ><img src="images/logo.svg"></a>
            </div>
        </div>
        <!--导航往后所有部分-->
        <div class="container-fluid px-0 bg-bl">
            <!--中间部分背景-->
            <div class="container  p-0 bg-b2">
                <!--面包屑导航栏-->
                <ul class="breadcrumb bg-b2" style="border-bottom: solid #f0f0f0 1px">
                    <li class="breadcrumb-item font2">主页</li>
                    <li class="breadcrumb-item font2">腕表</li>
                    <li class="breadcrumb-item font2">运动</li>
                    <li class="breadcrumb-item font2">{{product.title}}</li>
                    <li class="breadcrumb-item font2">{{product.family}}</li>
                </ul>
                <P><button class="btn btn-primary mb-md-4 pb-2 "><a class="font2 " href="watch.html">返回</a></button></P>
                <P class="font3">康卡斯潜水系列</P>
                <p class="font2 pb-5">L3.783.4.56.6</p>
                <!--介绍详情页面-->
                <div class="row bg-white m-0">
                    <div class="col-sm-5 pl-5" v-for="(item,i) of pics" :key="i">
                        <img class="pl-5 w-75" :src="'http://127.0.0.1:3000/'+item.lg" alt="卡康斯">
                    </div>
                    <div class="col-sm-7 p-0">
                        <div class="row">
                            <!--第六行 选项卡导航-->
                            <div class="col-sm-12 mt-5">
                                <div id="accordion">
                                    <div class="card">
                                        <div class="card-header" id="headingOne">
                                            <h5 class="mb-0">
                                                <button class="btn btn-link"  data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    查看手表详情
                                                </button>
                                            </h5>
                                        </div>

                                        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                            <div class="card-body">
                                                <div>
                                                    <p>表款编码：{{product.family}}</p>
                                                    <p>表壳材质：{{product.watchcase}}</p>
                                                    <p>表带材质：{{product.watchband}}</p>
                                                    <p>表盘指针：{{product.dial_plate}}</p>
                                                    <p>表盘刻度：{{product.scale}}</p>
                                                    <p>表盘颜色：{{product.dial_color}}</p>
                                                    <p>机芯类型：{{product.movement_type}}</p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <!--第一行-->
                            <div class="col-sm-6 mt-5">
                                <h1 class="text-center font-weight-bold"> ￥ {{product.price}}</h1>
                            </div>
                            <div class="col-sm-6 mt-5">
                                <!--花呗按钮折叠导航栏-->
                                <button data-target="#demo,#demo2" data-toggle="collapse" class="btn btn-danger">查看花呗分期</button>
                                <div id="demo" class="collapse">
                                    <h3 class="font1">
                                        ￥ 3,326.58 X 6期
                                    </h3>
                                    <h4 class="font1">
                                        含手续费 ￥143.25/期
                                    </h4>
                                </div>
                                <div id="demo2" class="collapse">
                                    <h3 class="font1">
                                        ￥ 1,711.04 X 12期
                                    </h3>
                                    <h4 class="font1">
                                        含手续费 ￥119.38/期
                                    </h4>
                                </div>

                            </div>
                            <!--第二行-->
                            <div class="col-sm-6 mt-5 ">
                                <div id="parent" class="ml-sm-5" >
                                    <!--     collapse 和 card-body 在一个div里，会卡-->
                                    <div class="card w-75 ">
                                        <div class="card-header p-5 ">
                                            <a class="card-link list-unstyled font1 font-weight-bold" data-toggle="collapse" href="#c1">标准表带尺寸-->22</a>
                                        </div>
                                        <div data-parent="#parent" id="c1" class="collapse">
                                            <div class="card-body ">
                                                <button class="btn-primary btn">13</button>
                                                <button class="btn-primary btn">14</button>
                                                <button class="btn-primary btn">15</button>
                                                <button class="btn-primary btn">16</button><br><br>
                                                <button class="btn-primary btn">17</button>
                                                <button class="btn-primary btn">18</button>
                                                <button class="btn-primary btn">19</button>
                                                <button class="btn-primary btn">20</button><br><br>
                                                <button class="btn-primary btn">21</button>
                                                <button class="btn-primary btn">22</button>
                                                <button class="btn-primary btn">23</button>
                                                <button class="btn-primary btn">24</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 mt-5">
                                <div id="parent2">
                                    <!--     collapse 和 card-body 在一个div里，会卡-->
                                    <div class="card w-75 ">
                                        <div class="card-header p-5 ">
                                            <a class="card-link list-unstyled font1 font-weight-bold" data-toggle="collapse" href="#c2">如何测量您的表带</a>
                                        </div>
                                        <div data-parent="#parent2" id="c2" class="collapse">
                                            <div class="card-body ">
                                                <h4>1.请去官网下载标尺<br>
                                                    2.将手表表盘放置手腕上方并继续将标尺缠绕手腕<br>
                                                    3.为准确的测量，请记录表盘上方对应的测量线，并做好标注后选择商品尺码，选中最接近的尺寸</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!--第三行-->
                            <div class="col-sm-6 pl-5">
                                <button class="btn btn-primary mt-5 p-sm-5 w-75 "><a class="font2" href="">加入购物车</a></button>
                            </div>
                            <div class="col-sm-6">
                                <div class="dropdown">
                                    <button data-toggle="dropdown" class="btn btn-primary mt-5 p-sm-5 w-75 dropdown-toggle">现在购买</button>
                                    <ul class="dropdown-menu">
                                        <li><button class="btn btn-danger ml-4 mt-3">支付宝支付</button></li>
                                        <li><button class="btn btn-danger ml-4 mt-3">微信——支付</button></li>
                                    </ul>
                                </div>
                            </div>
                            <!--第四行-->
                            <div class="col-sm-12 mt-5">
                                <h6 class="font1"><i class="font4"> </i> 我们可以用过电话帮您找到想要的商品，请拨打 400-821-3270</h6>
                            </div>
                            <!--第五行-->
                            <div class="col-sm-12 mt-5">
                                <div class="row">
                                    <div class="col-sm-3">
                                        <button class="btn btn-light ml-5"><a><i class="font4"></i></a></button>
                                        <p class="font1 mt-2 mr-5">分享</p>
                                    </div>
                                    <div class="col-sm-3 mx-sm-5">
                                        <button class="btn btn-light mx-0"><a><i class="font4"></i></a></button>
                                        <p class="font1 mt-2 mr-5">加入心愿清单</p>
                                    </div>
                                    <div class="col-sm-3">
                                        <button class="btn btn-light ml-0"><a><i class="font4"></i></a></button>
                                        <p class="font1 mt-2 mr-5">表款比较</p>
                                    </div>
                                    <div class="col-sm-3">

                                    </div>

                                </div>

                            </div>


                        </div>



                    </div>
                </div>
            </div>









        </div>
    </main>
    </div>
</template>
<script>
    export default {

        data(){
            return{
                product:{},
                pics:{}

                }
        },
        methods:{
            load(){
                (async () => {
                    var result = await this.axios.get(
                        "http://127.0.0.1:3000/watchdetails",
                        {
                            params: {
                                //lid: this.lid
                                lid:this.$route.params.lid
                            }
                        }
                    );
                    console.log(result.data);
                    this.product = result.data.product;
                    this.pics = result.data.pics;
                })();
            }
        },
        //用watch 监视变量，只要props变量变化，就重新查找数据 修改data中的变量引起页面切换
        props: ["lid"],
        created(){
            this.load();
        },
        watch:{
            $route(){
                this.load();
            }
        }

    }
</script>
<style>
    #wdetail>.btn-primary {
        color: #fff;
        background-color: #003150;
        border-color: #003150;
    }
    .col-sm-6>h1{
        font-size: 30px !important;
        color: #003150 !important;
        font-family: 微软雅黑;
    }
    #wdetail>.card-header {
        background-color: #f0f0f0;

    }
    #wdetail>.card-header:hover{
        background-color: #002744;
    }
    #wdetail>.card-header a:hover{
        color: #f0f0f0;
    }
    #wdetail>.btn a:hover{
        color: #f0f0f0;
        text-decoration: none;
    }
    @font-face {
        font-family: 'icomoon';
        src:  url('../../public/fonts/icomoon.eot?euv4v8');
        src:  url('../../public/fonts/icomoon.eot?euv4v8#iefix') format('embedded-opentype'),
        url('../../public/fonts/icomoon.ttf?euv4v8') format('truetype'),
        url('../../public/fonts/icomoon.woff?euv4v8') format('woff'),
        url('../../public/fonts/icomoon.svg?euv4v8#icomoon') format('svg');
        font-weight: normal;
        font-style: normal;
    }
    .font4{
        font-family: "icomoon";
        font-style: normal;/*让倾斜的不倾斜*/
        text-align: center;
        font-size: 50px;
    }
    .card-body>p{
        color: #003150;
        font-size: 1.5rem;
    }
    .card-header .btn-link{
        color: black;
        font-weight: bold;
    }





</style>