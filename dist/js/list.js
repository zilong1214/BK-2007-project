"use strict";var getUrlObj=getUrlVal(),page=1,line=8;function setData(n,a,o){var t=n.cat_one_id;console.log(t),$.ajax({url:"../dit/server/goods_list.php",data:{cat_one_id:t,page:a,line:o},type:"get",dataType:"json",success:function(a){console.log(a);var t="";a.data.forEach(function(a,n){t+='\n     <li class="list-item">\n        <div class="panel panel-primary">\n          <div class="panel-body">\n            <ol class="breadcrumb">\n              <li><a href="#">'.concat(a.cat_one_id,'</a></li>\n              <li><a href="#">').concat(a.cat_two_id,'</a></li>\n              <li class="active">').concat(a.cat_three_id,'</li>\n            </ol>\n          </div>\n          <div class="panel-footer">\n            <div class="row">\n              <div class="">\n                <div class="thumbnail">\n                  <img src="').concat(a.goods_small_logo,'" alt="...">\n                  <div class="caption">\n                    <h3>').concat(a.goods_name,'</h3>\n                    <p>\n                      <i class="glyphicon glyphicon-yen"></i>\n                      <span>').concat(a.goods_price,'</span>\n                    </p>\n                    <p><a href="javascript:;" class="btn btn-primary" role="button">查找相似商品</a> <a href="./detail.html?goods_id=').concat(a.goods_id,'" class="btn btn-danger" role="button">查看商品详情</a></p>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </li>\n     ')}),$("ul").html(t),$(".box").pagination({pageCount:a.sumPage,totalData:a.row,current:a.page,showData:line,prevContent:"上一页",nextContent:"下一页",count:4,coping:!0,homePage:"首页",endPage:"末尾",jump:!0,jumpIptCls:"页数",jumpBtn:"跳转",callback:function(a){setData(n,a.getCurrent(),o)}})}})}setData(getUrlObj,page,line);