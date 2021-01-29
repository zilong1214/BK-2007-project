<?php
$name = $_POST['name'];
$pwd = $_POST['pwd'];

$link = mysqli_connect('127.0.0.1' , 'root' , 'root' , 'bk2007' , 3306);

$sql = "INSERT INTO `user4`(`name`,`pwd`) VALUES ('{$name}','{$pwd}')";

$result = mysqli_query($link , $sql);

if($result){
    echo json_encode(['res' => 1, 'msg' => '注册成功']);

}
else{
    echo json_encode(['res' => 0 ,'msg' => '注册失败']);
}
