<?php

if (isset($_GET['url'])) {
    file_put_contents('visited_urls.txt', $_GET['url'] . PHP_EOL, FILE_APPEND);
}


