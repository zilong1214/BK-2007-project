 // 获取地址栏参数
 const urlObj = getUrlVal();
 // console.log(urlObj)

 // 定义初始变量
 let page = 1;
 let line = 8;
 // 定义一个函数，执行发送请求相关操作
 // 第一个参数 ：url携带的参数（对象形式）
 // 第一个参数 ：请求数据的页面
 // 第一个参数 ：请求每页显示的数量
 setPage(urlObj, page, line)
 function setPage(urlValObj, getPage, getLine) {
   let url = urlValObj.cat_one_id;
   // 发送请求
   $.ajax({
     url: '../dit/server/goods_list.php',
     data: { cat_one_id: url, page: getPage, line: getLine },
     type: 'get',
     dataType: 'json',
     success: res => {
       console.log(res)
       let str = '';
       // 循环遍历数组
       res.data.forEach((item, key) => {
         str += `
   <div class="storeBtn">
     <ul>
         <li name="li"><a class="btn btn-primary" href="../pages/list.html?cat_one_id=食品酒水">食品酒水</a></li>
         <li name="li"><a class="btn btn-primary" href="../pages/list.html?cat_one_id=童装玩具">童装玩具</a></li>
         <li name="li"><a class="btn btn-primary" href="../pages/list.html?cat_one_id=家装建材">家装建材</a></li>
         <li name="li"><a class="btn btn-primary" href="../pages/list.html?cat_one_id=奶粉尿裤">奶粉尿裤</a></li>
         <li name="li"><a class="btn btn-primary" href="../pages/list.html?cat_one_id=其他">其他产品</a></li>
      

     </ul>
   </div>
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
               <img src="${item.goods_big_logo}" alt="...">
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
         `;
       })
       $('ul').html(str);

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
           setPage(urlValObj, result.getCurrent(), getLine)
         }
 })
     }
   })
 }

