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
                    <el-row>
                        <el-button type="text" @click="dialogFormVisible = true">添加新的收货人信息</el-button>

                        <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
                            <el-input v-model="receiver" placeholder="请输入收货人姓名" ></el-input>
                            <el-input v-model="province" placeholder="请输入省份"></el-input>
                            <el-input v-model="city" placeholder="请输入城市"></el-input>
                            <el-input v-model="county" placeholder="请输入归属县"></el-input>
                            <el-input v-model="address" placeholder="请输入详细地址"></el-input>
                            <el-input v-model="cellphone" placeholder="请输入电话号码"></el-input>
                            <button @click="submit" :data-receiver="receiver" :data-province="province" :data-city="city" :data-county="county" :data-address="address" :data-cellphone="cellphone">提交</button>
                            <div slot="footer" class="dialog-footer">
                                <el-button @click="dialogFormVisible = false">取 消</el-button>
                                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                            </div>
                        </el-dialog>
                    </el-row>
                    <el-row class="el-row77" >
                        <div class="row77-float" v-for="(item,i) of fadelist" :key="i">
                            收货地址
                            <hr style="margin: 0px ;width: 238px;">
                            {{item.address}}<br>
                            姓名:{{item.receiver}}<br>
                            电话: {{item.cellphone}}
                        </div>
                    </el-row>
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
                                <img src="../../src/assets/imgss/cart2.jpg">
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
                        <el-col :span="6">总价：<h2>￥{{total.toFixed(2)}}</h2><button @click="payfor" class="btn btn-success">结账</button></el-col>
                    </el-row>





                </el-col>
            </el-row>


        </el-main>

    </el-container>



</template>
<script>
    import ElRow from "element-ui/packages/row/src/row";

    export default {
        //当中间创建成功后查询当前用户购物车表
        //如果没有登录，显示提示框“登录”，跳转登录组件
        components: {ElRow},
        data(){
            return {
                list:[], //当前登录用户的购物车列表
                checked: true,//全选
                n:1,
                activeclass:-1,
                fadelist:[],//当前登录用户的发货地址列表
                receiver:'',
                province:'',
                city:'',
                county:'',
                address:'',
                cellphone:'',
                dialogTableVisible: false,
                dialogFormVisible: false,

            }
        },
        created(){
            this.loadMore();
            this.loadeadress();
        },
        methods:{
            payfor(){
                this.$router.push('/pay')
            },
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
                        console.log(this.receiver)
                    }
                })
            },
            loadeadress(){
                var url ="cartfade";
                //发送ajax请求
                this.axios.get(url).then(res=>{

                        var col = res.data.fade;
                        console.log(col);
                        this.fadelist = col;

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
                            this.loadMore();

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

            },
            submit(event){
                //1.获取购物车中数据lid,lname,price
                var receiver = event.target.dataset.receiver;
                var province = event.target.dataset.province;
                var city = event.target.dataset.city;
                var county = event.target.dataset.county;
                var address = event.target.dataset.address;
                var cellphone = event.target.dataset.cellphone;
                //2.创建url
                var obj = {receiver:receiver, province:province, city:city,county:county,address:address,cellphone:cellphone};
                //3.发送ajax请求获取数据
                var url = "address";
                // 2.正则验证
                var regh = /^[\u4e00-\u9fa5]+$/i;
                var regp = /^[1][3,4,5,7,8][0-9]{9}$/i;
                // 2.1开始验证
                if (!regh.test(receiver)) {
                    this.$notify({
                        title: "添加失败",
                        message: "请输入您在中国使用的名字",
                        type: "warning"
                    });
                    return;
                }
                if (!regh.test(province)) {
                    this.$notify({
                        title: "添加失败",
                        message: "请输入正确省份",
                        type: "warning"
                    });
                    return;
                }
                if (!regh.test(city)) {
                    this.$notify({
                        title: "添加失败",
                        message: "请输入正确城市",
                        type: "warning"
                    });
                    return;
                }
                if (!regh.test(county)) {
                    this.$notify({
                        title: "添加失败",
                        message: "请输入正确归属县",
                        type: "warning"
                    });
                    return;
                }
                if (!regh.test(address)) {
                    this.$notify({
                        title: "添加失败",
                        message: "请输入正确地址",
                        type: "warning"
                    });
                    return;
                }
                if (!regp.test(cellphone)) {
                    this.$notify({
                        title: "添加失败",
                        message: "请输入正确手机号码",
                        type: "warning"
                    });
                    return;
                }
                this.axios.get(url, {params: obj}).then(res =>{
                    if(res.data.code==-2){
                        this.$notify({
                            title: '添加失败',
                            message: '这是一条警告的提示消息',
                            type: 'warning'
                        });
                    }else {
                        this.$notify({
                            title: '添加成功',
                            message: '这是一条成功的提示消息',
                            type: 'success'
                        });

                    }
                })
                this.loadMore();

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
        },


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
    .el-row77{

        display: flex;
        justify-content: center;
    }
    .row77-float{
        width: 300px;
        height: 106px;
        float: left;
        background: url(../../src/assets/imgss/mail.jpg)
        no-repeat;
        flex-wrap: nowrap;
        text-align: center;
    }
    .row88-float{
        width: 300px;
        height: 106px;
        float: left;
        background: url(../../src/assets/imgss/mail_1.jpg)
        no-repeat;
        flex-wrap: nowrap;
        text-align: center;
    }

</style>