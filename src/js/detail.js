// 获取地址栏参数
const urlObj = getUrlVal();
// console.log(urlObj)
// 定义一个全局变量
let result;

// 根据数据发送请求
$.ajax({
  url: '../dit/server/goods_detail.php',
  data: { goods_id: urlObj.goods_id },
  type: 'post',
  dataType: 'json',
  success: res => {
    console.log(res)
    // 给全局变量赋值
    result = res;
    // 动态渲染生成内容
    let str = `
    <div class="storeBtn">
    <ul>
        <li name="li"><a class="btn btn-primary" href="../pages/list.html?cat_one_id=食品酒水">食品酒水</a></li>
        <li name="li"><a class="btn btn-primary" href="../pages/list.html?cat_one_id=童装玩具">童装玩具</a></li>
        <li name="li"><a class="btn btn-primary" href="../pages/list.html?cat_one_id=家装建材">家装建材</a></li>
        <li name="li"><a class="btn btn-primary" href="../pages/list.html?cat_one_id=奶粉尿裤">奶粉尿裤</a></li>
        <li name="li"><a class="btn btn-primary" href="../pages/list.html?cat_one_id=其他">其他产品</a></li>
    </ul>
    </div>
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
        <a href="javascript:;" goods_id=${res.goods_id} name="inCart" class="btn btn-danger btn-lg" role="button">加入购物车</a>
      </p>
    </div>
  </div>
  <ul class="nav nav-tabs">
    <li role="presentation" class="active"><a href="javascript:;">商品详细信息</a></li>
    <li role="presentation"><a href="javascript:;">商品参数信息</a></li>
    <li role="presentation"><a href="javascript:;">相关商品</a></li>
  </ul>
  <div>
     ${res.goods_introduce}
  </div>
</div>
</div>
      `;

    $('.container').html(str)

  }
})

// 事件委托，点击购物车
$('.container').on('click', '[name="inCart"]', e => {
  const cookieObj = myGetCookieObj();
  // console.log(cookieObj)
  // 没有登录，进入登录页面
  if (cookieObj.login === undefined) {
    let bool = window.confirm('您还没有登录,点击确定进入登录页面')
    if (bool) {
      window.location.href = `../login/login.html?url=${window.location.href}`
    }
  }
  // 已经登录
  else {
    // 购物车里没有数据
    if (localStorage.getItem('cart') === null) {

      // buy属性默认是购买状态
      result.buy = true;
      // 默认购买一件
      result.num = 1;
      // 创建一个数组,存储数据
      const arr = [result];
      localStorage.setItem('cart', JSON.stringify(arr))
    }
    // 购物车有数据
    else {
      const arr = JSON.parse(localStorage.getItem('cart'))
      // console.log(arr)
      let bool = true;
      arr.forEach(item => {
        // 同一个商品
        if (result.goods_id === item.goods_id) {
          // 数量增加
          result.num++;
          bool = false;
        }
      })
      if (bool) {
        result.buy = true;
        result.num = 1;
        arr.push(result)
      }
      localStorage.setItem('cart', JSON.stringify(arr))
    }
    window.location.href = './cart.html';

  }
})