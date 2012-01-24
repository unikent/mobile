<?php

require_once 'mink/autoload.php';
require_once 'PHPUnit/Autoload.php';
require_once 'PHPUnit/Framework/Assert/Functions.php';

putenv('ENV=testing');

require_once(dirname(dirname(dirname(__FILE__)))."/bootstrap.php");

// need to require clean_db.php as its not in the standard olympus bootstrap
require_once(OLYMPUS_ROOT."/lib/clean_db.php");

