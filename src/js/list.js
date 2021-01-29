// 获取地址栏的参数
const getUrlObj = getUrlVal()
// 定义初始变量
let page = 1;
let line = 8;

// 定义一个函数，执行发送请求相关操作
    // 第一个参数 ：url携带的参数（对象形式）
    // 第一个参数 ：请求数据的页面
    // 第一个参数 ：请求每页显示的数量
setData(getUrlObj,page,line)
 function setData(urlObj,getPage,getLine){
    const url = urlObj.cat_one_id;
    console.log(url)

     // 发送请求
     $.ajax({
        url: '../dit/server/goods_list.php',
        data: { cat_one_id:url, page: getPage, line: getLine },
        type: 'get',
        dataType: 'json',
        success: res => {
          console.log(res)
        
     let str = '';
     res.data.forEach((item,key)=>{

        str += `
     <li class="list-item">
        <div class="panel panel-primary">
          <div class="panel-body">
            <ol class="breadcrumb">
              <li><a href="#">${item.cat_one_id}</a></li>
              <li><a href="#">${item.cat_two_id}</a></li>
              <li class="active">${item.cat_three_id}</li>
            </ol>
          </div>
          <div class="panel-footer">
            <div class="row">
              <div class="">
                <div class="thumbnail">
                  <img src="${item.goods_small_logo}" alt="...">
                  <div class="caption">
                    <h3>${item.goods_name}</h3>
                    <p>
                      <i class="glyphicon glyphicon-yen"></i>
                      <span>${item.goods_price}</span>
                    </p>
                    <p><a href="javascript:;" class="btn btn-primary" role="button">查找相似商品</a> <a href="./detail.html?goods_id=${item.goods_id}" class="btn btn-danger" role="button">查看商品详情</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
     `
     })
     $('ul').html(str)

     $('.box').pagination({
      pageCount:res.sumPage,
      totalData:res.row,
      current:res.page,
      showData:line,
      prevContent:'上一页',
      nextContent:'下一页',
      count:4,
      coping:true,
      homePage:'首页',
      endPage:'末尾',
      jump:true,
      jumpIptCls:'页数',
      jumpBtn:'跳转',
      callback:function(result){
        // console.log(result.getCurrent())
        // console.log(result)
        setData(urlObj, result.getCurrent(), getLine)
      }
})
  }
        
 })
}
//  Promise 封装 ajax 发送请求

//  function pAjax(url,data,type,datatype){
//      const p = new Promise(function(f,r){
//          const xhr = new XMLHttpRequest();
//          if(type === 'get'){
//             xhr.open('get',`${url}?&${data}`)
//             xhr.send()
//          }
//          else if(type === 'post'){
//              xhr.open('post',url)
//              xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
//              xhr.send(data)
//          }
//          xhr.onload = ()=>{
//              let res = ''
//              if(datatype === 'json'){
//                 res = JSON.parse(xhr.response)
//              }
//              else{
//                  res = xhr.response
//              }
//              if(xhr.status >= 200 && xhr.status <= 299){
//                  f(res)
//              }
//              else{
//                  r(res)
//              }
//          }
//      })

//      return p;
//  }