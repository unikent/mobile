<?php

// set up the test db connection

require_once(APP_ROOT."/lib/db.php");

//require_once(APP_ROOT."/config/db.php");
$steps->Given('/^the following (.+) rows$/', function($world, $table, $rows) {

  $rows = $rows->getHash();
  
  foreach ($rows as $row) {
    
    $user = new stdClass(); 
    foreach($row as $key => $column) {
      $user->$key = $column;
    }
    create_object($user, $table);
    
  }
  
});