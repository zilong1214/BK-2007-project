<?php
$name = $_POST['name'];

$link = mysqli_connect('127.0.0.1' , 'root' , 'root' , 'bk2007' , 3306);

$sql = "SELECT * FROM `user4` WHERE `name` = '{$name}'";

$result = mysqli_query($link,$sql);

$arr = mysqli_fetch_all($result,MYSQLI_ASSOC);

if(count($arr) ===1 ){
    echo json_encode(['res' => 1 , 'msg' => '账号已经存在']);
}
else {
    echo json_encode(['res' => 0 , 'msg' => '账号不存在']);
}