<?php

namespace Pley\Controllers
{
    use \Silex\Application;

    class Index
    {
        public static function index(Application $app)
        {
            return $app['twig']->render('index.twig');
        }
    }
}
