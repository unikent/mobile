<?php

class AppController extends Controller {
	
	public function autorender($route,$layout=true) {
		
		// get the current class
		$method = $route['callback'];
		
		//! TODO check request for format param
		if (!isset($format)) {
			$format = "html";
		}
		
		$class = get_class($this);
		if ($layout===true) {
			$layout = $this->layout;
		}

		return $this->render("layouts/default.html.php",false,array('controller'=>$this));

		
	}
		
}