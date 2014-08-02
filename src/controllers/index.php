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

        public static function register(Application $app)
        {
            return $app['twig']->render('registration/register.twig');
        }
    }
}
