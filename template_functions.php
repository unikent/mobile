<?php

function get_header($settings=array()) {
	extract($settings);
	require_once("header.php");
}

function get_footer($settings=array()) {
	extract($settings);
	require_once("footer.php");
}