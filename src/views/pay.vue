<template>
    <div class="container-fluid ">
        <my-header></my-header>
        <div class="contenter">
<div class="row" id="myVue"  >
    <div class="col-lg-12 col-lg-offset-1" >
        <div class="contenter">
            <ul>
                <li>
                    <el-row>
                        <span class="addAddressCons">收货人信息</span>
                        <span class="addAddress" @click="AddressShowClick">新增收货地址</span>
                    </el-row>
                    <div class="scolleShow" >
                        <el-row  class="consignee" v-for="(items,index) in filterAddress"  >
                            <div @mouseout="MouseOutList(items)" @mouseleave="MouseOverList(items)">
                                <el-col :span='4'>
                                    <div class="consigneeList consigneeListWidth"  :class="{'consigneeListClick':items.addressDefult}" @click="currentIndexClick(items,index)">
                                        <span v-text="items.name"></span>
                                        <span v-text="items.city"></span>
                                        <div v-show="items.addressDefult">
                                            <div class="arrow-right"></div>
                                            <i class="fa fa-check" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                </el-col>
                                <el-col :span='20' class='rightAddress' :class='{BackColor:items.addressIsShow}'>
                                    <span v-text="items.name"></span>
                                    <span v-text="items.city"></span>
                                    <span v-text="items.area"></span>
                                    <span v-text="items.minarea"></span>
                                    <span v-text="items.phone"></span>
                                    <span v-if='items.isShowDefult' class="addressDefultClass">默认地址</span>
                                    <span v-if='items.addressIsShow' class='edmitAddre' >
											<span class='edmitSpan' @click="defultAddress(items)">设为默认地址</span>
											<span class='edmitSpan' @click="emitAddress(items,index)">编辑</spa>
										</span>
										<span v-if='!items.isShowDefult' @click="deleAddressAlert(index)" class='edmitSpan edmitSpan-delete' >删除</span>
										</span>
                                </el-col>
                                <div class="clearfix"></div>
                            </div>
                        </el-row>
                    </div>
                    <el-dialog
                            title="新增收货地址"
                            :visible.sync="newAddressShow"
                            width="30%"
                    >
                        <el-form ref="form" :model="form" label-width="80px">
                            <el-form-item label="收货人" >
                                <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                            </el-form-item>
                            <el-form-item label="所在地区" >
                                <el-input v-model="form.city" placeholder="请输入内容"></el-input>
                            </el-form-item>
                            <el-form-item label="详细地址" >
                                <el-input v-model="form.minarea" placeholder="请输入内容"></el-input>
                            </el-form-item>
                            <el-form-item label="手机号码" >
                                <el-input v-model="form.phone" placeholder="请输入内容"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-checkbox-group v-model="form.isShowDefult">
                                    <el-checkbox  label="设为默认地址" name="type">设为默认地址</el-checkbox>
                                </el-checkbox-group>
                            </el-form-item>
                        </el-form>
                        <span slot="footer" class="dialog-footer">
									<el-button @click="dialogVisible = false" type='danger'>取 消</el-button>
									<el-button type="primary" @click="saveNewAdress(edmitType)">保存</el-button>
								</span>
                    </el-dialog>
                    <div v-if='!moreAddressData.length == 0' class="muchAddress">
								<span @click="moreAddress">更多地址
									<transition name="fade"  mode="out-in">
										<i key='up' v-if='isTranShow' class="fa fa-angle-double-down" ></i>
										<i key='down' v-else class="fa fa-angle-double-up" ></i>
									</transition>
								</span>
                    </div>
                    <div v-if='moreAddressData.length == 0' class="noAddress" >
                        <span>您还没有收货地址，请增加新的收货地址！</span>
                    </div>
                </li>
                <li>
                    <span class="addAddressCons">支付方式</span>
                    <div class="consignee">
                        <!--paymentIndex 支付类型默认为数字是 1                                            判断 如果paymentInedx为真 则 class=consigneeListClick     如果点击了就把index的值付给paymentIndex-->
								<span class="consigneeList" v-for="(paymentDatas,index) in paymentdatas" :class="{'consigneeListClick':paymentIndex == index}" @click="paymentIndex=index">
									<span v-text="paymentDatas.name"></span>
                    <!--点了后 paymentIndex的值 就变味了index的值 也就是数组中的第几个数字    v-show为真时执行-->
									<div v-show="paymentIndex == index">
										<div class="arrow-right"></div>
										<i class="fa fa-check" aria-hidden="true"></i>
									</div>
								</span>
                    </div>
                </li>
                <li>
                    <span class="addAddressCons">送货清单</span>
                    <span class="addAddress"><a href="javascript:;">返回修改购物车</a></span>
                    <div class="row deliverymode">
                        <div class="col-lg-3 deliverymodeLeft">
                            <p>配送方式：</p>
                            <div v-for="(deliverymodeDatas,index) in deliverymodedatas"  >
									 	<span class="consigneeList" @click="deliverymodeIndex=index" :class="{'consigneeListClick':deliverymodeIndex == index}">
											<span v-text="deliverymodeDatas.type" ></span>
											<div v-show="deliverymodeIndex == index">
												<div class="arrow-right"></div>
												<i class="fa fa-check" aria-hidden="true"></i>
											</div>
										</span>
                                <p class="deliverymodeLeftTit" v-text="deliverymodeDatas.name"></p>
                            </div>
                        </div>
                        <div class="col-lg-9 deliverymodeRight" >
                            <div>
                                <table>
                                    <tr>
                                        <td>
									        	<span class="goodName">
													<img class="goodImg" src="../../src/assets/imgss/0ea0.jpg" />
												</span>
                                            <span class="goodName goodsName">
													<h2 class="goodname"></h2>
													<p class="goodGary">
														<span>供应商：</span>
														<span>美国</span>
													</p>
													<p class="goodGary">
														<span>发货地：</span>
														<span>中国</span>
													</p>
												</span>
                                        </td>
                                        <td class="goodPrice">￥344534.00</td>
                                        <td class="goodNum">1</td>
                                    </tr>
                                    <tr>
                                        <td>
									        	<span class="goodName">
													<img class="goodImg" src="../../src/assets/imgss/0ea0.jpg" />
												</span>
                                            <span class="goodName goodsName">
													<h2 class="goodname"></h2>
													<p class="goodGary">
														<span>供应商：</span>
														<span>美国</span>
													</p>
													<p class="goodGary">
														<span>发货地：</span>
														<span>中国</span>
													</p>
												</span>
                                        </td>
                                        <td class="goodPrice">￥344534.00</td>
                                        <td class="goodNum">1</td>
                                    </tr>

                                </table>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <span class="addAddressCons">发票信息</span>
                    <div class="consignee">
								<span class="consigneeList" v-for="(invoiceDatas,index) in invoicedatas" :class="{'consigneeListClick':invoiceIndex == index}" @click="invoiceIndex=index">
									<span v-text="invoiceDatas.name"></span>
									<div v-show="invoiceIndex == index">
										<div class="arrow-right"></div>
										<i class="fa fa-check" aria-hidden="true"></i>
									</div>
								</span>
                    </div>
                    <div class="consignee" v-if="invoiceIndex > 0">
                        <span class="CompanyInformation">增值税普通发票</span>
                        <span class="CompanyInformation">北京科技公司</span>
                        <span class="CompanyInformation">货物详细</span>
                        <span class="CompanyInformation modify">修改</span>
                    </div>

                </li>
                <li class="couponconts">
                    <span class="addAddressCons ">使用优惠券</span>
                    <div class="consignee couponcontShow" >
								<span class="coupon" v-for="(item,index) in Coupondatas" :class="{'consigneeListClick':CouponIndex == index}" @click="CouponIndexClcik(index,item.price)">
									<div class="couponDiv" :class="{'couponDivClick':CouponIndex == index}">
										<p class="couponprice">{{item.price | moneyFiler}}</p>
										<p class="coupontime" v-text="'有效期至'+item.time"></p>
									</div>
									<span class="coupontype" :class="{'coupontypeClick':CouponIndex == index}">
										<span v-text="item.type"></span>
										<span v-text="item.types"></span>
									</span>
									<div v-show="CouponIndex == index">
										<div class="arrow-right"></div>
										<i class="fa fa-check" aria-hidden="true"></i>
									</div>
								</span>
                    </div>
                </li>
            </ul>
            <div class="row totalRow">金额抵用：{{couponPrice | moneyFiler}}</div>
        </div>
        <div class="contenterFooter">
            <p>1件商品，1项服务，总金额：<span class="footerPrice">￥9600.00</span></p>
            <p>运费：<span class="footerPrice">￥100.00</span></p>
            <p>优惠：<span class="footerPrice footercouponPrice">{{couponPrice | moneyFiler}}</span></p>
        </div>
        <div class="clearfix"></div>
        <div class="row footerRow">
            <span class="footerRowprice">应付金额：<span>￥9999.00</span></span>
            <span class="footerRowaddress"><span>商品收获地址：{{moreaddressCity + moreaddressArea + moreaddressMinarea}}</span><span>{{moreaddressName}}</span><span>18347460829</span></span>
        </div>
        <button class="btn submitForm">提交订单</button>
    </div>


      </div>
        </div>
        <foot></foot>
    </div>
</template>
<script>
    import FooTer from "./footer.vue"
    export default {
        components: {
            "foot": FooTer,
        },

        data(){
            return{
                /*数据源*/
                dialogs:dialogs,
                shopTableDatas:shopCartdatas.shopcartdatas,
                moreAddressData:addressdatas.addressdata,//地址数据
                paymentdatas:payment.paymentdata,//支付类型数据
                deliverymodedatas:deliverymode.deliverymodeData,//配送类型数据
                invoicedatas:invoice.invoicedata,//发票类型数据
                Coupondatas:Coupon.Coupondata,//优惠券数据
                userBuyData:[],//用户购买数据

                /*默认选择标签*/
                checkedAll:false, //全选状态
                limitNum:1,//默认显示几个地址
                currentIndex:0,//地址默认选择
                paymentIndex:1,//支付类型默认选择
                deliverymodeIndex:1,//配送类型默认选择
                invoiceIndex:1,//发票类型默认选择
                CouponIndex:-1,//优惠券默认选择
                stopDelete:"",//定时器id(用于清空定时器)
                activeName: '支付平台',

                /*关键字段初始化*/
                moreaddressName:"",//收货人姓名
                moreaddressCity:"",//收货人所在市
                moreaddressArea:"",//收货人所在区
                moreaddressMinarea:"",//收货人所在小区
                couponPrice:0,//优惠券默认金额
                goodNums:0,    //商品或者服务总数
                totalMoney:0, //总价格
                saveandremove:true,//收藏和取消收藏的状态
                goodsNum:0,//商品的数量
                serviceNum:0,//服务的数量
                list:[],//购物车页面
                fadelist:[],//收货人界面


                form: {
                    name:'',
                    city:'',
                    area:'',
                    minarea:'',
                    phone:'',
                    addressDefult:'',
                    addressIsShow:'',
                    num:'',
                    isShowDefult:''
                },
                newAddressShow:false,//新增收货地址显示
                dialogVisible: false,//编辑、新增对话状态
                edmitType:'',
                isTranShow:true,
            }
        },
        mounted:function(){
            this.$nextTick(function(){
                this.initAddress();
            })
        },
        methods: {
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

            /*商品数量增加减少函数*/
            goodNum:function(item,way){
                if(way == 1){
                    item.num++;
                    vm.countTotalMoney()
                }else{
                    if(item.num < 2){
                        item.num =1;
                    }else{
                        item.num--;
                        vm.countTotalMoney()
                    }

                }
            },
            /*单选函数*/
            checkedRadioBtn:function(tabledatas){
                this.countTotalMoney()
                /*单选计算商品或服务数量*/
                if(tabledatas.type == "商品" && tabledatas.checked == true){
                    this.goodsNum += 1;
                }else if(tabledatas.type == "服务" && tabledatas.checked == true){
                    this.serviceNum += 1;
                }else if(tabledatas.type == "商品" && tabledatas.checked == false){
                    this.goodsNum -= 1;
                }else if(tabledatas.type == "服务" && tabledatas.checked == false){
                    this.serviceNum -= 1;
                }else{
                    console.log("未知错误！")
                }
            },
            /*全选函数*/
            checkedAllBtn:function(checkedAll){
                var _this= this;
                /*全选计算商品或服务数量*/
                if(checkedAll == true){
                    for( x in this.shopTableDatas){
                        this.shopTableDatas[x].checked = true;
                        if(this.shopTableDatas[x].type == "商品" ){
                            _this.goodsNum += 1;
                        }else if(this.shopTableDatas[x].type == "服务" ){
                            _this.serviceNum += 1;
                        }
                    }
                }else{
                    for( y in this.shopTableDatas){
                        this.shopTableDatas[y].checked = false;
                        this.goodsNum = 0;
                        this.serviceNum = 0;
                    }
                }
                vm.countTotalMoney();
            },
            /*删除单个选中函数*/
            deletegoods:function(index){
                console.log(index);
                this.shopTableDatas.splice(index, 1);
                vm.countTotalMoney();
            },
            /*删除多个选中函数*/
            deleteSelectAll:function(){
                for(var i = this.shopTableDatas.length-1 ; i >= 0 ; i--){
                    if(this.shopTableDatas[i].checked  == true){
                        this.shopTableDatas.splice(i, 1);
                    }
                }
                vm.countTotalMoney();
            },
            /*单个移到收藏*/
            movesSave:function(index){
                this.shopTableDatas.splice(index,1)
            },
            /*多个商品移动函数*/
            saveSelectAll:function(){
                for(var i = 0 ; i <= this.shopTableDatas.length ; i++){
                    if(this.shopTableDatas[i].checked  == true){
                        console.log(this.shopTableDatas[i])
                        this.stopDelete = setTimeout(function(){
                            vm.deleteSelectAll();
                            clearInterval(this.stopDelete)
                        },10);
                    }
                }
            },
            /*计算商品总价函数*/
            countTotalMoney:function(){
                var _this = this;
                _this.totalMoney = 0;
                this.shopTableDatas.forEach(function(item,index){
                    if(item.checked == true){
                        _this.totalMoney += item.num*item.price
                    }
                })
            },
            /*保存购买数据*/
            saveData:function(){
                var _this = this;
                _this.userBuyData.length = 0;
                this.shopTableDatas.forEach(function(item,index){
                    if(item.checked == true){
                        window.location.href='';
                    }
                })
            },
            /*删除收货地址函数*/
            deleAddress:function(index){
                this.moreAddressData.splice(index, 1);

            },
            /*优惠券点击函数*/
            CouponIndexClcik:function(index,price){
                this.CouponIndex = index;
                this.couponPrice = price;

            },
            //初始化地址
            initAddress:function(){
                var tem,index;
                for(var y in this.moreAddressData){
                    if(this.moreAddressData[y].addressDefult == true){
                        tem = this.moreAddressData[y];
                        index=y;
                    }
                }
                this.moreAddressData.splice(index, 1)
                this.moreAddressData.unshift(tem)
            },
            //设置为默认收货地址
            defultAddress:function(item){
                var tem,index;
                for(x in this.moreAddressData){
                    this.moreAddressData[x].isShowDefult = false;
                }
                item.isShowDefult = true;
                for(y in this.moreAddressData){
                    if(this.moreAddressData[y].isShowDefult == true){
                        tem = this.moreAddressData[y];
                        index=y;
                    }
                }
                this.moreAddressData.splice(index, 1)
                this.moreAddressData.unshift(tem)
            },
            /*地址点击函数*/
            currentIndexClick:function(item,index){
                for(x in this.moreAddressData){
                    this.moreAddressData[x].addressDefult = false;
                }
                item.addressDefult = true;
                this.currentIndex = index;
                this.moreaddressName = item.name;
                this.moreaddressCity = item.city;
                this.moreaddressArea = item.area;
                this.moreaddressMinarea = item.minarea;
            },
            //新增收货地址函数
            AddressShowClick:function(){
                this.edmitType = '新增',
                    this.newAddressShow = true;
            },
            //新增收货地址和编辑收货地址  保存函数
            saveNewAdress:function(){
                if(this.edmitType == '新增'){
                    if(this.form.isShowDefult == true){
                        for(x in this.moreAddressData){
                            this.moreAddressData[x].isShowDefult = false;
                        }
                        this.moreAddressData.unshift(this.form)
                        this.clearEdmitAddress()
                    }else{
                        this.moreAddressData.push(this.form)
                        this.clearEdmitAddress()
                    }
                    this.newAddressShow = false;
                }else if(this.edmitType == '修改'){
                    if(this.form.isShowDefult == true){
                        for(x in this.moreAddressData){
                            this.moreAddressData[x].isShowDefult = false;
                        }
                        this.moreAddressData.splice(this.form.num,1,this.form);
                        for(y in this.moreAddressData){
                            if(this.moreAddressData[y].isShowDefult == true){
                                tem = this.moreAddressData[y];
                                index=y;
                            }
                        }
                        this.moreAddressData.splice(index, 1)
                        this.moreAddressData.unshift(tem)
                        this.clearEdmitAddress()
                    }else{
                        this.moreAddressData.splice(this.form.num,1,this.form)
                        this.clearEdmitAddress()
                    }
                    this.newAddressShow = false;

                }
            },
            //编辑收货地址函数
            emitAddress:function(item,index){
                this.newAddressShow = true;
                this.edmitType = '修改';
                //把此行数据到对话框
                this.form.name = item.name
                this.form.city = item.city
                this.form.area = item.area
                this.form.minarea = item.minarea
                this.form.phone = item.phone
                this.form.addressDefult = item.addressDefult
                this.form.addressIsShow = item.addressIsShow
                this.form.isShowDefult = item.isShowDefult
                this.form.num = index


            },
            /*鼠标移动函数显示：默认地址、编辑、删除*/
            MouseOutList:function(moreaddressData){
                moreaddressData.addressIsShow = true;
            },
            MouseOverList:function(moreaddressData){
                moreaddressData.addressIsShow = false;
            },
            //点击更多地址函数
            moreAddress:function(){
                if(this.limitNum == 1){
                    this.limitNum = this.moreAddressData.length;
                    this.isTranShow = !this.isTranShow;
                }else{
                    this.limitNum = 1;
                    this.isTranShow = !this.isTranShow;
                    var tem,index;
                    for(y in this.moreAddressData){
                        if(this.moreAddressData[y].addressDefult == true){
                            tem = this.moreAddressData[y];
                            index=y;
                        }
                    }
                    this.moreAddressData.splice(index, 1)
                    this.moreAddressData.unshift(tem)
                }
            },
            //清空当前收货操作
            clearEdmitAddress:function(){
                this.form = {name:'',city:'',area:'',minarea:'',phone:'',addressDefult:'',addressIsShow:'',num:'',isShowDefult:''}
            },
            /*提示删除单个商品*/
            alertRadio:function(index){
                this.$confirm('此操作将永久删除该商品, 是否继续?', '提示', {
                    confirmButtonText: '确定删除',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '删除成功!',
                        callback : vm.deletegoods(index)
                    });
                }).catch(() => {
                    this.$message({
                        type: 'warning',
                        message: '已取消删除'
                    });
                });
            },
            /*提示多个删除函数*/
            alertMuch:function(){
                this.$confirm('此操作将永久删除已选择商品或服务, 是否继续?', '提示', {
                    confirmButtonText: '确定删除',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '删除成功!',
                        callback : vm.deleteSelectAll()
                    });
                }).catch(() => {
                    this.$message({
                        type: 'warning',
                        message: '已取消删除'
                    });
                });
            },

            /*提示单个商品移动到收藏函数*/
            alertmovesSavegoods:function(index){
                this.$confirm('此操作将已选择商品或服务移到我的收藏, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '收藏成功!',
                        callback : vm.movesSave(index)
                    });
                }).catch(() => {
                    this.$message({
                        type: 'success',
                        message: '收藏成功!',
                    });
                });
            },
            /*提示收藏多个商品函数*/
            alertMuchgoods:function(){
                this.$confirm('此操作将已选择商品或服务移到我的收藏, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '收藏成功!',
                        callback : vm.saveSelectAll()
                    });
                }).catch(() => {
                    this.$message({
                        type: 'success',
                        message: '收藏成功!',
                    });
                });
            },
            //提示删除收货地址函数
            deleAddressAlert:function(index) {
                this.$confirm('此操作将永久删除该地址, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning',

                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '删除成功!',
                        callback:vm.deleAddress(index),
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
            //对话框询问是否关闭
        },
        /*金额过滤器*/
        filters:{
            moneyFiler:function(value){

                return "￥"+value.toFixed(2);
            }
        },
        /*用于过滤缓存(用于过滤地址显示几个)*/
        computed:{
            filterAddress:function(){
                return this.moreAddressData.slice(0,this.limitNum)
            }
        },



    }
</script>
<style scoped>
    @import "../assets/css/ShoppingCartAdress.css";

</style>