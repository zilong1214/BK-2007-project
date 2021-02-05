 // 调用函数,动态生成页面
 setCart()

 // 通过事件委托来给标签添加点击事件
 const oBox = $('.container')[0];
 // console.log(oBox)
 // 添加点击事件
 oBox.addEventListener('click',e=>{
   // 先获取当前购物车数据
   const cartObj = JSON.parse(localStorage.getItem('cart'));


   // 点击全选标签
   if(e.target.getAttribute('name') === 'all'){
     cartObj.forEach(item =>{
       // 让购买的属性值 等于 选中的属性值
       item.buy = e.target.checked;

     })
   }
   // 点击反选按钮
   if(e.target.getAttribute('name') === 'not'){
     cartObj.forEach(item=>{
       item.buy = !(item.buy);
     })
   }
   if(e.target.getAttribute('name') === 'other'){
     // 获取点击标签goods_id
     let id = e.target.getAttribute('goods_id')

     cartObj.forEach(item=>{
       if(item.goods_id === id){
         item.buy = e.target.checked;
       }
     })
   }
   // 点击删除
   if(e.target.getAttribute('name') === 'del'){
     // 获取点击标签goods_id
     let id = e.target.getAttribute('goods_id')

     cartObj.forEach((item,key)=>{
       if(item.goods_id === id){
         cartObj.splice(key,1);
       }
     })
   }
   if(e.target.getAttribute('name') === '+'){
     // 获取点击标签goods_id
     let id = e.target.getAttribute('goods_id')

     cartObj.forEach((item,key)=>{
       if(item.goods_id === id){
         item.num++;
       }
     })
   }
   if(e.target.getAttribute('name') === '-'){
     // 获取点击标签goods_id
     let id = e.target.getAttribute('goods_id')

     cartObj.forEach((item,key)=>{
       if(item.goods_id === id){
         item.num--;
       }
     })
   }
   // 修改完数据数组对象，重新设定给localStrong和cart属性存储
   localStorage.setItem('cart',JSON.stringify(cartObj))
   // 重新渲染生成页面
   setCart()
 })

 // 将动态渲染生成页面过程,封装成一个函数
 function  setCart(){
   // 获取localStorage
   const cartObj = JSON.parse(localStorage.getItem('cart'));
   // console.log(cartObj)
   // 当购物车里没有商品
   // 定义初始变量
   let result = 0;
   let type = 0;
   let num = 0;
 if (cartObj === null || cartObj.length === 0) {
 // 页面起始部分
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
       <div class="panel panel-info ">
         <div class="panel-body bg-info">
           <div class="checkbox">
             <label>
               <input type="checkbox" name="all" value="">
               全选
             </label>
           </div>
         </div>
         <div class="panel-footer">
           <ul class="cart-list">  
             `;
   // 商品部分是动态生成li标签部分   
   str += `您没有添加商品`;

   // 页面支付部分
    str += `
       </ul>
     </div>
   </div>
       <div>
         <h1>您一共 购买了 <span class="span1">${type}</span> 种 <span class="span1">${num}</span> 件 商品 </h1>
         <h1>您一共 需要支付 <span class="span2">${result.toFixed(2)}</span> 元 </h1>
       </div>
   `;
   $('.container').html(str)
 }
 // 当购物车里有商品
 else {
   let bool = true;
   cartObj.forEach(item=>{
     if(item.buy === false ){
       bool = false;
     }
   })

   // 页面起始部分
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
   <div class="panel panel-info ">
     <div class="panel-body bg-info">
       <div class="checkbox">
         <label>
           <input type="checkbox" name="all" value="" ${bool ? 'checked' : ''}>
           全选
         </label>
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <button name="not" class="del btn btn-danger">反选</button>
       </div>
     </div>
     <div class="panel-footer">
       <ul class="cart-list">  
         `
   // 商品部分是动态生成li标签部分
   cartObj.forEach(item => {
     // console.log(item)

     if(item.buy){
       type ++;
       num += item.num;
       result += item.num * item.goods_price;
     }
     str += `
     <li class="cart-item">
               <div class="left">
                 <input type="checkbox" name="other" goods_id=${item.goods_id} ${item.buy? 'checked' : ''}>
               </div>
               <div class="right">
                 <div class="media">
                   <div class="media-left">
                     <a href="JavaScript:;">
                       <img class="media-object" src="${item.goods_small_logo}" alt="...">
                     </a>
                   </div>
                   <div class="media-body">
                     <h4 class="media-heading">${item.goods_name}</h4>
                     <p>
                       <i class="glyphicon glyphicon-yen"></i>
                       <span>${item.goods_price}</span>
                     </p>
                     <div class="btn-group pull-right" role="group" aria-label="...">
                       <button type="button" class="btn btn-default" name="-" goods_id=${item.goods_id} ${item.num === 1 ? 'disabled' : ''}>-</button>
                       <button type="button" class="btn btn-default" disabled> ${item.num}</button>
                       <button type="button" class="btn btn-default" name="+" goods_id=${item.goods_id} ${item.num == item.goods_number ? 'disabled' : ''}>+</button>
                     </div>
                     <button class="del btn btn-danger" name="del" goods_id=${item.goods_id}>我不要了</button>

                   </div>
                 </div>
               </div>
             </li>
     `;
   })

   // 页面支付部分
   str += `
       </ul>
     </div>
   </div>
       <div>
         <h1>您一共 购买了 <span class="span1">${type}</span> 种 <span class="span1">${num}</span> 件 商品 </h1>
         <h1>您一共 需要支付 <span class="span2">${result.toFixed(2)}</span> 元 </h1>
       </div>
   `;
   $('.container').html(str)
 }
}