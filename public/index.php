<?php

require_once __DIR__ . '/../vendor/autoload.php';

// Create and configure the application
$app = new Silex\Application();

$app->register(new Silex\Provider\TwigServiceProvider(), array(
    'twig.path' => __DIR__ . '/../src/views',
));

// Define the paths
$app->get('/', 'Pley\\Controllers\\Index::index');
$app->get('/register', 'Pley\\Controllers\\Index::register');

$app->post('/user/register', 'Pley\\Controllers\\User::register');

// Start the application
$app->run();
