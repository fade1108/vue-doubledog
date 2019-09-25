<template>
    <div>
        <div class="denglu-first1">
            <div class="denglu-first1-content">
                <div class="denglu-first1-content-left">
                    <div class="logo">
                        <img src="../assets/imgss/1.png"/>
                    </div>
                    <div class="biaoti">
                        <p>轻松购物，幸福生活</p>
                    </div>
                </div>
                <div class="denglu-first1-content-right">
                    <p class="jiamengrexian">商城客服服务热线130-0843-9330</p>

                </div>
            </div>
        </div>

        <div class="container-fluid" style="background-image: url(../assets/imgss/3.png);">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <el-carousel :interval="4000" type="card" height="600px">
                            <el-carousel-item v-for="item in imagesbox" :key="item.id">
                                 <img :src="item.idView" class="" style="width: 100% !important;">
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                    <div class="col-lg-6">
                        <div class="f-container" id="f-container" :class="activeClass == 0 ? 'right-panel-active':'' ">
                            <div class="form-container sign-up-container">
                                <div class="formms">
                                    <h1>注册</h1>
                                    <div class="social-container">
                                        <a class="iconfont a1" style="font-size: 30px">&#xf01ca;</a>
                                        <a class="iconfont a2" style="font-size: 30px">&#xe62f;</a>
                                        <a class="iconfont a3" style="font-size: 30px">&#xe637;</a>
                                    </div>
                                    <span>第三方账号注册</span>
                                    <el-input @focus="open" placeholder="请输入注册用户名" v-model="runame"></el-input>
                                    <el-input @focus="open2" label="密码" placeholder="请输入密码" v-model="rupwd"></el-input>
                                    <el-input @focus="open3" label="手机号" placeholder="请输入手机号" v-model="rtel"></el-input>
                                    <button @click="del" :data-runame="runame" :data-rupwd="rupwd" :data-rtel="rtel">注册</button>
                                </div>
                            </div>
                            <div class="form-container sign-in-container">
                                <div class="formms">
                                    <h1>登录</h1>
                                    <div class="social-container">
                                        <a class="iconfont a1" style="font-size: 30px">&#xf01ca;</a>
                                        <a class="iconfont a2" style="font-size: 30px">&#xe62f;</a>
                                        <a class="iconfont a3" style="font-size: 30px">&#xe637;</a>
                                    </div>
                                    <span>第三方账号登录</span>
                                    <el-input @focus="open"  placeholder="请输入用户名" v-model="uname"></el-input>
                                    <el-input @focus="open2"  placeholder="请输入密码" v-model="upwd"></el-input>


                                    <a href="javascript:;">忘记密码？</a>
                                    <mt-button class="btn btn-danger" size="large" @click="login">登录</mt-button>
                                </div>
                            </div>
                            <div class="overlay-container">
                                <div class="overlay">
                                    <div class="overlay-panel overlay-left">
                                        <h1>欢迎回来！</h1>
                                        <p>请您先登录的个人信息，进行操作。</p>
                                        <button @click="getClass2()" class="ghost " id="signIn">登录</button>
                                    </div>
                                    <div class="overlay-panel overlay-right">
                                        <h1>你好朋友！</h1>
                                        <p>输入您的个人信息注册成为会员。</p>
                                        <button @click="getClass()" class="ghost" id="signUp">注册</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <footer>
                            <p>
                                版权声明
                            </p>
                        </footer>

                    </div>
                </div>
                <el-row :gutter="20">
                    <el-col :span="6"><div >
                        <i class="iconfont" style="font-size: 55px">&#xe665;</i>
                        <p>安全保障</p>
                        <p>
                            doubledog综合购物网站保障消费者账号密码等重要信息的安全
                        </p>
                    </div></el-col>
                    <el-col :span="6"><div >
                        <i class="iconfont" style="font-size: 55px">&#xe653;</i>
                        <p>一键登录</p>
                        <p>
                            支持邮箱、手机号、昵称等多种其他账号登录，方便快捷
                        </p>
                    </div></el-col>
                    <el-col :span="6"><div >
               <i class="iconfont" style="font-size: 55px">&#xe63f; </i>
                        <p>贴心客服</p>
                        <P>客服电话：130-0843-9330</P>
                    </div></el-col>
                    <el-col :span="6"><div >
                        <i class="iconfont" style="font-size: 55px">&#xe609; </i>
                        <p>品质保障</p>
                        <p>正品保障</p>
                    </div></el-col>
                </el-row>
            </div>


        </div>


    </div>
</template>
<script>
    export default {
        data() {
            return {
                uname: "",
                upwd: "",
                activeClass: -1,
                imagesbox:[{id:0,idView:require("../assets/imgss/login_1.jpg")},{id:1,idView:require("../assets/imgss/login_2.jpg")},

                    {id:2,idView:require("../assets/imgss/login_3.jpg")}],
                runame: "",
                rupwd: "",
                rtel: ""
            }
        },
        methods: {
            submit(event){
                //1.获取购物车中数据lid,lname,price
                var uname = event.target.dataset.uname;
                var upwd = event.target.dataset.upwd;
                var tel = event.target.dataset.tel;

                //2.创建url
                var obj = {uname:uname, upwd:upwd, tel:tel};
                console.log(obj);
                //3.发送ajax请求获取数据
                var url = "logregist";
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

            },
            open3(){
                this.$message({
                    message:'大陆手机号标准格式',
                    center:true
                })
            },
            open() {
                this.$message({
                    message: '用户名3-12位',
                    center: true
                });
            },
            open2(){
                this.$message({
                    message: '密码3-12位',
                    center: true
                });
            },
            login() {
                var u = this.uname;
                var p = this.upwd;
                var reg = /^[a-z0-9]{3,12}$/i;
                if (!reg.test(u)) {
                    this.$toast("用户名格式不正确");
                    return;
                }
                if (!reg.test(p)) {
                    this.$toast("密码格式不正确");
                    return;
                }
                //发送ajax axios
                var url = "login";
                var obj = {uname: u, upwd: p};
                this.axios.get(url, {params: obj}
                    //      发送请求的地址  发送请求的数据 params:
                ).then(res => {
                    console.log(res.data.code);
                    var code = res.data.code;
                    if (code == -1) {
                        this.$messagebox("消息", "用户名或密码有误")

                    } else {
                        //成功跳转 到你想到的路径
                        this.$router.push("/indexdg")
                    }
                })


            },
            del() {

                //1.创建正则表达式验证用户名和密码的格式是否是3~12位数字
                var regu = /^[a-z0-9]{3,12}$/i;
                // 2.验证手机号
                var regp = /^[1][3,4,5,7,8][0-9]{9}$/i;
                //  获取用户的uid,upwd,uphone
                var runame = this.runame; //账户
                var rupwd = this.rupwd; //密码
                var rtel = this.rtel; //手机号
                //验证用户名，如果出错错误
                if (!regu.test(runame)) {
                    // 1提示用户错误
                    this.$toast("用户名格式不正确");
                    return;
                    //停止当前函数继续执行

                }
                if (!regu.test(rupwd)) {
                    this.$notify({
                        title: "添加失败",
                        message: "密码格式不正确",
                        type: "warning"
                    });
                    return;
                }
                if (!regp.test(rtel)) {
                    this.$notify({
                        title: "添加失败",
                        message: "手机格式不正确",
                        type: "warning"
                    });
                    return;
                }

                //2.创建url
                var obj = {uname:runame, upwd:rupwd, tel:rtel};
                console.log(obj);
                //3.发送ajax请求获取数据
                var url = "logregist";
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








            },
            getClass() {
                this.activeClass = 0;
            },
            getClass2() {
                this.activeClass = -1;
            }

        }


    }
</script>

<style>
    .container>.row>.col-4{
     text-align: center;
        text-decoration: none;
        list-style: none;
    }

    .denglu-first1 {
        width: 100%;
        height: 85px;
        background: #fff;
        border-bottom: 1px solid #e5e5e5;
    }

    .denglu-first1 .denglu-first1-content {
        width: 1200px;
        margin: 0 auto;
        height: 85px;
    }

    .denglu-first1-content-left {
        width: 800px;
        height: 85px;
        float: left;
    }

    .denglu-first1-content-left .logo {
        width: 245px;
        height: 79px;
        margin-top: 3px;
        float: left;
    }

    .denglu-first1-content-left .biaoti {
        float: left;
        height: 40px;
        border-left: 1px solid #838383;
        margin-top: 22px;
        line-height: 40px;
    }

    .denglu-first1-content-left .biaoti p {
        font-family: "微软雅黑";
        font-size: 18px;
        color: #666666;
        height: 40px;
        line-height: 40px;
        margin-left: 15px;
    }

    .denglu-first1-content-right {
        width: 178px;
        float: right;
        height: 85px;
        background: url(../assets/imgss/2.png) 5px no-repeat;
    }

    .denglu-first1-content-right .jiamengrexian {
        height: 20px;
        line-height: 20px;
        font-family: "微软雅黑";
        font-size: 14px;
        color: #838383;
        margin: 20px 0 0 45px;
    }

    .denglu-first1-content-right .dianhua {
        height: 20px;
        line-height: 20px;
        margin-left: 45px;
        font-family: Constantia;
        font-size: 22px;
        font-weight: bold;
        color: #f54152;
    }

    * {
        box-sizing: border-box;
    }

    h1 {
        font-weight: bold;
        margin: 0;
    }

    h2 {
        text-align: center;
    }

    p {
        font-size: 14px;
        font-weight: 100;
        line-height: 20px;
        letter-spacing: 0.5px;
        margin: 20px 0 30px;
    }

    span {
        font-size: 12px;
    }

    a {
        color: #333;
        font-size: 14px;
        /* 	text-decoration: none; */
        margin: 15px 0;
    }

    button {
        border-radius: 20px;
        border: 1px solid #FF4B2B;
        background-color: #FF4B2B;
        color: #FFFFFF;
        font-size: 12px;
        font-weight: bold;
        padding: 12px 45px;
        letter-spacing: 1px;
        text-transform: uppercase;
        transition: transform 80ms ease-in;
    }

    button:active {
        transform: scale(0.95);
    }

    button:focus {
        outline: none;
    }

    button.ghost {
        background-color: transparent;
        border-color: #FFFFFF;
    }

    .formms {
        background-color: #FFFFFF;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0 50px;
        height: 100%;
        text-align: center;
    }

    input {
        background-color: #eee;
        border: none;
        padding: 12px 15px;
        margin: 8px 0;
        width: 100%;
    }

    .f-container {
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
        position: relative;
        overflow: hidden;
        width: 768px;
        /*max-width: 100%;*/
        min-height: 620px;
    }

    .form-container {
        position: absolute;
        top: 0;
        height: 100%;
        transition: all 0.6s ease-in-out;
    }

    .sign-in-container {
        left: 0;
        width: 50%;
        z-index: 2;
    }

    .f-container.right-panel-active .sign-in-container {
        transform: translateX(100%);
    }

    .sign-up-container {
        left: 0;
        width: 50%;
        opacity: 0;
        z-index: 1;
    }

    .f-container.right-panel-active .sign-up-container {
        transform: translateX(100%);
        opacity: 1;
        z-index: 5;
        animation: show 0.6s;
    }

    @keyframes show {
        0%, 49.99% {
            opacity: 0;
            z-index: 1;
        }

        50%, 100% {
            opacity: 1;
            z-index: 5;
        }
    }

    .overlay-container {
        position: absolute;
        top: 0;
        left: 50%;
        width: 50%;
        height: 100%;
        overflow: hidden;
        transition: transform 0.6s ease-in-out;
        z-index: 100;
    }

    .f-container.right-panel-active .overlay-container {
        transform: translateX(-100%);
    }

    .overlay {
        background: #FF416C;
        background: -webkit-linear-gradient(to right, #FF4B2B, #FF416C);
        background: linear-gradient(to right, #FF4B2B, #FF416C);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 0 0;
        color: #FFFFFF;
        position: relative;
        left: -100%;
        height: 100%;
        width: 200%;
        transform: translateX(0);
        transition: transform 0.6s ease-in-out;
    }

    .f-container.right-panel-active .overlay {
        transform: translateX(50%);
    }

    .overlay-panel {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0 40px;
        text-align: center;
        top: 0;
        height: 100%;
        width: 50%;
        transform: translateX(0);
        transition: transform 0.6s ease-in-out;
    }

    .overlay-left {
        transform: translateX(-20%);
    }

    .f-container.right-panel-active .overlay-left {
        transform: translateX(0);
    }

    .overlay-right {
        right: 0;
        transform: translateX(0);
    }

    .f-container.right-panel-active .overlay-right {
        transform: translateX(20%);
    }

    .social-container {
        margin: 20px 0;

    }

    .social-container a {
        border: 1px solid #DDDDDD;
        border-radius: 50%;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        margin: 0 5px;
        height: 40px;
        width: 40px;
    }

    footer {
        background-color: #222;
        color: #fff;
        font-size: 14px;
        bottom: 0;
        position: fixed;
        left: 0;
        right: 0;
        text-align: center;
        z-index: 999;
    }

    footer p {
        margin: 10px 0;
    }

    footer i {
        color: red;
    }

    footer a {
        color: #3c97bf;
        text-decoration: none;
    }

    .social-container > .a1 {
        color: #3E3A39 !important;
    }

    .social-container > .a2 {
        color: #ff0000 !important;
    }

    .social-container > .a3 {
        color: #34ce57 !important;
    }
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 500px;
        margin: 0;
    }
    .row>.col-lg-6>.el-carousel__item:nth-child(1n){
        background-image: url(../../public/images/watch-pc-2.jpg);
    }

    .row>.col-lg-6>.el-carousel__item:nth-child(2n) {

        background-image: url(../../public/images/专属订制.jpg);
    }

    .row>.col-lg-6>.el-carousel__item:nth-child(3n) {
        background-image: url(../../public/images/watch-pc-1.jpg);
    }

</style>