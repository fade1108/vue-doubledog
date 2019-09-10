<template>
<header>
    <div id="body">
        <div style="position: absolute;width: 100px;height: 100px;top: 0px;right: 0px;z-index: 999;background-color: #dcddde;">

        <img src="../../src/assets/imgss/default.png">
            <p style="margin: 0px">用户名：TOM</p>

        </div>
    <div class="wrapper" id="wrapper">
        <header class="header" style="height: 100px">
            <div class="container">
                <h1 class="logo"><a href="#"></a></h1>
                <ul class="nav">
                    <li class="nav-item">
                        <a href="javascript:;" style="font-family: Jokerman">DoubleDog</a>
                    </li>
                    <li class="nav-item" data-subNav="nav_iphone">
                        <a href="javascript:;">综合购物商城</a>
                    </li>
                    <li class="nav-item" data-subNav="nav_subIphone">
                        <a href="javascript:;">浪琴手表</a>
                    </li>
                    <li class="nav-item" data-subNav="nav_voice">
                        <a href="javascript:;">鞋类</a>
                    </li>
                    <li class="nav-item" data-subNav="nav_parts">
                        <a href="javascript:;">书籍</a>
                    </li>
                    <li class="nav-item">
                        <a href="javascript:;">暴龙眼镜</a>
                    </li>
                    <li class="nav-item">
                        <a href="javascript:;">包类</a>
                    </li>
                    <li class="nav-item">
                        <a href="javascript:;">项链</a>
                    </li>
                    <li class="nav-item">
                        <a href="javascript:;">社区</a>
                    </li>
                </ul>

            </div>
        </header>

        <div class="sub-nav">
            <div class="sub-nav__wrap" data-link="nav_iphone">
                <a href="javascript:;">
                    <img src="../../public/images/cont/1-1.png" alt="#">

                </a>
                <a href="javascript:;">
                    <img src="../../public/images/cont/1-2.png" alt="#">

                </a>
                <a href="javascript:;">
                    <img src="../../public/images/cont/1-3.png" alt="#">

                </a>
                <a href="javascript:;">
                    <img src="../../public/images/cont/1-4.png" alt="#">

                </a>
                <a href="javascript:;">
                    <img src="../../public/images/cont/1-5.png" alt="#">

                </a>
            </div>
            <div class="sub-nav__wrap" data-link="nav_subIphone">
                <a href="#">
                    <img src="../../public/images/cont/2-1.png" alt="#">

                </a>
                <a href="#">
                    <img src="../../public/images/cont/2-2.png" alt="#">

                </a>
                <a href="#">
                    <img src="../../public/images/cont/2-3.png" alt="#">

                </a>
                <a href="#">
                    <img src="../../public/images/cont/2-4.png" alt="#">

                </a>
                <a href="#">
                    <img src="../../public/images/cont/2-5.png" alt="#">

                </a>
                <a href="#">
                    <img src="../../public/images/cont/2-6.png" alt="#">

                </a>
                <a href="#">
                    <img src="../../public/images/cont/2-7.png" alt="#">

                </a>
            </div>
            <div class="sub-nav__wrap" data-link="nav_voice">
                <a href="#">
                    <img src="../../public/images/cont/3-1.png" alt="#">

                </a>
                <a href="#">
                    <img src="../../public/images/cont/3-2.png" alt="#">

                </a>
                <a href="#">
                    <img src="../../public/images/cont/3-3.png" alt="#">

                </a>
            </div>
            <div class="sub-nav__wrap" data-link="nav_parts">
                <a href="#">
                    <img src="../../public/images/cont/4-1.png" alt="#">

                </a>
                <a href="#">
                    <img src="../../public/images/cont/4-2.png" alt="#">

                </a>
                <a href="#">
                    <img src="../../public/images/cont/4-3.png" alt="#">

                </a>
                <a href="#">
                    <img src="../../public/images/cont/4-4.png" alt="#">

                </a>
                <a href="#">
                    <img src="../../public/images/cont/4-5.png" alt="#">

                </a>
                <a href="#">
                    <img src="../../public/images/cont/4-6.png" alt="#">

                </a>
            </div>
        </div>
      </div>
    </div>

</header>

</template>
<script>
export default {


}

</script>
<style scoped>
    #body { line-height: 1; font-size: 14px; font-family: "Microsoft Yahei"; color: #333; background-color: #ffffff; }
    .header{
        /*background-color: #2D2D2D;*/
        background: -webkit-linear-gradient(#dcddde, #dcddde); /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient(#dcddde, #dcddde); /* Opera 11.1 - 12.0 */
        background: -moz-linear-gradient(#dcddde, #dcddde); /* Firefox 3.6 - 15 */
        background: linear-gradient(#dcddde, #dcddde); /* 标准的语法（必须放在最后） */

    }
    ul, ol {
        list-style: none;
    }
    #body>a {
        display: block;
        color: #333;
        text-decoration: none;
        margin: 0;
    }
    #body>input, button {
        padding: 0;
        border: none;
        outline: none;
        background: none;
    }
    #body>img {
        vertical-align: top;
    }
    #body>.wrapper {
        position: relative;
        width: 100%;
        height: 100px;
        overflow: hidden;
        margin-left: -80px;
    }

    .bg-white {
        display: none;
        position: absolute;
        z-index: 999;
        width: 100%;
        height: 62px;
        background-color: #fff;
    }

    .header {
        position: relative;
        z-index: 998;
        left: 0;
        top: 0;
        height: 62px;
    }
    .header .container {
        width: 1240px;
        padding: 0 20px;
        margin: 0 auto;
    }

    .header .logo {
        float: left;
        padding-top: 30px;
    }
    .header .logo a {
        width: 115px;
        height: 20px;
        background: url(../../public/images/logo_blue.png) no-repeat;
    }

    .container>.nav {
        color: black;
        float: left;
        margin-left: 256px;
    }
    .nav-item {
        float: left;
        position: relative;
    }
    .nav-item a {
        padding: 20px 20px 0;
        height: 42px;
        line-height: 42px;
        text-decoration: none;
        font-size: 18px;
        font-family: 宋体;
        color: black !important;
        font-weight: bold;
    }
    .nav-item a:hover {
        color: rgb(49, 165, 231);
    }

    .sub-nav {
        overflow: hidden;
        position: absolute;
        left: 0;
        top:35px;
        z-index: 999;
        width: 100%;
        background-color: #fff;
    }
    .sub-nav__wrap {
        position: absolute;
        left: 0;
        top: 0;
        display: none;
    }
    .sub-nav__wrap[data-link="nav_iphone"] {
        padding-left: 390px;
    }
    .sub-nav__wrap[data-link="nav_subIphone"] {
        padding-left: 306px;
    }
    .sub-nav__wrap[data-link="nav_voice"] {
        padding-left: 578px;
    }
    .sub-nav__wrap[data-link="nav_parts"] {
        padding-left: 445px;
    }
    .sub-nav a {
        float: left;
        width: 140px;
        padding-top: 0px;
        margin: 0px;
        text-align: center;
        color: #666;
    }
    .sub-nav a:hover {
        color: #111;
    }
    .sub-nav a img {
        display: inline-block;
        height: 60px;
    }
    .sub-nav a span {
        display: block;
        padding-top: 18px;
        font-size: 12px;
    }

    .user {
        float: right;
        position: relative;
        width: 60px;
        height: 62px;
    }
    .user:hover .user-hover,
    .user:hover .user-info {
        display: block;
    }
    .user-img {
        position: absolute;
        z-index: 3;
        width: 60px;
        padding-top: 30px;
        padding-left: 13px;
    }
    .user-img .arrow-bg,
    .user-img .arrow-font {
        position: absolute;
        top: 38px;
        left: 40px;
    }
    .user-img .arrow-bg {
        border-width: 6px;
        border-color: #999 transparent transparent transparent;
        border-style: solid dashed dashed;
    }
    .user-img .arrow-font {
        left: 41px;
        border-width: 5px;
        border-color: #fff transparent transparent transparent;
        border-style: solid dashed dashed;
    }
    .user .user-hover {
        display: none;
        position: absolute;
        z-index: 2;
        top: 0;
        right: 0;
        width: 60px;
        height: 75px;
        border-left: 1px solid #ccc;
        border-right: 1px solid #ccc;
        border-top: 3px solid #1395e4;
        background-color: #fff;
    }
    .user-info {
        display: none;
        position: absolute;
        z-index: 1;
        right: 0;
        top: 77px;
        height: 204px;
        border: 1px solid #ccc;
        background-color: #fff;
        font-size: 12px;
    }
    .user-info ul {
        padding: 0 20px;
    }
    .user-info li {
        width: 112px;
        margin-top: 20px;
    }
    .user-info a {
        color: #515151;
    }
    .user-info a:hover {
        color: rgb(49, 165, 231);
    }
    .user-info li.login {}
    .user-info li.login a {
        width: 112px;
        height: 32px;
        line-height: 32px;
        text-align: center;
        color: #fff;
        background-color: #3399ff;
    }
    .user-info li.register {
        color: #999;
    }
    .user-info li.register a {
        display: inline;
        color: #21A9E7;
    }
    .user-info li.register a:hover {
        text-decoration: underline;
    }



    /* ======== 幻灯片样式 ======== */
    .slider-box {
        position: absolute;
        z-index: 1;
        left: 0;
        top: 0;
        overflow: hidden;
        height: 100px;
    }

    .slider {
        position: absolute;
        left: 0;
        top: 0;
    }
    .slider-item {
        float: left;
        cursor: default;
    }

    .slider-box .btn-box {
        position: absolute;
        bottom: 10px;
        width: 100%;
        text-align: center;
        font-size: 0;
    }
    .slider-box .btn-item {
        display: inline-block;
        width: 10px;
        height: 10px;
        margin: 0 12px;
        border-radius: 50%;
        background-color: #666;
    }
    .slider-box .btn-item__cur {
        width: 12px;
        height: 12px;
        margin-bottom: -2px;
        border: 1px solid #666;
        background-color: transparent;
    }


    .btn, .slider-title, .btn-box {
        z-index: 999;
    }




    /* ======== 主题样式 ======== */
    .theme-white .header .logo a {
        background: url(../../public/images/logo_white.png) no-repeat;
    }
    .theme-white .nav-item a {
        color: #fff;
    }
    .theme-white .nav-item a:hover {
        color: rgb(49, 165, 231);
    }
    .theme-white .slider-box .btn-item {
        background-color: #fff;
    }
    .theme-white .slider-box .btn-item__cur {
        background-color: transparent;
        border-color: #fff;
    }

    .theme-nav .header .logo a {
        background: url(../../public/images/logo_blue.png) no-repeat !important;
    }
    .theme-nav .nav-item a {
        color: #ffffff;
    }
    .theme-nav .nav-item a:hover {
        color: rgb(49, 165, 231);
    }

</style>