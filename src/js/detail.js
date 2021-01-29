// 获取地址栏参数
const getUrl = getUrlVal()
const url = getUrl.goods_id;
console.log(url)

// 定义一个初始量
let result;
$.ajax({
    url:'../dit/server/goods_detail.php',
    data:{goods_id:url},
    type:'post',
    datatype:'json',
    success:res=>{
        res = JSON.parse(res)
        console.log(res)
        result = res;

        // 动态渲染页面
        let str =`
        <div class="panel panel-default">
    <div class="panel-heading">
      <h3 class="panel-title">商品详细信息</h3>
    </div>
    <div class="panel-body">
      <div class="media">
        <div class="media-left">
          <a href="#">
            <img class="media-object" src="${res.goods_small_logo}" alt="...">
          </a>
        </div>
        <div class="media-body">
          <h4 class="media-heading">${res.goods_name}</h4>
          <p>
            <i class="glyphicon glyphicon-yen"></i>
            <span>${res.goods_price}</span>
          </p>
          <div class="btn-group" role="group" aria-label="...">
            <button type="button" class="btn btn-default">XL</button>
            <button type="button" class="btn btn-default">L</button>
            <button type="button" class="btn btn-default">M</button>
            <button type="button" class="btn btn-default">S</button>
            <button type="button" class="btn btn-default">XS</button>
          </div>
          <p>
            <a href="javascript:;" class="btn btn-warning btn-lg" role="button">立即购买</a>
            <a href="javascript:;" class="btn btn-danger btn-lg" role="button" name="inCart">加入购物车</a>
          </p>
        </div>
      </div>
      <ul class="nav nav-tabs">
        <li role="presentation" class="active"><a href="#">商品详细信息</a></li>
        <li role="presentation"><a href="#">商品参数信息</a></li>
        <li role="presentation"><a href="#">相关商品</a></li>
      </ul>
      <div>
          ${res.goods_introduce}
      </div>
    </div>
  </div>
        `
        $('.container').html(str)
        
    }
})

// 点击购物车   事件委托
$('.container').on('click','[name="inCart"]',e=>{
    const cookieObj = myGetCookieObj();

    // 如果没有登录，跳转登录页面，并携带地址栏参数
    if(cookieObj.login === undefined){
        let bool = window.confirm('您还没有登录，点击确认进入登录页面')
        if(bool){
            window.location.href = `../pages/login.html?url=${window.location.href}`
        }
    }
    // 如果登录了，判断购物车有没有数据
    else{
        // 如果购物车里没有数据
        if(localStorage.getItem('cart') === null){
            // console.log(result)
            result.buy = true;
            result.num = 1;
           const arr = [result]
        localStorage.setItem('cart',JSON.stringify(arr))
        }
        // 如果购物车里有数据
        else{
            const arr = JSON.parse(localStorage.getItem('cart'))  
            console.log(arr)
            let bool = true;
           arr.forEach(item=>{
        //   如果是同一商品，商品数量增加
            if(result.goods_id === item.goods_id){
                result.num++;
                bool = false;
            }
           })
        //   如果是不同商品
        if(bool){
            result.buy = true;
            result.num = 1;
            arr.push(result)
        }
        localStorage.setItem('cart',JSON.stringify(arr))

        }
        window.location.href = '../pages/cart.html'
    }
})

