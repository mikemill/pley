<?php

require_once __DIR__ . '/../vendor/autoload.php';

// Create and configure the application
$app = new Silex\Application();

$app->register(new Silex\Provider\TwigServiceProvider(), array(
    'twig.path' => __DIR__ . '/../src/views',
));

$app['debug'] = true;

// Define the paths
$app->get('/', 'Pley\\Controllers\\Index::index');

// Start the application
$app->run();
