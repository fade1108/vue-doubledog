<template>


    <div class="glasses">
        <my-header></my-header>
        <!-- 导航 -->
        <div class="f_1">
            <ul class="list-unstyled b_1  mb-0 ">
                <li><a class="c_1" href="">男士</a> </li>
                <li><a class="c_1" href="">女士</a> </li>
                <li><a class="c_1" href="">儿童</a> </li>
                <li><a class="c_1" href="">定制</a> </li>
            </ul>
        </div>
        <!-- 头部大轮播图 -->
        <div class="container-fluid px-0 mx-0">
            <div id="lunbo" class="v_1 carousel " data-ride="carousel">
                <!-- 轮播图的图片 -->
                <div class="carousel-inner ">
                    <div class="carousel-item active">
                        <img class="w-100"  src="../../public/images/gL_1.jpg">
                    </div>
                    <div class="carousel-item">
                        <img  class="w-100" src="../../public/images/gL-2.jpg">
                    </div>
                    <div class="carousel-item" >
                        <img  class="w-100 " src="../../public/images/gL-3 .jpg">
                    </div>
                </div>
                <!-- 轮播指示器 -->
                <ul class="carousel-indicators p-0 m-0">
                    <li data-slide-to="0" class="active" data-target="#lunbo"></li>
                    <li data-slide-to="1" data-target="#lunbo"></li>
                    <li data-slide-to="2" data-target="#lunbo"></li>
                </ul>
            </div>
        </div>
        <!-- 面包屑导航 -->
        <div class="container">
            <ul class="breadcrumb  pl-lg-3 mb-0">
                <li class="breadcrumb-item"><a class="text-muted" href="">首页</a></li>
                <li class="breadcrumb-item"><a class="text-muted" href="">眼睛系列</a></li>
            </ul>
            <!-- 单项首页商品展示 -->
            <div class="row">
                <div class="left_main col-lg-6 col-md-6 px-0 mx-0">
                    <div class="lefttTop ">
                        <img class="img_1 " src="../../public/images/木九十光学镜.jpg" alt="" style="width: 100%!important;">
                        <div class="w_1 mb-3">
                            <p class="mb-0">Sunglasses Collection</p>
                            <h4>木九十光学眼镜</h4>
                        </div>
                    </div>
                    <div class="leftBottom pb-sm-3 pb-md-0">
                        <img class="img_1" src="../../public/images/雷朋太阳镜.jpg" alt="">
                        <div class="w_1 pb-3">
                            <p class="mb-0">Optical Collection</p>
                            <h4>雷朋遮阳眼镜</h4>
                        </div>
                    </div>
                </div>
                <div class="right col-lg-6 col-md-6 pr-0 px-sm-0 pl-md-2" style="height: 810px">
                    <img class="w-100 h-100" src="../../public/images/专属订制.jpg" alt="">
                    <div class="w_1_right pb-3" >
                        <p class="mb-0">Exclusive custom</p>
                        <h4 >专属定制眼镜</h4>
                    </div>
                </div>
            </div>


        </div>

    </div>


</template>
<script>
    export default {

    }
</script>
<style scoped>
    .breadcrumb-item+.breadcrumb-item::before{
        content: ">"
    }

    .glasses{margin: 0;padding: 0;}
    /* img宽高 */

    /* 导航 */
    .b_1{
        display: flex;
        justify-content: space-around;
        line-height: 55px;;
    }
    .f_1{
        height: 55px;
        background: #000;
    }
    /* 字体颜色 */
    .c_1{
        color: #fff;
    }
    .c_1:hover{
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
    .lefttTop{

        width: 100%;
        position: relative;
        margin-bottom:10px;
        float: left;
        overflow: hidden;
        width: calc(55.8% - 10px);
        position: relative;
    }
    .lefttTop{

        width: 100%;
        position: relative;
        margin-bottom:10px;
    }
    .row .leftBottom{
        width: 100%;
        position: relative;
    }
    .img_1{
        display: block;
        width: 100%;
        height: 400px;
    }
    .img_2{
        display: block;
        width: 100%;
    }
    .img_1{
        display: block;
        width: 100%;
        height: 400px;
    }
    .img_2{
        display: block;
        width: 100%;
    }
    /* 右 */
    .right{
        width: 44.2%;
        float: right;
        position: relative;
    }
    /* 图片中托盘文字 */
    .w_1{
        position: absolute;
        left: 110px;bottom: 0px;
        text-align: center;
        color: #fff;
        font-size: 30px;
    }

    .w_1_right{
        position: absolute;
        left: 110px;bottom: 350px;
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

    .img-tip>span {
        display: block;
    }

    .lgg {
        text-align: center;
        position: relative;
        background-color: #f8f8f8;
    }

    .lgg>p {
        position: absolute;
        top: 50%;
        left: 0;
        right: 0;
        margin: 0 auto;
    }
    /* 中部第一张小图片字体样式 */
    .smOne_img_Etext{
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
    }

</style>