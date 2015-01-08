<?php
    define("TEA", true);
    include 'includes/init.php';
    $smarty->assign("test",2);
    $smarty->display("index.html");

?>