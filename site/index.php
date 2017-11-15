<html>

<head></head>

<body>

<?php

    session_start();

    $message = '';

    if (!empty($_POST)) {
        if ('root' === $_POST['login'] && 'root' === $_POST['password']) {
            $_SESSION['isLoggedIn'] = true;
            header('Location: /index.php');
            die;
        } else {
            $message = 'Invalid credentials!';
        }
    }

    if (isset($_GET['do']) && 'logout' === $_GET['do']) {
        $_SESSION['isLoggedIn'] = false;
        header('Location: /index.php');
        die;
    }

?>


<?php if (!isset($_SESSION['isLoggedIn']) || true !== $_SESSION['isLoggedIn']) : ?>

<form method="post">

    <input placeholder="login" type="text" name="login" >
    <br />
    <input placeholder="password" type="password" name="password" />
    <br />
    <button type="submit" >Submit</button>

</form>

<?php else : ?>

    <h2>You are logged in.</h2>
    <p><a href="index.php?do=logout">Logout from this amazing site.</a></p>


<?php endif; ?>


</body>

</html>







