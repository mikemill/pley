<?php

namespace Pley\Controllers
{
    use \Silex\Application;
    use Symfony\Component\HttpFoundation\Request;

    class User
    {
        public static function register(Application $app, Request $request)
        {
            if ($request->get('ajax'))
            {
                return $app->json(array('message' => 'Thank you for registering'));
            }
            else
            {
                return $app['twig']->render('registration/thanks.twig');
            }
        }
    }
}
