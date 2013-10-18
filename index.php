<?php

require_once __DIR__.'/vendor/autoload.php';

$app = new Silex\Application();

// app config
$app['debug'] = false;
$app->register(new Silex\Provider\TwigServiceProvider(), array(
	'twig.path' => __DIR__.'/views',
));
$app->register(new Silex\Provider\UrlGeneratorServiceProvider());

// controllers
$app->get("/", function () use ($app) 
{
	 return $app['twig']->render('index.html.twig');
})->bind('homepage');

$app->get("/services", function () use ($app)
{
	return $app['twig']->render('services.html.twig');
})->bind('services');

$app->get("/team", function () use ($app)
{
	return $app['twig']->render('team.html.twig');
})->bind('team');

$app->get("/contact", function () use ($app)
{
	return $app['twig']->render('contact.html.twig');
})->bind('contact');


$app->run();