<?php

session_start();

if (isset($_SESSION['isLoggedIn']) && true === $_SESSION['isLoggedIn']) {
    $response = [
        'isLoggedIn' => true,
        'user' => 'root',
    ];
} else {
    $response = [
        'isLoggedIn' => false
    ];
}

header('Content-Type: application/json');
echo json_encode($response);

