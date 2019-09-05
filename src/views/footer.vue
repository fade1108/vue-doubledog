<template>
    <el-row>
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
    </el-row>


</template>
<script>
    export default {
        props:{

        }
    }
</script>
<style scoped>
    .amzdark{
        background-color: rgb(0, 39, 68);
        color: #fefefe;
    }
    .pcla{
        padding: 0 0 0 0;
        margin: 0 0 0 0;
        font-size: 40px;
        font-family: "Adobe Garamond Pro";
    }
    .chinapp{
        font-size: 15px;
    }
    .allshopul{
        display: flex ;justify-content:center;list-style: none
    }
    .allshopul li{
        padding-left: 50px;
        padding-right: 50px;
        border-right: 1px solid #fefefe;
    }
    .lastli{
        border: none!important;
    }
    </style>