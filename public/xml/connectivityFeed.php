<?php
header("Content-Type:text/xml");

//$ctx = stream_context_create(array('http' => array('timeout' => 5))); // set a timeout to 5 secs

// create a new cURL resource
$ch = curl_init();

// set URL and other appropriate options
curl_setopt($ch, CURLOPT_URL, $_GET['url']);
curl_setopt($ch, CURLOPT_HEADER, 0);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt ( $ch , CURLOPT_TIMEOUT, 5);
// grab URL
if ($xml = curl_exec($ch)) {
	echo $xml;
}

else {
	echo '<?xml version="1.0" encoding="UTF-8"?>'."\n";
	echo <<<XML
	<rss>
		<channel>
		</channel>
	</rss>
XML;
}


// close cURL resource, and free up system resources
curl_close($ch);