<?php

namespace TresEpic\Controller;

use Silex\Application;

class MainController
{
	protected $app;
	
	public function __construct(Application $app)
	{
		$this->app = $app;
	}

	public function indexAction()
	{
		return $this->render('index.html.twig');
	}
	
	public function servicesAction()
	{
		return $this->render('services.html.twig');
	}
	
	public function teamAction()
	{
		return $this->render('team.html.twig');
	}
	
	public function contactAction()
	{
		return $this->render('contact.html.twig');
	}
	
	protected function render($view)
	{
		$viewExtension = '.html.twig';
		$viewName = substr($view, 0, strrpos($view, $viewExtension));
		
		if($this->app["mobile_detect"]->isMobile())
		{
			$viewExtension = '.m'.$viewExtension;
		}
		
		$view = $viewName.$viewExtension;
		
		return $this->app['twig']->render($view);
	}
}