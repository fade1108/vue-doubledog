<template>
    <div class="container-fluid">
        <my-header></my-header>
  <div class="container">
      <div class="container_yk">
        <!-- 第一行div -->
        <div class="d1">
            <div class="row">
                <div class="d1_1 col-6"></div>
                <div class="col-6">
                    <h1 class="my_h1">红色鞋子</h1>
                    <p class="p">今年最热款式</p>
                    <a href="" class="btn my_btn">查看详情</a>
                </div>
            </div>
        </div>
        <!-- 第二行div -->
        <div class="row d2">
            <div class="col-6 mr-0">
                <div class="d2_d1">
                    <div class="">
                        <h3 class="d2_d1_h3">2017年最热款式</h3>
                        <h4 class="d2_d1_h4">现状劲爆价只需 $24.99</h4>
                        <a href="" class="btn my_btn d2_d1_a">查看详情</a>
                    </div>
                </div>
            </div>
            <div class="col-6 ml-0">
                <div class="d2_d3">
                    <div class="">
                        <h3 class="d2_d1_h3">2018年最热款式</h3>
                        <h4 class="d2_d1_h4">现状劲爆价只需 $24.99</h4>
                        <a href="" class="btn my_btn d2_d1_a">查看详情</a>
                    </div>
                </div>
            </div>
        </div>
        <!-- 第三行 -->
        <div class="d3">
            <div class="row">
                <!-- 左侧 -->
                <div class="col-9">
                    <h3 class="d3_h3 mt-5 mb-5">流行产品</h3>
                    <!-- 第一行放三张图片加小图片 -->
                    <div class="row mb-5 mt-5">
                        <div class="col-lg-4 col-sm-12 d3_div">
                            <span>
                                <a href="">
                                    <img src="../assets/ykimgs/new.png" alt="" class="d3_img1_1">
                                </a>
                            </span>
                            <a href="">
                                <img src="../assets/ykimgs/1.jpg" alt="" class="d3_img1_2">
                            </a>
                            <h4>红色鞋子样品</h4>
                            <p>$99.99</p>
                        </div>
                        <div class="col-lg-4 col-sm-12 d3_div">
                            <span>
                                <a href="">
                                    <img src="../assets/ykimgs/new.png" alt="" class="d3_img1_1">
                                </a>
                            </span>
                            <a href="">
                                <img src="../assets/ykimgs/2.jpg" alt="" class="d3_img1_2">
                            </a>
                            <h4>黑白鞋子样品</h4>
                            <p>$99.99</p>
                        </div>
                        <div class="col-lg-4 col-sm-12 d3_div">
                            <span>
                                <a href="">
                                    <img src="../assets/ykimgs/new.png" alt="" class="d3_img1_1">
                                </a>
                            </span>
                            <a href="">
                                <img src="../assets/ykimgs/3.jpg" alt="" class="d3_img1_2">
                            </a>
                            <h4>黑褐鞋子样品</h4>
                            <p>$99.99</p>
                        </div>
                    </div>
                    <!-- 第二行的轮播图 -->
                    <div class="mt-5 mb-5">
                        <h3 class="d3_h3 mt-5 mb-5">最新产品</h3>
                        <div class="mt-5 row d3_div mb-5" id="lbt1">
                            <div class="col-lg-4 col-sm-12 ">
                                <span>
                                    <a href="">
                                        <img src="../assets/ykimgs/new.png" alt="" class="d3_img1_3">
                                    </a>
                                </span>
                                <a href="">
                                    <img src="../assets/ykimgs/ss4.jpg" alt="" class=" d3_img1_2">
                                </a>
                                <h4>灰色鞋子样品</h4>
                                <p>$99.99</p>
                            </div>
                            <div class="col-lg-4 col-sm-12">
                                <span>
                                    <a href="">
                                        <img src="../assets/ykimgs/new.png" alt="" class="d3_img1_3 ">
                                    </a>
                                </span>
                                <a href="">
                                    <img src="../assets/ykimgs/ss5.jpg" alt="" class=" d3_img1_2">
                                </a>
                                <h4>蓝白鞋样品</h4>
                                <p>$99.99</p>
                            </div>
                            <div class="col-lg-4 col-sm-12">
                                <span>
                                    <a href="">
                                        <img src="../assets/ykimgs/new.png" alt="" class="d3_img1_3">
                                    </a>
                                </span>
                                <a href="">
                                    <img src="../assets/ykimgs/ss6.jpg" alt="" class=" d3_img1_2">
                                </a>
                                <h4>红白鞋样品</h4>
                                <p>$99.99</p>
                            </div>
                        </div>
                    </div>
                    <!-- 第三行的轮播图 -->
                    <div id="轮播图" class="mt-5">
                        <h3 class="d3_h3 mt-5 mb-5">折扣产品</h3>
                        <div class="mt-2 row d3_div" id="lbt1">
                            <div class="col-lg-4 col-sm-12">
                                <span>
                                    <a href="">
                                        <img src="../assets/ykimgs/new.png" alt="" class="d3_img1_3">
                                    </a>
                                </span>
                                <a href="">
                                    <img src="../assets/ykimgs/ss1.jpg" alt="" class=" d3_img1_2">
                                </a>
                                <h4>褐黄鞋子样品</h4>
                                <p>$99.99</p>
                            </div>
                            <div class="col-lg-4 col-sm-12">
                                <span>
                                    <a href="">
                                        <img src="../assets/ykimgs/new.png" alt="" class="d3_img1_3">
                                    </a>
                                </span>
                                <a href="">
                                    <img src="../assets/ykimgs/ss2.jpg" alt="" class="  d3_img1_2">
                                </a>
                                <h4>绿灰鞋子样品</h4>
                                <p>$99.99</p>
                            </div>
                            <div class="col-lg-4 col-sm-12">
                                <span>
                                    <a href="">
                                        <img src="../assets/ykimgs/new.png" alt="" class="d3_img1_3">
                                    </a>
                                </span>
                                <a href="">
                                    <img src="../assets/ykimgs/ss3.jpg" alt="" class=" d3_img1_2">
                                </a>
                                <h4>黑白鞋子样品</h4>
                                <p>$99.99</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 右侧 -->
                <div class="col-md-3">
                    <!-- 手风琴 -->
                    <div class="div_background-color parent_2">
                        <div class="parent_1">
                            <h3 class="pl-1">Categories</h3>
                        </div>
                        <div id="parent">
                            <div class="card div_background-color">
                                <div class="card-header">
                                    <a data-toggle="collapse" href="#c1" class="card-link">卡片1</a>
                                </div>
                                <div data-parent="#parent" id="c1" class="collapse">
                                    <div class="card-body">
                                        <a href="">Men's</a><br>
                                        <a href="">Tempor</a><br>
                                        <a href="">Congue</a><br>
                                        <a href="">Mazim</a><br>
                                        <a href="">Mutationem</a><br>
                                        <a href="">Hendreit</a>
                                    </div>
                                </div>
                            </div>
                            <div class="card div_background-color">
                                <div class="card-header">
                                    <a data-toggle="collapse" href="#c2" class="card-link">卡片2</a>
                                </div>
                                <div data-parent="#parent" id="c2" class="collapse">
                                    <div class="card-body ">
                                        <a href="">Women's</a><br>
                                        <a href="">Sub Category1</a><br>
                                        <a href="">Sub Category2</a><br>
                                        <a href="">Sub Category3</a><br>
                                        <a href="">Sub Category4</a>
                                    </div>
                                </div>
                            </div>
                            <div class="card div_background-color">
                                <div class="card-header">
                                    <a data-toggle="collapse" href="#c3" class="card-link">卡片3</a>
                                </div>
                                <div data-parent="#parent" id="c3" class="collapse">
                                    <div class="card-body">
                                        <a href="">Men's</a><br>
                                        <a href="">Tempor</a><br>
                                        <a href="">Congue</a><br>
                                        <a href="">Mazim</a><br>
                                        <a href="">Mutationem</a><br>
                                        <a href="">Hendreit</a>
                                    </div>
                                </div>
                            </div>
                            <div class="card div_background-color">
                                <div class="card-header">
                                    <a data-toggle="collapse" href="#c4" class="card-link">卡片4</a>
                                </div>
                                <div data-parent="#parent" id="c4" class="collapse">
                                    <div class="card-body ">
                                        <a href="">Women's</a><br>
                                        <a href="">Sub Category1</a><br>
                                        <a href="">Sub Category2</a><br>
                                        <a href="">Sub Category3</a><br>
                                        <a href="">Sub Category4</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 右侧第二个方块 -->
                    <div class="mt-5 div_background-color parent_2">
                        <div class="pt-5 pl-4">
                            <h3>最畅销</h3>
                        </div>
                        <div class="row px-2">
                            <div class="col-3">
                                <img src="../assets/ykimgs/sh.jpg" alt="">
                            </div>
                            <div class="col-9 px-3">
                                <span>
                                    <a href="">红色！</a>
                                    <p class="p-1">$120.00</p>
                                    <h5>$120.00</h5>
                                </span>
                            </div>
                        </div>
                        <div class="row px-2 ">
                            <div class="col-3">
                                <img src="../assets/ykimgs/sh.jpg" alt="">
                            </div>
                            <div class="col-9">
                                <span>
                                    <a href="">还是红色！</a>
                                    <p class="p-1">$120.00</p>
                                    <h5>$120.00</h5>
                                </span>
                            </div>
                        </div>
                        <div class="row px-2">
                            <div class="col-3">
                                <img src="../assets/ykimgs/sh.jpg" alt="">
                            </div>
                            <div class="col-9">
                                <span>
                                    <a href="">依然是红色！</a>
                                    <p class="p-1">$120.00</p>
                                    <h5>$120.00</h5>
                                </span>
                            </div>
                        </div>
                    </div>
                    <!-- 右侧第三个方块 -->
                    <div class="mt-5 div_background-color parent_2">
                        <table>
                            <h3 class="pl-4">TAGS</h3>
                            <table class="ml-2">
                                <tr class="">
                                    <td><a href="">TAGS,</a></td>
                                    <td><a href="">TAGS,</a></td>
                                    <td><a href="">TAGS,</a></td>
                                    <td><a href="">TAGS,</a></td>
                                </tr>
                                <tr>
                                    <td><a href="">TAGS,</a></td>
                                    <td><a href="">TAGS,</a></td>
                                    <td><a href="">TAGS,</a></td>
                                    <td><a href="">TAGS,</a></td>
                                </tr>
                                <tr>
                                    <td><a href="">TAGS,</a></td>
                                    <td><a href="">TAGS,</a></td>
                                    <td><a href="">TAGS,</a></td>
                                    <td><a href="">TAGS,</a></td>
                                </tr>
                                <tr>
                                    <td><a href="">TAGS,</a></td>
                                    <td><a href="">TAGS,</a></td>
                                    <td><a href="">TAGS,</a></td>
                                    <td><a href="">TAGS,</a></td>
                                </tr>
                            </table>
                        </table>
                    </div>
                    <!-- 右侧第四个方块 -->
                    <div class="mt-5 parent_2 div_background-color" id="lunbo">
                        <div class="">
                            <h3 class="text-al">特别优惠</h3>
                        </div>
                        <div class="carousel" data-ride="carousel">
                            <div class="carousel-inner ">
                                <div class="carousel-item active mb-5">
                                    <img src="../assets/ykimgs/shoe.jpg" class="w-100" alt="">
                                    <div class="ml-2">
                                        <h6>Item Title Here0</h6>
                                        <p>Lorem ipsum dolor sit amet,</p>
                                        <p>Lorem ipsum dolor sit amet,</p>
                                        <p>Lorem ipsum dolor sit amet,</p>
                                        <a href="" class="btn my_btn ">点击查看详情</a>
                                    </div>
                                </div>
                                <div class="carousel-item mb-5">
                                    <img src="../assets/ykimgs/shoe.jpg" class="w-100" alt="">
                                    <div class="ml-2">
                                        <h6>Item Title Here0</h6>
                                        <p>Lorem ipsum dolor sit amet,</p>
                                        <p>Lorem ipsum dolor sit amet,</p>
                                        <p>Lorem ipsum dolor sit amet,</p>
                                        <a href="" class="btn my_btn ">点击查看详情</a>
                                    </div>
                                </div>
                                <div class="carousel-item mb-5">
                                    <img src="../assets/ykimgs/shoe.jpg" class="w-100" alt="">
                                    <div class="ml-2">
                                        <h6>Item Title Here0</h6>
                                        <p>Lorem ipsum dolor sit amet,</p>
                                        <p>Lorem ipsum dolor sit amet,</p>
                                        <p>Lorem ipsum dolor sit amet,</p>
                                        <a href="" class="btn my_btn ">点击查看详情</a>
                                    </div>
                                </div>
                                <div class="carousel-item mb-5">
                                    <img src="../assets/ykimgs/shoe.jpg" class="w-100" alt="">
                                    <div class="ml-2">
                                        <h6>Item Title Here0</h6>
                                        <p>Lorem ipsum dolor sit amet,</p>
                                        <p>Lorem ipsum dolor sit amet,</p>
                                        <p>Lorem ipsum dolor sit amet,</p>
                                        <a href="" class="btn my_btn ">点击查看详情</a>
                                    </div>
                                </div>
                            </div>
                            <ul class="div_background-color mb-5">
                                <div class="carousel-indicators">
                                    <li data-target="#lunbo" data-slide-to="0" class="active bc-r"></li>
                                    <li  class="bc-r" data-target="#lunbo" data-slide-to="1"></li>
                                    <li  class="bc-r" data-target="#lunbo" data-slide-to="2"></li>
                                    <li  class="bc-r" data-target="#lunbo" data-slide-to="3"></li>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
export default {

}
 $(".card-header").onclick = function () {
            if (!onclick) {
                $(".card-body").Attr("display", "none");
            } else {
                $(".card-body").Attr("display", "block");
            }
        }
</script>
<style scoped>
@import "../assets/css/yk.css";
</style>