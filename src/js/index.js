// 搜索栏和侧边栏
// jQuery滚动监听事件
 $(window).scroll(()=>{
    if( $(window).scrollTop() > 400 ){
        $('.searchTop').stop().slideDown(1000).css({display:'flex'} ); 
        $('.storeNav').stop().fadeIn(1000).css({display:'flex'} ); 

    }else{

        $('.searchTop').stop().slideUp(1000); 
        $('.storeNav').stop().fadeOut(1000); 
    }

     // 给楼层导航li标签,添加事件 如果 上卷高度+预留高度 > 当前楼层导航li标签 距离html文档上部距离
            // 给对应的 侧边栏li标签 添加 active 其他li标签,删除active
            $('.storey>ul>li').each((key,item)=>{
                // 当 浏览器上卷高度 + 预留高度 > 当前标签距离html文档顶部距离
  
                if( $(window).scrollTop() + 500 > $(item).offset().top ){
                    $('.storeNav li').eq(key).addClass('active').siblings().removeClass('active');
                }

            })
            
        })

        // 点击的是返回顶部li  页面上卷距离是 0
        $('.storeNav').on('click' , '[name="back"]' , ()=>{
            // 设定$('html') scrollTop 属性的运动 到 0 数值  时间是1秒
            // 通过自定义动画 完成 运动效果
            $('html').animate( {scrollTop:0} , 1000 );
        })

        // 其他侧边栏li标签   页面上卷的距离是  侧边栏li对应的 楼层li 距离 页面顶部间距 减去预留高度
       
        $('.storeNav').on('click' , '[name="li"]' , function(){
            // 在 楼层li中 按照 侧边栏li的索引 查找 li标签
            // 获取li标签 距离 页面顶部的间距,再减去 预留值
    
            $('html').animate( {scrollTop: $('.storey>ul>li').eq( $(this).index() ).offset().top - 300} , 1000 );
        })


   
          // 点击退出登录按钮
    $('[name="loginOut"]').click(()=>{
        mySetCookie('login',1,-1,'/')
        window.alert('退出登录成功')
      })
      //点击购物车
      $('[name="cart"]').click(()=>{
        const cookieObj = myGetCookieObj();
        // console.log(cookieObj)
        // console.log(cookieObj.login)
        if(cookieObj.login === undefined){
          let bool = window.confirm('您还没有登录，要登录之后才能进入购物车，点击确认跳转登录页面')
          if(bool){
          window.location.href = '../pages/login.html'
          }
        }
        else{
          window.location.href = '../pages/cart.html'
        }
      })


      // 秒杀区域  倒计时
      const endTime = getCountDown('2021-2-11 0:00:00')
      console.log(endTime)
      $('.time').html(`<span class="sp1"><p>当前时间距离</p> <p>2021年-02月-11日 0:00:00 </p><br>
      距离结束还有:<br><br><p><i>${endTime.day}</i>天<i>${endTime.hour}</i>小时<i>${endTime.minute}</i>分钟<i>${endTime.second}</i>秒</p></span>`)
      // 定时器
      setInterval(function () {
        const endTime = getCountDown('2021-2-11 0:00:00')
        $('.time').html(`<span class="sp1"><p>当前时间距离</p> <p>2021年-02月-11日 0:00:00 </p><br>
      距离结束还有:<br><br><p><i>${endTime.day}</i>天<i>${endTime.hour}</i>小时<i>${endTime.minute}</i>分钟<i>${endTime.second}</i>秒</p></span>`)
    }, 1000);


    // 左右轮播图
    var imgArr1 = [
      { width: 500, height: 500, src: '../images/miaosha/miaosha1.jpg' ,name:'茅台王子酒 金王子 53度 500ml*6瓶 整箱装',oldPrice:1788.00,newPrice:1488.00},
      { width: 500, height: 500, src: '../images/miaosha/miaosha2.jpg' ,name:'无线蓝牙耳机' ,oldPrice:229.00,newPrice:68.90},
      { width: 500, height: 500, src: '../images/miaosha/miaosha3.jpg' ,name:'五香酱牛肉熟食熟牛肉',oldPrice:218.00,newPrice:126.00},
      { width: 500, height: 500, src: '../images/miaosha/miaosha4.jpg' ,name:'外套男2020秋季男装连帽时尚男士夹克外套',oldPrice:198.00,newPrice:68.00},
      { width: 500, height: 500, src: '../images/miaosha/miaosha5.jpg' ,name:'盛世珠宝 金牛手链',oldPrice:1398.00,newPrice:559.00},
      { width: 500, height: 500, src: '../images/miaosha/miaosha6.jpg' ,name:'联想拯救者电竞手机Pro 12GB+256GB 骁龙865 Plus',oldPrice:4099.00,newPrice:3899.00},
      { width: 500, height: 500, src: '../images/miaosha/miaosha7.jpg' ,name:'飞利浦（PHILIPS） E517A',oldPrice:299.00,newPrice:269.00},
      { width: 500, height: 500, src: '../images/miaosha/miaosha8.jpg' ,name:'雅诗兰黛Estee Lauder',oldPrice:1200.00,newPrice:798.00},
      { width: 500, height: 500, src: '../images/miaosha/miaosha9.jpg' ,name:'美邦家乐 不锈钢厨房置物架',oldPrice:228.00,newPrice:88.00},
      { width: 500, height: 500, src: '../images/miaosha/miaosha10.jpg' ,name:'海飞丝男士去屑洗发水套装  持久去屑清洁止痒 清香型',oldPrice:80.12,newPrice:62.80},
      { width: 500, height: 500, src: '../images/miaosha/miaosha11.jpg' ,name:'碧浪 Ariel 衣物家居除菌液 1L  99%杀菌 除螨清香',oldPrice:59.90,newPrice:9.90},
      { width: 500, height: 500, src: '../images/miaosha/miaosha12.jpg' ,name:'蛇圣（Holy serpent） 真无线蓝牙耳机双耳运动型跑步耳机',oldPrice:329.00,newPrice:99.00},
  ]
  const oSideBanner = document.querySelector('.sideBanner')
    class GetSideBanner {
        // 获取标签对象
        constructor(element, array) {
            this.ele = element;
            this.imgArr = array;
            this.oUl = this.ele.querySelector('ul')
            this.oLi = this.oUl.querySelector('li')
            this.time = 0;
            this.index = 1;
            this.bool = true;
            this.oDivWidth = parseInt(getComputedStyle(this.oLi)['width'])
            // console.log(this.oDivWidth)
        }
        // 函数执行
        init() {

            this.setArr()
            this.autoLoop() 
            this.loopEnd()
            this.setClick()
            this.moveEvent()
            this.hidden()
        }
        // 动态生成页面
        setArr() {
            var ulStr = '';
            this.imgArr.forEach( (val, key) => {
                ulStr += `
                <li><img src="${val.src}">
                <p>${val.name}</p>
                <div class="price">
                    <span class="price-miaosha">￥${val.newPrice}</span>
                    <span class="price-origin"><s>￥${val.oldPrice}</s></span>
                </div> 
                </li>
               
                `;
               

            })
            this.oUl.innerHTML = ulStr;
            const oUlLis = this.oUl.querySelectorAll('li')
            const oFirst = oUlLis[0];
            const oLast = oUlLis[this.imgArr.length - 1]

            // 克隆第一个和最后一个
            const oFirstClone = oFirst.cloneNode(true)
            const oLastClone = oLast.cloneNode(true)
            this.oUl.appendChild(oFirstClone);
            this.oUl.insertBefore(oLastClone, oFirst)

            this.oUl.style.width = this.oDivWidth * (this.imgArr.length + 2) + 'px';
            this.oUl.style.left = - this.index * this.oDivWidth + 'px';

        }
        // 自动轮播
        autoLoop() {
            this.time = setInterval(() => {
                this.index++;
                move(this.oUl, { left: -this.index * this.oDivWidth }, this.loopEnd.bind(this))
            }, 2000)
        }
        // 轮播结束
        loopEnd() {
            if (this.index === this.imgArr.length + 2 - 4) {
                this.index = 1;
            }
            if (this.index === 0) {
                this.index = this.imgArr.length + 2 - 1 - 4;
            }
            this.oUl.style.left = -this.index * this.oDivWidth +'px';
            this.bool = true;
        }
        // 左右箭头点击
        setClick(){
        this.ele.addEventListener('click',e =>{
            if(e.target.getAttribute('name') === 'left'){
                if(!this.bool){
                    return;
                }
                this.bool = false;
                this.index++;
                move(this.oUl, { left: -this.index * this.oDivWidth }, this.loopEnd.bind(this))

            }
            if(e.target.getAttribute('name') === 'right'){
                if(!this.bool){
                    return;
                }
                this.bool = false;
                this.index--;
                move(this.oUl, { left: -this.index * this.oDivWidth }, this.loopEnd.bind(this))

            }
            
        })
        }
        // 鼠标移入 移出事件
        moveEvent(){
            this.ele.addEventListener('mouseenter',() =>{
                clearInterval(this.time)
            })
            this.ele.addEventListener('mouseleave',() =>{
                this.autoLoop()
            })
        }
        // 浏览器隐藏
        hidden(){
            document.addEventListener('visibilitychange',() =>{
                if(document.visibilityState === 'visible'){
                    this.autoLoop()
                }
                if(document.visibilityState === 'hidden'){
                    clearInterval(this.time)
                }
            })
        }
    }
    // 获取实例化对象
    const sideBanner = new GetSideBanner(oSideBanner, imgArr1)
    sideBanner.init();



    // 频道广场
    var arr1 = [
        {src1:'../images/square/s1.jpg',src2:'../images/square/s2.jpg',p1:'中外名酒',p2:'享全球美酒品美好生活'},
        {src1:'../images/square/s3.jpg',src2:'../images/square/s4.jpg',p1:'京东金融',p2:'会理财  懂生活'},
        {src1:'../images/square/s5.jpg',src2:'../images/square/s6.jpg',p1:'家装城',p2:'用心装好家一站式购齐'},
        {src1:'../images/square/s7.jpg',src2:'../images/square/s8.jpg',p1:'新机首发',p2:'有新机更有范'},
        {src1:'../images/square/s9.jpg',src2:'../images/square/s10.jpg',p1:'汽车生活',p2:'放心养车 爱车无忧'},
        {src1:'../images/square/s11.jpg',src2:'../images/square/s12.jpg',p1:'智能数码',p2:'尽享玩物尽享乐趣'},
    ]

    const oSquare = document.querySelector('.square')
    const oul = oSquare.querySelector('ul')

    let str1 = '';
    arr1.forEach((val,key)=>{
        // console.log(val)
        str1 += `
        <li>
            <p>
                <a href="JavaScript:;">${val.p1}</a>
                <span>${val.p2}</span>
            </p>
            <p>
                <img src="${val.src1}" alt="">
                <img src="${val.src2}" alt="">
            </p>
        </li>
        `
    })

    oul.innerHTML += str1;


    // 新品首发
    const oNew = document.querySelector('.new')

    var arr2 = [
        {src:'../images/new/new1.jpg',p:'三星折叠屏手机'},
        {src:'../images/new/new2.jpg',p:'花西子空气蜜粉'},
        {src:'../images/new/new3.jpg',p:'小苏打按压式牙膏'},
        {src:'../images/new/new4.jpg',p:'无线蓝牙降噪耳机'},
        {src:'../images/new/new5.jpg',p:'功夫熊猫海报'},
     
    ]
    let str2 = ''
    arr2.forEach(val=>{
        str2 += `
        <div>
            <img src="${val.src}">
            <p>${val.p}</p>
        </div>
        `
    })
    oNew.innerHTML = str2;


     // 年货节
     const oNian = document.querySelector('.nian')
     const oUl1 = oNian.querySelector('ul')
     console.log(oUl1)

     var arr3 = [
         {src:'../images/nian/nian1.jpg',p1:'至高补贴3840元',p2:'5G购机补贴'},
         {src:'../images/nian/nian2.jpg',p1:'每满300减40',p2:'服饰鞋包'},
         {src:'../images/nian/nian3.jpg',p1:'每满100减50',p2:'图书文教'},
         {src:'../images/nian/nian4.jpg',p1:'叠加满300减180',p2:'京东汽车'},
         {src:'../images/nian/nian5.jpg',p1:'爆款低至5折',p2:'健康年货'},
         {src:'../images/nian/nian6.jpg',p1:'专享低至5折',p2:'企业年会季'},
         {src:'../images/nian/nian7.jpg',p1:'生鲜满200减20',p2:'生鲜年货'},
         {src:'../images/nian/nian8.jpg',p1:'爆款买1赠1',p2:'国潮护肤'},
         {src:'../images/nian/nian9.jpg',p1:'11pro低至5399',p2:'拍拍手机'},
         {src:'../images/nian/nian10.jpg',p1:'大牌低至3折',p2:'户外运动'},
         
      
     ]
     let str3 = ''
     arr3.forEach(val=>{
         str3 += `
            <li>
                <img src="${val.src}" alt="">
                <p>
                    <span>${val.p1}</span>
                    <a href="JavaScript:;">${val.p2}</a>
                </p>
            </li>
         `
     })
     oUl1.innerHTML = str3;


    //  树状菜单
    var arr5 = [
        {src:'../images/menu/menu1.jpg',p1:'手机 电话卡',p2:'小米11'},
        {src:'../images/menu/menu2.jpg',p1:'电视 盒子',p2:'小米透明电视'},
        {src:'../images/menu/menu3.jpg',p1:'笔记本 显示器',p2:'小米笔记本'},
        {src:'../images/menu/menu4.jpg',p1:'家电 插线板',p2:'滚筒洗衣机'},
        {src:'../images/menu/menu5.jpg',p1:'出行 穿戴',p2:'小米手环'},
        {src:'../images/menu/menu6.jpg',p1:'智能 路由器',p2:'小爱音箱'},
        {src:'../images/menu/menu7.jpg',p1:'电源 配件',p2:'移动电源'},
        {src:'../images/menu/menu8.jpg',p1:'健康 儿童',p2:'牙刷'},
        {src:'../images/menu/menu9.jpg',p1:'耳机 音箱',p2:'小米小爱音箱'},
        {src:'../images/menu/menu10.jpg',p1:'生活 箱包',p2:'小米书包'},
        
    ]
    const oMenu = document.querySelector('.menu')
    // console.log(oMenu)
    let str5 ='';
    arr5.forEach(item=>{
        str5 += `
        <li class="glyphicon glyphicon-chevron-right" name="li">${item.p1}
            <ol>
                    <li>
                        <img src="${item.src}" alt="">
                        <span>${item.p2}</span>
                    </li> 
                    <li>
                        <img src="${item.src}" alt="">
                        <span>${item.p2}</span>
                    </li> 
                    <li>
                        <img src="${item.src}" alt="">
                        <span>${item.p2}</span>
                    </li> 
                    <li>
                        <img src="${item.src}" alt="">
                        <span>${item.p2}</span>
                    </li> 
                         
                
            </ol>
        </li>
        `
    })
    $('.menu>ul').html(str5)
    // 鼠标移入  显示
    $('.menu>ul>li').on('mouseenter',function(){
        $(this).find('ol').fadeToggle(0)           
                           
    })
    // 鼠标移出  隐藏
    $('.menu>ul>li').on('mouseleave',function(){
        $(this).find('ol').fadeToggle(0)           
            
    })


     // 为你推荐
     const oRecommend = document.querySelector('.recommend')
     const oUl2 = oRecommend.querySelector('ul')
    //  console.log(oUl2)

     var arr4 = [
         {src:'../images/recommend/r1.jpg',p1:'软玻璃透明PVC餐桌垫',p2:'10.00'},
         {src:'../images/recommend/r2.jpg',p1:'客厅创意 石英钟时钟',p2:'289.00'},
         {src:'../images/recommend/r3.jpg',p1:'全自动多功能 零重力太空舱电动 按摩沙发椅A8',p2:'3799.00'},
         {src:'../images/recommend/r4.jpg',p1:'景德镇陶瓷 仿古青花瓷',p2:'339.00'},
         {src:'../images/recommend/r5.jpg',p1:'U型不锈钢 高压锅',p2:'319.00'},
         {src:'../images/recommend/r6.jpg',p1:'可折叠电脑桌 懒人学习桌 简易床上桌',p2:'379.00'},
         {src:'../images/recommend/r7.jpg',p1:'创意个性家居 爱心铁艺木板 置物架',p2:'109.00'},
         {src:'../images/recommend/r8.jpg',p1:'纯棉床笠床单 式床上用品 全棉学生家纺',p2:'319.00'},
         {src:'../images/recommend/r9.jpg',p1:'职员办公桌 简约实木会议桌 电脑桌',p2:'1319.00'},
         {src:'../images/recommend/r10.jpg',p1:'智能马桶 全自动翻盖数显 冲水即热一体式',p2:'5309.00'},
     ]

     let str4 = ''
     arr4.forEach(val=>{
         str4 += `
            <li>
                <img src="${val.src}" alt="">
                <p>
                    <span>${val.p1}</span>
                    <a href="JavaScript:;">￥${val.p2}</a>
                </p>
            </li>
         `
     })
     oUl2.innerHTML = str4;



    //  百度搜索栏

    const oIpt = document.querySelector('input')
    const oUl = document.querySelector('ul')

    oIpt.addEventListener( 'input', ()=>{
        
        // clearInterval(t)

        // var t = setTimeout(SetJson,1000);
        SetJson()
    })

    function SetJson(){
        let keyword = oIpt.value;

        const time = new Date();
        let t = parseInt( time.getTime() / 1000);

        const s = document.createElement('script');
        s.setAttribute( 'src', `https://www.baidu.com/sugrec?pre=1&p=3&ie=utf-8&json=1&prod=pc&from=pc_web&sugsid=33425,33358,33257,31254,33286,33351,33413,26350,33264,33389,33370&wd=${keyword}&req=2&csor=2&pwd=a&cb=setLi&_=${t}` );

        document.body.appendChild( s );

        document.body.removeChild( s );
    }

    function setLi(result){
        console.log(result)
        if( result.g === undefined ){
            oUl.style.display = 'none';
        }
        else{
            oUl.style.display = 'block';

            let str = '';
            result.g.forEach((item)=>{
                str += `
                    <li>${item.q}</li>
                `;
            })
            oUl.innerHTML = str;
        }
    }


    // 每日特价  选项卡

    const oBox = document.querySelector('.box')

        class GetTab {
            constructor(element) {
                this.ele = element;
                this.oUL = this.ele.querySelector('ul')
                this.oUlLi = this.oUL.querySelectorAll('li')
                this.oOL = this.ele.querySelector('ol')
                this.oOlLi = this.oOL.querySelectorAll('li')
                console.log(this.oOlLi)
            }
            set() {
                this.oUL.addEventListener('click', e => {
                    if (e.target.tagName === 'LI') {
                        this.oUlLi.forEach( (val, key)=> {
                            val.className = val.className.replace('active', '');
                            this.oOlLi[key].className = this.oOlLi[key].className.replace('active', '');

                        })
                        e.target.className = 'active';
                        this.oOlLi[e.target.getAttribute('index') - 0].className = 'active';

                    }
                })
            }
        }

        const oGetTab = new GetTab(oBox);
        oGetTab.set()

// 放大镜

const arr = [
    { id:1, smallWidth:54 , smallHeight:54 , smallSrc:'../images/big/1.small.jpg' ,largeWidth:800 , largeHeight:800 , largeSrc:'../images/big/1.large.jpg'   },
    { id:2, smallWidth:54 , smallHeight:54 , smallSrc:'../images/big/2.small.jpg' ,largeWidth:800 , largeHeight:800 , largeSrc:'../images/big/2.large.jpg'   },
    { id:3, smallWidth:54 , smallHeight:54 , smallSrc:'../images/big/3.small.jpg' ,largeWidth:800 , largeHeight:800 , largeSrc:'../images/big/3.large.jpg'   },
];

const oBox1 = document.querySelector('.box1')

class SetGlass{
constructor(element,array){
    this.ele = element;
    this.arr = array;
    this.show = this.ele.querySelector('.show')
    this.mask = this.ele.querySelector('.mask')
    this.list = this.ele.querySelector('.list')
    this.glass = this.ele.querySelector('.glass')
    this.img = this.show.querySelector('img')
    // 获取box的边距
    this.boxLeft = this.ele.offsetLeft;
    this.boxTop = this.ele.offsetTop;
    // 获取show的占位
    this.showWidth = this.show.clientWidth;
    this.showHeight = this.show.clientHeight;
    // 获取show的边框占位
    this.showBorderWidth = this.show.clientLeft;
    this.showBorderHeight = this.show.clientTop;
    // 获取mask的占位
    this.maskWidth = parseInt(getComputedStyle(this.mask)['width']);
    this.maskHeight = parseInt(getComputedStyle(this.mask)['height']);

}
init(){
    this.setElement();
    this.setMouse()
    this.setClick()
    this.setMouseMove()
}
setElement(){
    let str = '';
    this.arr.forEach((val,key)=>{
        str += key===0 ? `<li class="active"><img index="${key}" src="${val.smallSrc}"></li>`
        : `<li ><img index="${key}" src="${val.smallSrc}"></li>`
    })
    this.img.setAttribute('src',this.arr[0].largeSrc)
    this.list.innerHTML = str;
    this.glass.style.backgroundImage = `url("${this.arr[0].largeSrc}") `
    this.glass.style.backgroundRepeat = "no-repeat";
    this.glass.style.backgroundPosition = "0 0";
    this.glass.style.backgroundSize = "1600px";

}
setMouse(){
    this.show.addEventListener('mouseenter',()=>{
        this.mask.style.display = 'block';
        this.glass.style.display = 'block';
    })
    this.show.addEventListener('mouseleave',()=>{
        this.mask.style.display = 'none';
        this.glass.style.display = 'none';
  
    })
}
setClick(){
    const oLis = this.list.querySelectorAll('li')

    this.list.addEventListener('click',e=>{
        if(e.target.tagName === 'IMG'){
           oLis.forEach((val,key)=>{
               val.className = val.className.replace('active','')
           })
           e.target.parentElement.className += ' active'
           let index =e.target.getAttribute('index')-0;
           this.img.setAttribute('src',`${this.arr[index].largeSrc}`)
           this.glass.style.backgroundImage = `url("${this.arr[index].largeSrc}")`
        }
    })
}
setMouseMove(){
    this.show.addEventListener('mousemove', e=>{
     
        let left = e.pageX - this.boxLeft - this.showBorderWidth - this.maskWidth/2;
        let top = e.pageY - this.boxTop- this.showBorderHeight - this.maskHeight/2;
        if(left < 0){
            left = 0;
        }
        if(top < 0){
            top = 0;
        }
        if(left > this.showWidth - this.maskWidth){
            left = this.showWidth - this.maskWidth
        }
        if(top > this.showHeight - this.maskHeight){
            top = this.showHeight - this.maskHeight
        }

        this.mask.style.left = left + 'px'
        this.mask.style.top = top +'px'

        this.glass.style.backgroundPosition = `${-left * 4}px ${-top * 4}px`
    })

}
}

const glassObj = new SetGlass(oBox1,arr)
glassObj.init()

// 轮播图

var imgArr = [
    { width: 500, height: 500, src: '../images/banner/banner1.jpg' },
    { width: 500, height: 500, src: '../images/banner/banner2.jpg' },
    { width: 500, height: 500, src: '../images/banner/banner3.jpg' },
    { width: 500, height: 500, src: '../images/banner/banner4.jpg' },
    { width: 500, height: 500, src: '../images/banner/banner5.jpg' },
    { width: 500, height: 500, src: '../images/banner/banner6.jpg' },
]

const oBanner = document.querySelector('.banner')
class GetBanner {
    constructor(element, array) {
        this.ele = element;
        this.imgArr = array;
        this.oUl = this.ele.querySelector('ul')
        this.oOl = this.ele.querySelector('ol')
        this.time = 0;
        this.index = 1;
        this.bool = true;
        this.oDivWidth = parseInt(getComputedStyle(element)['width'])
        // console.log(this.oDivWidth)
    }
    init() {

        this.setArr()
        this.autoLoop() 
        this.loopEnd()
        this.setFocusStyle()
        this.setClick()
        this.moveEvent()
        this.hidden()
    }
    setArr() {
        var ulStr = '';
        var olStr = '';
        this.imgArr.forEach( (val, key) => {
            ulStr += `
            <li><img src="${val.src}"></li>
            `;
            olStr += key === 0 ? `<li class="active" name="focus" num="${key}"></li> ` : `<li name="focus" num="${key}"></li>`;

        })
        this.oUl.innerHTML = ulStr;
        this.oOl.innerHTML = olStr;
        const oUlLis = this.oUl.querySelectorAll('li')
        const oFirst = oUlLis[0];
        const oLast = oUlLis[this.imgArr.length - 1]

        // 克隆第一个和最后一个
        const oFirstClone = oFirst.cloneNode(true)
        const oLastClone = oLast.cloneNode(true)
        this.oUl.appendChild(oFirstClone);
        this.oUl.insertBefore(oLastClone, oFirst)

        this.oUl.style.width = this.oDivWidth * (this.imgArr.length + 2) + 'px';
        this.oUl.style.left = - this.index * this.oDivWidth + 'px';

    }
    autoLoop() {
        this.time = setInterval(() => {
            this.index++;
            move(this.oUl, { left: -this.index * this.oDivWidth }, this.loopEnd.bind(this))
        }, 2000)
    }
    loopEnd() {
        if (this.index === this.imgArr.length + 2 - 1) {
            this.index = 1;
        }
        if (this.index === 0) {
            this.index = this.imgArr.length + 2 - 1 - 1;
        }
        this.oUl.style.left = -this.index * this.oDivWidth +'px';
        this.setFocusStyle()
        this.bool = true;
    }
    setFocusStyle(){
        const oOlLis = this.oOl.querySelectorAll('li')
        oOlLis.forEach((val) =>{
            myDelClass(val, 'active')
        })
        oOlLis[this.index - 1].className += ' active'
    }
    setClick(){
    this.ele.addEventListener('click',e =>{
        if(e.target.getAttribute('name') === 'left'){
            if(!this.bool){
                return;
            }
            this.bool = false;
            this.index--;
            move(this.oUl, { left: -this.index * this.oDivWidth }, this.loopEnd.bind(this))

        }
        if(e.target.getAttribute('name') === 'right'){
            if(!this.bool){
                return;
            }
            this.bool = false;
            this.index++;
            move(this.oUl, { left: -this.index * this.oDivWidth }, this.loopEnd.bind(this))

        }
        if(e.target.getAttribute('name') === 'focus'){
            if(!this.bool){
                return;
            }
            this.bool = false;
            this.index = e.target.getAttribute('num') - 0 +1;
            move(this.oUl, { left: -this.index * this.oDivWidth }, this.loopEnd.bind(this))

        }
    })
    }
    moveEvent(){
        this.ele.addEventListener('mouseenter',() =>{
            clearInterval(this.time)
        })
        this.ele.addEventListener('mouseleave',() =>{
            this.autoLoop()
        })
    }
    hidden(){
        document.addEventListener('visibilitychange',() =>{
            if(document.visibilityState === 'visible'){
                this.autoLoop()
            }
            if(document.visibilityState === 'hidden'){
                clearInterval(this.time)
            }
        })
    }
}
const oGetBanner = new GetBanner(oBanner, imgArr)
oGetBanner.init();
       
      