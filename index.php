<?php

use Silex\Controller;
require_once __DIR__.'/vendor/autoload.php';

$app = new Silex\Application();

// app config
$app['debug'] = false;
$app->register(new Silex\Provider\TwigServiceProvider(), array(
	'twig.path' => __DIR__.'/views',
));
$app->register(new Silex\Provider\UrlGeneratorServiceProvider());
$app->register(new Silex\Provider\ServiceControllerServiceProvider());
$app->register(new Binfo\Silex\MobileDetectServiceProvider());

$app['twig'] = $app->share($app->extend('twig', function($twig, $app) {
	$twig->addFunction(new \Twig_SimpleFunction('asset', function ($asset) {
		return substr(substr(__FILE__, strlen(realpath($_SERVER['DOCUMENT_ROOT']))), 0, - strlen(basename(__FILE__))).'/'.$asset;
	}));

	return $twig;
}));

$app['main.controller'] = $app->share(function() use ($app) {
	return new TresEpic\Controller\MainController($app);
});

// controllers
$app->get("/", "main.controller:indexAction")->bind('homepage');
$app->get("/services", "main.controller:servicesAction")->bind('services');
$app->get("/team", "main.controller:teamAction")->bind('team');
$app->get("/contact", "main.controller:contactAction")->bind('contact');

$app->run();