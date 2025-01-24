<?php
// Підключаємо header з папки components
include 'components/header.php';

// Отримуємо шлях з URL
$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$segments = explode('/', trim($path, '/'));

// Якщо шлях порожній, то виводимо home
$page = !empty($segments[0]) ? $segments[0] : 'home';

// Залежно від значення параметра 'page' підключаємо відповідний контент
if ($page == 'home') {
    include 'views/index.php'; // Сторінка Home
} elseif ($page == 'about') {
    include 'views/about.php'; // Сторінка About
} elseif ($page == 'contact') {
    include 'views/contact.php'; // Сторінка Contact
} else {
    echo "<h1>404 - Page not found</h1>";
}

// Підключаємо footer з папки components
include 'components/footer.php';
?>
