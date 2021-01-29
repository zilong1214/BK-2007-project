// 当点击退出登录按钮
$('[name="loginOut"]').click(()=>{
    mySetCookie('login',1,-1,'/')
})

// 当点击购物车时
$('[name="cart"]').click(()=>{
    // 如果没有登录，跳转登录页面
    if(myGetCookieObj().login === undefined){
        let bool = window.confirm('您还没有登录，点击确认进入登录页面')
        if(bool){
            window.location.href = '../pages/login.html'
        }
    }
    // 如果有登录，跳转购物车页面
    else{
        window.location.href = '../pages/cart.html'
    }
})