<?php

// the project paths (normally just defines APP_ROOT)
require_once dirname(__FILE__)."/config/paths.php";

// bootstrap this as a olympus project
require_once(APP_ROOT."/vendor/olympus/bootstrap.php");

// any app-specific option definitions
require_once APP_ROOT."/config/options.php";

require_once APP_ROOT."/lib/send_mail.php";
