// 分装一个 通过 promise 定义的 ajax请求函数
function pAjax(url, type, data, datatype) {
    // 创建一个promise 对象
    const p = new Promise(function (f, r) {
        // promise 执行的 程序内容 是 一个 ajax 异步请求
        // 创建一个 ajax对象
        const xhr = new XMLHttpRequest();

        // 判断请求方式
        if (type === 'get') {
            // get 请求方式的设定  地址栏之后拼接参数
            xhr.open('get', `${url}?${data}`);
            xhr.send();
        } else if (type === 'post') {
            // 设定 open
            xhr.open('post', url);
            // 设定 请求头
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            // 设定 send
            xhr.send(data);
        }
        // 接收结果
        xhr.onload = function () {
            // 获取相应体
            let res = '';
            if (datatype === 'json') {
                // 如果是 json 就需要解析
                res = JSON.parse(xhr.response);
            } else {
                res = xhr.response;
            }

            if (xhr.status >= 200 & xhr.status <= 299) {
                f(res);
            } else {
                r(res);
            }
        }
    })

    // 将 执行 结果 生产的实例化对象,作为返回值
    // 就可以在 程序之外 对 返回的实例化对象编辑 .then 或者 .catch
    return p;
}