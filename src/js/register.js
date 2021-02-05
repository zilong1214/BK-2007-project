// 1,获取验证码：
$('.s1').html( getVC(4)).click( ()=>{
    $('.s1').html( getVC(4))
})

// 2,输入框焦点事件
// 账号用户名
$('[name="name"]').focus(()=>{
    $('[name="name1"]').html("设置后不可更改,中英文即可,最长14个英文或7个汉字");
    $('[name="name1"]').css({color:'blue'});
})

// 账号密码
$('[name="pwd1"]').focus(()=>{
    $('[name="spanPwd1"]').html("请输入长度为6-14个字符,不允许有空格、中文");
    $('[name="spanPwd1"]').css({color:'blue'});
})
// 再次输入密码
$('[name="pwd2"]').focus(()=>{
    $('[name="spanPwd2"]').html("请输入长度为6-14个字符,不允许有空格、中文");
    $('[name="spanPwd2"]').css({color:'blue'});
})

// 3,输入事件
// 账号用户名
$('[name="name"]').on('input',()=>{
    let val = $('[name="name"]').val().length;
    // console.log(val)
    if(val<2){
        $('[name="name1"]').html(`您已输入了${val}位,还需要输入${2-val}位`)
        $('[name="name1"]').css({color:'red'});

    }
    else if(val ===2){
        $('[name="name1"]').html('您已输入的位数已到达2位');
        $('[name="name1"]').css({color:'green'});

    }
    else if(val>2){
        $('[name="name1"]').html(`最多输入14位,还能输入${14-val}位`)
        $('[name="name1"]').css({color:'green'});
    }
})

// 账号密码
$('[name="pwd1"]').on('input',()=>{
    let val = $('[name="pwd1"]').val().length;
    // console.log(val)
    if(val<6){
        $('[name="spanPwd1"]').html(`您已输入了${val}位,还需要输入${6-val}位`)
        $('[name="spanPwd1"]').css({color:'red'});

    }
    else if(val>=6){
        $('[name="spanPwd1"]').html(`密码可用,您最多输入14位,还能输入${14-val}位`)
        $('[name="spanPwd1"]').css({color:'green'});
    }
})
// 再次输入密码
$('[name="pwd2"]').on('input',()=>{
    let val = $('[name="pwd2"]').val().length;
    // console.log(val)
    if(val<6){
        $('[name="spanPwd2"]').html(`您已输入了${val}位,还需要输入${6-val}位,请与上面密码保持一致`)
        $('[name="spanPwd2"]').css({color:'red'});

    }
    else if(val>=6){
        $('[name="spanPwd2"]').html(`您最多输入14位,还能输入${14-val}位,请与上面密码保持一致`)
        $('[name="spanPwd2"]').css({color:'green'});
    }
})

//  4,账号输入框 输入数据 失去焦点事件
$('[name="name"]').change(()=>{
    $.ajax({
        url:'../dit/server/goods_select.php',
        data:{userName:$('[name="name"]').val()},
        dataType:'json',
        type:'post',
        success:(res)=>{
            // console.log(res)
          
            if( res.result === 0 ){
                // 用户名不可用
                $('[name="name1"]').html('用户名不可用');
                $('[name="name1"]').css({color:'red'});

              } 
              else {
                // 用户名可用
                $('[name="name1"]').html('用户名可用');
                $('[name="name1"]').css({color:'green'});
              }
        }
    })
})


// 5,注册button按钮添加点击事件
// 验证码
$('button').click(()=>{
    if($('.vc').val().toUpperCase() !== $('.s1').text().toUpperCase()){
        $('.s1').html('验证码不一致');
        return false;
    }
    else{
        $('.s1').html('');
    }

  // 两个密码
  if( $('[name="pwd1"]').val() !== $('[name="pwd2"]').val() ){
    // 给 密码输入框 后的 span标签 写入提示信息内容
    $('[name="spanPwd2"]').html('两次密码不一致');
    // 阻止之后所有程序的执行
    return false;
  }else{
    // 两个密码一致 
    // 提示信息为空字符串
    $('[name="spanPwd2"]').html('');
  }

    // 如果输入的用户名和密码为空时，则会注册失败
    // if( $('[name="name"]').val('') && $('[name="pwd1"]').val('') && $('[name="pwd2"]').val('')){
    //     return false;
    // }
    // 获取账号数据
    let name = $('[name="name"]').val();
    let pwd = $('[name="pwd1"]').val();
  
    // 向PHP程序发送 ajax请求
    // 请求地址 请求方式 请求参数 等都要由后端程序决定
    $.ajax({
        url:'../dit/server/goods_res.php',
        data:{userName:name,userPwd:pwd},
        type:'post',
        dataType:'json',
        success: (res)=>{
            console.log(res)
            if(res.result === 0 ){
                window.alert('注册失败,请修改账号重新注册')
                $('.s1').html( getVC(4))

            }
            else{
              // 我们目前使用 localStrong 本地存储
                localStorage.setItem('res', JSON.stringify({name,pwd}));

                window.alert('恭喜您,注册成功,点击确定,跳转登陆页面');
                window.location.href = '../pages/login.html';

            }
        }
    })
})
