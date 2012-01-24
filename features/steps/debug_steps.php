<?php

$steps->When('/^(?:|I )echo contents?$/', function($world, $time) {
  echo $world->getSession()->getPage()->getContent();
});
$steps->When('/^(?:|I )echo location?$/', function($world, $time) {
  echo $world->getSession()->getCurrentUrl();
});