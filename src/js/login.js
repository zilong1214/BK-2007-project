const resVal = localStorage.getItem( 'res' );
// console.log(window.location.search)
      
if(resVal !== null){
  // 也就是 resVal中 有 res注册信息
  // 将数据信息写入到input标签中
  // obj 中 存储的是 json字符串 转化为 对象类型
  // name属性存储账号  pwd属性存储密码
  
  // 将json字符串还原为 对象数据类型
  const obj = JSON.parse( resVal );

  // 对象的name赋值给账号input  对象的pwd 赋值给密码input
  $('[name="name"]').val( obj.name );
  $('[name="pwd"]').val( obj.pwd );
   
}


$('form').submit(()=>{
    let name = $('[name="name"]').val();
    let pwd = $('[name="pwd"]').val();

    // console.log(name)
    // console.log(pwd)
    $.ajax({
        url:'../dit/server/goods_login.php',
        data:{userName:name,userPwd:pwd},
        dataType:'json',
        type:'post',
        success:res=>{
            console.log(res)
            if(res.result === 1 ){
                mySetCookie('login',1,24*60*60,'/');
                window.alert('登录成功')
    
                window.location.href = window.location.search ? window.location.search.substr(5):'../pages/index.html'
            }
            else{
                window.alert('登录失败')
            }
        }        
    })
    return false;
})