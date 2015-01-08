<?php
    if(!defined('TEA')){
        die("帅哥，求不黑！");
    }
    define('ROOT_PATH', str_replace('/includes/init.php', '', str_replace('\\', '/', __FILE__)));
    include ROOT_PATH.'/includes/config.php';
    include ROOT_PATH.'/includes/app_mysql.php';
    /*加载smarty所需文件*/
    $db = new app_mysql($db_host, $db_user, $db_pass, $db_name);
    $db_host=$db_user=$db_pass=$db_name=NULL;
    /*初始化smarty对象*/
    include ROOT_PATH.'/includes/Smarty.class.php';
    $smarty=new Smarty();
    $smarty->template_dir="templates";
    $smarty->compile_dir="compile";
    $smarty->config_dir="config";
    $smarty->cache_dir="caches";
    session_start();
?>