<?php

$name = $_POST['name'];
$pwd = $_POST['pwd'];

$link = mysqli_connect('127.0.0.1' , 'root' , 'root' , 'bk2007' , 3306);

$sql = "SELECT * FROM `user4` WHERE `name`= '{$name}' AND `pwd`='{$pwd}'";

$result = mysqli_query($link,$sql);

$arr = mysqli_fetch_all($result,MYSQLI_ASSOC);

if(count($arr) === 1){
    echo json_encode(['login' => 1 ,'msg' => '登录成功']);

}
else if(count($arr) === 0){
    echo json_encode(['login' => 0 ,'msg' => '登录失败']);
}