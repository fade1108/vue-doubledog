<template>
    <!--<ul>
        <li v-for="(item,i) of cart" :key="i">
            <input type="checkbox" v-model="item.is_checked">
            {{item.pid}} | {{item.pname}} | ￥{{item.price}} |
            {{item.count}} | 小计:￥{{item.price*item.count}} |
            <button @click="del" :data-i="i">X</button>

        </li>
        <h1>总计 : ￥{{total.toFixed(2)}}</h1>

    </ul>-->
    <el-container>
        <el-header>
            <my-header></my-header>

        </el-header>
        <el-main>
            <el-row :gutter="20" style="margin-top: 80px">
                <el-col :span="18" :offset="2">
                    <!--<div class="cart">
                        &lt;!&ndash;1:顶部按钮: 全选&ndash;&gt;
                        <el-checkbox v-model="checked">全选</el-checkbox>

                        &lt;!&ndash;2.商品信息&ndash;&gt;
                        <div class="cart-item" v-for="(item,i) of list" :key="i">
                            <div class="leftText">
                                <input type="checkbox">
                                <div class="lname">{{item.lname}}</div>
                                <div class="price">{{item.price}}</div>

                            </div>
                            <el-button type="danger">删除</el-button>

                        </div>


                        &lt;!&ndash;3.购物车中商品数量:删除选中的商品，清空购物车&ndash;&gt;
                        <div>
                            购物车中商品的数量:
                            <span style="color: red">0</span>
                            <el-button type="danger">删除选中的商品</el-button>
                            <el-button type="danger">清空购物车</el-button>
                        </div>


                    </div>-->
                    <el-row style="margin-bottom: 0px">
                        <el-col :span="12">
                            <div class="bg-dark" style="color: #fff;font-size: 25px;font-family: 微软雅黑;">
                            商品信息
                            </div>
                        </el-col>
                        <el-col :span="3">
                            <div class="bg-dark" style="color: #fff;font-size: 25px;font-family: 微软雅黑;">
                            商品金额
                            </div>
                        </el-col>
                        <el-col :span="3">
                            <div class="bg-dark" style="color: #fff;font-size: 25px;font-family: 微软雅黑;">
                                商品数量
                            </div>
                        </el-col>
                        <el-col :span="3">
                            <div class="bg-dark" style="color: #fff;font-size: 25px;font-family: 微软雅黑;">
                                总金额
                            </div>
                        </el-col>
                        <el-col :span="3">
                            <div class="bg-dark" style="color: #fff;font-size: 25px;font-family: 微软雅黑;">
                                编辑
                            </div>
                        </el-col>


                    </el-row>
                    <!--*********购物车列表**************-->
                    <el-row class="border-left border-bottom border-right" v-for="(item,i) of list" :key="i">
                        <el-col class="cart-item" :span="12">
                            <div class="leftText">
                                <input type="checkbox" v-model="item.cb"></input>
                                <img src="../../src/assets/imgss/0ea0.jpg">
                                <div class="lname ml-5" style="width: 300px!important;"><p>{{item.lname}}</p></div>
                            </div>
                        </el-col>
                        <el-col :span="3" >
                            <div class="price mt-4">
                                <div class="price">￥{{item.price}}</div>
                            </div>
                        </el-col>
                        <el-col :span="3">
                            <div>
                                <div class="count mt-4">

                                  <button @click="change" :data-count="item.count" style="padding: 6px">-</button>
                                    <span  >
                                        {{n}}
                                    </span>
                                    <button @click="change" :data-count="item.count" style="padding: 6px">+</button>
                                </div>
                            </div>
                        </el-col>
                        <el-col :span="3">
                            <div >
                                <div class="pricecount mt-4">
                                  ￥ 123
                                </div>
                            </div>
                        </el-col>
                        <el-col :span="3">
                            <div class="mt-4">
                                <button @click="deleteItem" :data-id="item.id" class="btn btn-danger">删除</button>
                            </div>
                        </el-col>


                    </el-row>
                    <el-row :gutter="20">
                        <el-col :span="6">全选<input @click="selectAll" type="checkbox"><button class="btn btn-danger" @click="deleteItems">删除选中的商品</button></el-col>
                        <el-col :span="6"><div><img src="../../src/assets/imgss/keai1.jpg"></div></el-col>
                        <el-col :span="6"><div><img src="../../src/assets/imgss/keai1.jpg"></div></el-col>
                        <el-col :span="6">总价：<h2>￥{{total.toFixed(2)}}</h2><button class="btn btn-success">结账</button></el-col>
                    </el-row>





                </el-col>
            </el-row>


        </el-main>

    </el-container>



</template>
<script>
    export default {
        //当中间创建成功后查询当前用户购物车表
        //如果没有登录，显示提示框“登录”，跳转登录组件
        data(){
            return {
                list:[], //当前登录用户的购物车列表
                checked: true,//全选
                n:1
            }
        },
        created(){
            this.loadMore();
        },
        methods:{
            change(e){
                var count = e.target.dataset.count;
//                console.log(count)
                if(e.target.innerHTML=="+"){
                    this.n++;
                }else{
                    this.n--;
                }
            },
            loadMore(){
                //功能：获取当前用户购物车列表

                //1.创建url请求服务器地址
                var url="carts";
                //2发送ajax请求
                this.axios.get(url).then(res=>{
                    //3.获取服务器返回的数据
                    if(res.data.code == -1){
                        //4.如果服务器返回-1请登录
                        this.$alert('您还没有登录请登录','消息提示',{confirmButtonText: '确定'}).then(res=>{
                            //写在回调函数中。  用户点击确定按钮后调用的函数
                            this.$router.push("/login")
                        })
                    }else {
                        //3.获取服务区返回数据
                        //this.list = res.data.data;
                        //4.添加一个新功能，为数据添加属性cb
                        //4.1创建循环遍历res.data.data中数据
                        var rows = res.data.data;
                        for(var item of rows){
                            //4.2为其添加cb值false
                            item.cb = false;
                        }

                        //4.3将新数组赋值list
                        this.list = rows;
                    }
                })


            },

            //功能：用户点击删除按钮完成删除指定商品任务
            deleteItem(event){
                //1.为按钮绑定点击事件调用delete Item
                //2.显示确认框如果用户选确定
                this.$alert('是否删除指定数据','消息提示',{confirmButtonText: '确定'}).then(res=>{
                    //3 将当前商品id传递函数
                    var id = event.target.dataset.id;
                    //4.发送ajax请示完成删除任务
                    var url="delItem";
                    var obj = {id:id};
                    this.axios.get(url,{params:obj}).then(res=>{
                        if(res.data.code==1){
                            this.$notify({
                                title: '删除成功',
                                message: '这是一条成功的提示消息',
                                type: 'success'
                            });
                            this.loadMore();//刷新页面
                        }else {
                            this.$notify({
                                title: '删除失败',
                                message: '这是一条警告的提示消息',
                                type: 'warning'
                            });
                        }
                    })
                    //5.删除成功，提示删除成功
                }).catch(err=>{

                })


            },

            //功能：删除用户选中的多个商品
            deleteItems(){
                //显示确认对话框
                this.$alert("是否删除选定数据",'消息提示',{confirmButtonText:'确定'}).then(res=>{
                    var id = "";
                    //创建变量保存选中id值
                    //创建循环遍历数组中每个元素
                    //判断当前元素属性cb是否等于true
                    //拼接id
                    for (var item of this.list){
                        if(item.cb){
                            id+=item.id+",";
                        }
                    }
                    //去除字符串中最后一个逗号
                    id = id.slice(0,-1);
                    if(id==""){
                        this.$toast("请选择需要删除的商品");
                        return;
                    }

                    //判断用户是否选中商品 请选择需要删除的商品
                    //创建url 创建obj 发送ajax请求
                    //获取服务器返回数据
                    //判断删除多个商品是否成功
                    //刷新操作loadMore
                    var url="delItems";
                    var obj = {id:id};
                    this.axios.get(url,{params:obj}).then(res=>{
                        if(res.data.code==-1){
                            this.$notify({
                                title: '删除失败',
                                message: '这是一条警告的提示消息',
                                type: 'warning'
                            });
                        }else {
                            this.$notify({
                                title: '删除成功',
                                message: '这是一条成功的提示消息',
                                type: 'success'
                            });
                            this.loadMore();//刷新页面
                        }
                    })

                }).catch()



            },
            //功能为全选按钮绑定事件
            selectAll(event){
                var cb = event.target.checked;
                console.log(cb);
                for(var item of this.list){
                    item.cb = cb;
                }

            }
        },
        computed:{
            total() {
                return this.list.filter(item=>item.cb)
                    .reduce(
                        (prev, item) => prev + item.price * item.count
                        , 0
                    );


            }
        }



    }
</script>
<style>
    /*商品项目元素*/
    .cart-item{
        display: flex;
        justify-content: space-between;/*让子元素两端对齐*/
        align-items:center;/*垂直居中*/

    }
    /*修改左侧文字*/
    .leftText{
        display: flex;/*子元素水平对齐*/
        align-items: center;/*垂直居中*/
        justify-content: flex-start;

    }
    /*.lname{
        margin-left: 25px;
    }
    .price{
        margin-left: 25px;
    }*/

</style>