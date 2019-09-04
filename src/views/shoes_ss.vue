<template>
    <main>
        <div class="container row mt-5 mm-5">
            <!-- 左侧 -->
            <div class="col-3">
                <!-- 第一个块级DIV  -->
                <div class="div_background-color parent_2">
                    <div class="parent_1 div_background-color">
                        <h3 class="pl-1 ">Categories</h3>
                    </div>
                    <div id="parent ">
                        <div class="card div_background-color">
                            <div class="card-header">
                                <a class="card-link" data-toggle="collapse" href="#c1">卡片1</a>
                            </div>
                            <div data-parent="#parent" id="c1" class="collapse">
                                <div class="card-body ">
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
                                <a class="card-link" data-toggle="collapse" href="#c2">卡片2</a>
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
                                <a class="card-link" data-toggle="collapse" href="#c3">卡片3</a>
                            </div>
                            <div data-parent="#parent" id="c3" class="collapse">
                                <div class="card-body ">
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
                                <a class="card-link" data-toggle="collapse" href="#c4">卡片4</a>
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
                <!-- 第二个 -->
                <div class="mt-5 div_background-color parent_2">
                    <div class="pt-5 pl-4">
                        <h3>BEST SELLERS</h3>
                    </div>
                    <div class="row px-2">
                        <div class="col-3">
                            <img src="../../src/assets/ykimgs/sh.jpg" alt="">
                        </div>
                        <div class="col-9 px-3">
                        <span>
                            <a href="">Sample Item Title Goes Here</a>
                            <p class="p-1">$120.00</p>
                            <h5>$120.00</h5>
                        </span>
                        </div>
                    </div>
                    <div class="row px-2 ">
                        <div class="col-3">
                            <img src="../../src/assets/ykimgs/sh.jpg" alt="">
                        </div>
                        <div class="col-9">
                        <span>
                            <a href="">Sample Item Title Goes Here</a>
                            <p class="p-1">$120.00</p>
                            <h5>$120.00</h5>
                        </span>
                        </div>
                    </div>
                    <div class="row px-2">
                        <div class="col-3">
                            <img src="../../src/assets/ykimgs/sh.jpg" alt="">
                        </div>
                        <div class="col-9">
                        <span>
                            <a href="">Sample Item Title Goes Here</a>
                            <p class="p-1">$120.00</p>
                            <h5>$120.00</h5>
                        </span>
                        </div>
                    </div>
                </div>
                <!-- 第三个 -->
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
                <!-- 第四个 -->
                <div class="mt-5 parent_2 div_background-color">
                    <div class="">
                        <h3>SPECIAL OFFERS</h3>
                    </div>
                    <div class="carousel" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="../../src/assets/ykimgs/shoe.jpg" class="w-100" alt="">
                                <h6>Item Title Here0</h6>
                                <p>Lorem ipsum dolor sit amet,</p>
                                <p>Lorem ipsum dolor sit amet,</p>
                                <p>Lorem ipsum dolor sit amet,</p>
                                <a href="" class="btn my_btn">SHOW ME NOW</a>
                            </div>
                            <div class="carousel-item ">
                                <img src="../../src/assets/ykimgs/shoe.jpg" class="w-100" alt="">
                                <h6>Item Title Here1</h6>
                                <p>Lorem ipsum dolor sit amet,</p>
                                <p>Lorem ipsum dolor sit amet,</p>
                                <p>Lorem ipsum dolor sit amet,</p>
                                <a href="" class="btn my_btn">SHOW ME NOW</a>
                            </div>
                            <div class="carousel-item ">
                                <img src="../../src/assets/ykimgs/shoe.jpg" class="w-100" alt="">
                                <h6>Item Title Here2</h6>
                                <p>Lorem ipsum dolor sit amet,</p>
                                <p>Lorem ipsum dolor sit amet,</p>
                                <p>Lorem ipsum dolor sit amet,</p>
                                <a href="" class="btn my_btn">SHOW ME NOW</a>
                            </div>
                            <div class="carousel-item ">
                                <img src="../../src/assets/ykimgs/shoe.jpg" class="w-100" alt="">
                                <h6>Item Title Here3</h6>
                                <p>Lorem ipsum dolor sit amet,</p>
                                <p>Lorem ipsum dolor sit amet,</p>
                                <p>Lorem ipsum dolor sit amet,</p>
                                <a href="" class="btn my_btn">SHOW ME NOW</a>
                            </div>
                        </div>
                        <div class="mt-5 div_background-color">
                            <ul class="carousel-indicators">
                                <li data-target="#lunbo" data-slide-to="0" class="active"></li>
                                <li data-target="#lunbo" data-slide-to="1"></li>
                                <li data-target="#lunbo" data-slide-to="2"></li>
                                <li data-target="#lunbo" data-slide-to="3"></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 右侧 -->
            <div class="col-9">
                <!-- 第一小行 -->
                <div class="women">
                    <a href="#">
                        <h6>Enthecwear - <span>4449 itemms</span> </h6>
                    </a>
                    <span class="w_nav">
                    <span>排序 : </span>
                    <span><a class="active" href="#">流行</a></span> |
                    <span><a href="#">新品 </a></span> |
                    <span><a href="#">折扣</a></span> |
                    <span><a href="#">价格:地位 </a></span>
                    <div class="clear"></div>
                </span>
                    <div class="clearfix"></div>
                </div>
                <!-- 第二行图片 -->
                <div class="img_222_1">
                    <div class="img_222_2">
                        <a href="">
                            <img src="../../src/assets/ykimgs/5.jpg" alt="">
                        </a>
                        <a href="">
                            <h4>DUIS AUTEM</h4>
                        </a>
                        <p>读者是一个长期存在的事实</p>
                        <p class="red-p">$99.99</p>
                    </div>
                    <div class="img_222_2">
                        <a href="">
                            <img src="../../src/assets/ykimgs/6.jpg" alt="">
                        </a>
                        <a href="">
                            <h4>DUIS AUTEM</h4>
                        </a>
                        <P>读者是一个长期存在的事实</P>
                        <P class="red-p">$99.99</P>

                    </div>
                    <div class="img_222_2">
                        <a href="">
                            <img src="../../src/assets/ykimgs/7.jpg" alt="">
                        </a>
                        <a href="">
                            <h4>DUIS AUTEM</h4>
                        </a>
                        <P>读者是一个长期存在的事实</P>
                        <P class="red-p">$99.99</P>

                    </div>
                </div>
                <!-- 第三行图片 -->
                <div class="img_222_1">
                    <div class="img_222_2">
                        <a href="">
                            <img src="../../src/assets/ykimgs/8.jpg" alt="">
                            <a href="">
                                <h4>DUIS AUTEM</h4>
                            </a>
                            <p>读者是一个长期存在的事实</p>
                            <p class="red-p">$99.99</p>
                        </a>
                    </div>
                    <div class="img_222_2">
                        <a href="">
                            <img src="../../src/assets/ykimgs/9.jpg" alt="">
                            <a href="">
                                <h4>DUIS AUTEM</h4>
                            </a>
                            <P>读者是一个长期存在的事实</P>
                            <P class="red-p">$99.99</P>
                        </a>
                    </div>
                    <div class="img_222_2">
                        <a href="">
                            <img src="../../src/assets/ykimgs/10.jpg" alt="">
                            <a href="">
                                <h4>DUIS AUTEM</h4>
                            </a>
                            <P>读者是一个长期存在的事实</P>
                            <P class="red-p">$99.99</P>
                        </a>
                    </div>
                </div>
                <!-- 第四行图片 -->
                <div class="img_222_1">
                    <div class="img_222_2">
                        <a href="">
                            <img src="../../src/assets/ykimgs/11.jpg" alt="">
                        </a>
                        <a href="">
                            <h4>DUIS AUTEM</h4>
                        </a>
                        <p class="p-7">读者是一个长期存在的事实</p>
                        <p class="red-p">$99.99</p>

                    </div>
                    <div class="img_222_2">
                        <a href="">
                            <img src="../../src/assets/ykimgs/12.jpg" alt="">
                        </a>
                        <a href="">
                            <h4>DUIS AUTEM</h4>
                        </a>
                        <P class="p-7">读者是一个长期存在的事实</P>
                        <P class="red-p">$99.99</P>

                    </div>
                    <div class="img_222_2">
                        <a href="">
                            <img src="../../src/assets/ykimgs/13.jpg" alt="">
                        </a>
                        <a href="">
                            <h4>DUIS AUTEM</h4>
                        </a>
                        <P class="p-7">读者是一个长期存在的事实</P>
                        <P class="red-p">$99.99</P>

                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
<script>
    export default {

    }
</script>
<style scoped>
    main {
        margin: 0;
        padding: 0;
    }

    .d1 {
        background: url(../../src/assets/ykimgs/banner.jpg);
        min-height: 400px;
        min-width: 100%;
    }

    .my_h1 {
        margin-top: 80px;
        margin-bottom: 40px;
        padding-left: 15px;
    }

    .d2 {
        margin: 3em;
    }

    .p {
        margin-left: 15px;
        padding-bottom: 15px;
    }

    .my_btn {
        background-color: red;
        color: white;
        margin-left: 15px;
    }

    .my_btn:hover {
        background-color: black !important;
        color: red !important;
    }

    .d2_d1 {
        background: url(../../src/assets/ykimgs/img1.jpg) no-repeat center top;
        height: 250px;
    }

    .d2_d3 {
        background: url(../../src/assets/ykimgs/img2.jpg) no-repeat center top;
        height: 250px;
    }

    .d2_d1_h3 {
        color: white;
        margin-left: 40px;
        padding-top: 15px;
    }

    .d2_d1_h4 {
        color: white;
        margin-left: 40px;
        padding-top: 15px;
        width: 100px;
        line-height: 1em;
    }

    .d2_d1_a {
        margin-left: 40px;
    }

    .d3_div {
        margin-bottom: 24px;
    }

    .d3_h3 {
        border-bottom: 1px solid black;
        padding-bottom: 24px;
    }

    .new {
        background: url('../../src/assets/ykimgs/new.png');
    }

    .d3_img1_1 {
        position: absolute;
        z-index: 1;
        right: 1px;
    }

    .d3_img1_2 {
        padding-bottom: 15px;
        border-bottom: 1px solid #DBDBDB;
    }

    .parent {
        background-color: #999;
    }

    .parent_1 {
        border-top: 1px solid #C0BEBE;
        padding-left: 20px;
    }

    .parent_2 {
        border: 1px solid #C0BEBE;

    }

    .parent_2_1 {
        padding-top: 5px;
        padding-bottom: 5px;
        padding-left: 20px;
    }

    .carousel {
        height: 100%;
    }

    .d3_img1_3 {
        position: absolute;
        right: 77px;
        top: 18px;
    }

    .div_background-color {
        background-color: #f1f1f1;
    }

    .card-body:hover {
        color: red;

    }

    .parent_2_3 {
        border-left: 1px solid
    }

    .carousel>.carousel-inner>.carousel-item>h6 {
        margin-left: 10px;
    }

    .carousel>.carousel-inner>.carousel-item>p {
        margin-left: 10px;
    }

    .w_nav {
        float: right;
        color: #555555;
        font-size: 0.8125em;
        padding: 0;
        list-style: none;
        left: 50px;

    }

    .container>div>.women {
        text-align: left;
        border-bottom: 1px solid #ebebeb;

    }

    .container>div>.women>a {
        text-decoration: none;
        color: black;
    }

    .mm-5 {
        margin-left: 19%;
    }

    .red-p {
        color: red;
    }

    .img_222_1 {
        display: flex;
    }

    .img_222_2 {
        margin-left: 5px;
        margin-right: 5px;
    }

    .col-9>.img_222_1>div>a>h4 {
        color: black;
        font-size: 20px;
    }

    .container>.col-9>.img_222_1>.img_222_2>p {
        color: #777777;
        font-size: 1em;
    }

    .container>.col-9>.img_222_1>.img_222_2>p+p {
        font-size: 1.2em;
        color: #ed1c24;
        font-weight: 600;
    }

    .container>.col-9>.women>.w_nav>span>a {

        color: #555555;
        text-transform: capitalize;
    }

    .pl-4>.ml-2>tr>td>a {

        font-size: 1.2em;
        font-weight: 800;
        padding: 0.5em 0.2em;
        text-decoration: none;
        color: #6a6a6a;
    }

</style>