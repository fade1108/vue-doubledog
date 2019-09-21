<template>
   <!-- <el-row>
        <el-col :span="24" class="amzdark">

            <el-row style="margin-top: 100px">
                <el-col :span="24">
                <p class="pcla">DOUBLE DOG</p>
                </el-col>
            </el-row>
            <el-row style="margin-top: 50px">
                <el-col :span="24">
                    <p class="chinapp">综合购物商城</p>
                </el-col>
            </el-row>
            <el-row style="margin-top: 50px">
                <el-col :span="24">
                    <ul class="allshopul" >
                        <li>所有商品</li>
                        <li>浪琴手表</li>
                        <li>暴龙眼镜</li>
                        <li>潮流鞋子</li>
                        <li class="lastli">潘多拉</li>
                    </ul>
                </el-col>
            </el-row>


        </el-col>
    </el-row>-->
    <div class="container-fluid">
        <!-- 上部分 -->
        <div class="upp">
            <div class="row">
                <div class="col-2 px-0">
                    <ul>
                        <h2>手表</h2>
                        <li>
                            <a href="">所有手表</a>
                        </li>
                        <li>
                            <a href="">男士手表</a>
                        </li>
                        <li>
                            <a href="">女士手表</a>
                        </li>
                    </ul>
                </div>
                <div class="col-2 px-0">
                    <ul>
                        <h2>表带</h2>
                        <li>
                            <a href="">选购表带</a>
                        </li>
                        <li>
                            <a href="">更换/调节表带教程</a>
                        </li>
                    </ul>
                </div>
                <div class="col-2 px-0">
                    <ul>
                        <h2>配饰</h2>
                        <li>
                            <a href="">手表</a>
                        </li>
                        <li>
                            <a href="">戒指</a>
                        </li>
                    </ul>
                </div>
                <div class="col-2 px-0">
                    <ul>
                        <h2>关于DOUBLE DOG</h2>
                        <li>
                            <a href="">品牌故事</a>
                        </li>
                        <li>
                            <a href="">门店及专柜</a>
                        </li>
                        <li>
                            <a href="">加入我们</a>
                        </li>
                    </ul>
                </div>
                <div class="col-4 px-0">
                    <span>关注Doubledog综合购物商城</span>
                    <span>会员俱乐部</span>
                    <img src="" alt="">
                    <img src="" alt="">
                    <img src="" alt="">
                </div>

            </div>
            <div class=" row  px-0">
                <div class="col-2" mx-0>
                    <ul>
                        <li><a href="javascript:;">浪琴手表</a></li>
                        <li><a href="javascript:;">DW手表</a></li>
                        <li><a href="javascript:;">李宁</a></li>
                        <li><a href="javascript:;">暴龙眼镜</a></li>
                        <li><a href="javascript:;">礼品套装</a></li>
                    </ul>
                </div>
                <div class="col-2 px-0">
                    <ul>
                        <h2>定制服务</h2>
                        <li>
                            <a href="">搭配个性套装</a>
                        </li>
                    </ul>
                </div>
                <div class="col-2 px-0">
                    <ul>
                        <h2>购物帮助</h2>
                        <li>
                            <a href="">支付方式</a>
                        </li>
                        <li>
                            <a href="">配送服务</a>
                        </li>
                        <li>
                            <a href="">开具发票</a>
                        </li>
                        <li>
                            <a href="">保修政策</a>
                        </li>
                    </ul>
                </div>
                <div class="col-2 px-0">
                    <ul>
                        <h2>顾客服务</h2>
                        <li>
                            <a href="">常见问题</a>
                        </li>
                        <li>
                            <a href="">订单查询</a>
                        </li>
                        <li>
                            <a href="">退货规定</a>
                        </li>
                        <li>
                            <a href="">联系我们</a>
                        </li>
                    </ul>
                </div>
                <div class="col-4 " px-0>
                    <h2> 订阅最新资讯</h2>
                    <span style="color: #607285;font-size: 13px;">第一时间获取最新资讯，活动邀请及优惠信息</span>
                    <input type="btn" placeholder="邮箱地址">
                </div>


            </div>
        </div>
        <!-- 下部分 -->
        <div class="bt">
            <ul>
                <li>
                    <a href="javescript:;"> 使用条款</a>
                </li>
                <li>
                    <a href="javescript:;"> 保护隐私</a>
                </li>
                <li>
                    <a href="javescript:;">防伪标识</a>
                </li>
                <li>
                    <a href="javescript:;">网站地址</a>
                </li>
            </ul>
            <img src="" alt=""><a style="color: #607285"> 粤公网安备 44030502000796号 | 粤ICP备15098750号-1M | 营业执照</a>
            <p style="color: #607285"><a> ALL RIGHTS RESERVED. COPYRIGHT © 丹尼尔惠灵顿贸易（深圳）有限公司</a>
            </p>

        </div>

    </div>



</template>
<script>
    export default {
        props:{

        }
    }
</script>
<style scoped>

    .container-fluid{
        width: 100%;
        height: 558px;
        background: rgba(0,14,34,.9);
        color:#00081c;
        padding: 0;
        margin: 0;
    }
    .upp{
        width: 1200px;
        height: 415px;
        margin: 0 15%;
        padding-top: 78px;
    }
    h2  {
        font-size: 15px;
        color: #fff;

    }
    span{
        font-size: 15px;
        color: #fff;

        margin-right: 20px;
    }
    .container-fluid a{

        font-size: 12px;
        color: #607285;
        text-decoration: none;
    }
    .container-fluid a:hover{
        color: #fff;


    }

    li{
        list-style: none;
    }

    .bt{
        height: 143px;
        padding: 30px 0px 0px;
        width: 100%;
        text-align: center;
        border-top: 1px solid rgba(89,98,108,.5);
    }
    .bt ul {
        display: flex;
        padding: 0px;
        margin-left: 40%;
        margin-top: 30px;
    }
    .bt ul li{
        margin-right: 50px;
    }

</style>