<?php

$world->getPathTo = function($path) use($world) { 
		switch(true) {
			case $path == "the home page":
				$path = "/"
			default: 
				throw new Exception("Path '$path' not defined in 'features/support/paths.php'");
				return;
	}

	return $path;
	
};
