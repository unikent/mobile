<?php

require_once APP_ROOT."/lib/ldap.php";

/**
* authenticate - check the student's username and password
*
* @return true|false|-1
*/
function authenticate($login, $password) {
	try {
    if (!option('fake_ldap')) {
       if (ldap_authenticate($login, $password)) {
       	return true;
       }
    }
    else {
    	return true;
    }
	}
	catch(LdapException $e) {
		error_log($e->getMessage());
		return -1;
  }
  return false;
}

/**
* find_ical_id - get the ical id for the given username from the xml data
*
* @return int $ical_id
*/
function find_ical_id($login) {
	$ical_id = 0;
	$doc = new DOMDocument();
	if (option('fake_ical_file')) {
		$xml = find_test_xml();
		$doc->loadXML($xml);
	}
	else {
		$doc->load(option('ical_xml_path'));
	}
	$xpath = new DOMXPath($doc);
	$student = $xpath->query("//student[login='{$login}']");
	$stu = $student->item(0);
	if ($stu != null) {
		$children = $stu->childNodes;
		$ical_id = $children->item(1)->nodeValue;
	}
	return $ical_id;
}


function find_ical_url($username,$password) {

	$ch = curl_init();

	// set URL and other appropriate options
	curl_setopt($ch, CURLOPT_URL, "https://{$username}:{$password}@www.kent.ac.uk/timetabling/icalendar/personal/api.php");
	curl_setopt($ch, CURLOPT_HEADER, 0);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt ( $ch , CURLOPT_TIMEOUT, 5);
	// grab URL
	if ($url = curl_exec($ch)) {
	 	$return = $url;
	}	else {
	 	if ($url = file_get_contents("https://{$username}:{$password}@www.kent.ac.uk/timetabling/icalendar/personal/api.php")) {
	 		$return = $url;
	 	} else {
	 		$return = false;
	 	}
	}

	// close cURL resource, and free up system resources
	curl_close($ch);

	return $return;
}

/**
* find_xml - get the ical xml file from oil/castor
*
* @return string $xml
*/
function find_test_xml() {
	$xml = <<<XML
<?xml version="1.0" encoding="UTF-8"?>
<calendars>
<student><login>zz1</login><ical_id>1</ical_id></student>
<student><login>zz2</login><ical_id>2</ical_id></student>
<student><login>zz3</login><ical_id>3</ical_id></student>
<student><login>dt89</login><ical_id>21146</ical_id></student>
<student><login>lam6</login><ical_id>30173</ical_id></student>
<student><login>ps231</login><ical_id>7828</ical_id></student>
<student><login>cb85</login><ical_id>7831</ical_id></student>
<student><login>dp212</login><ical_id>7832</ical_id></student>
</calendars>
XML;
	return $xml;
}
