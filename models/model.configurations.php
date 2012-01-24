<?php

function find_rss($url='') {
	$xml = '';
	if (option('fake_configuration_rss')) {
		$xml_string = test_rss();
		$xml = simplexml_load_string($xml_string);
	}
	else {
		$xml = simplexml_load_file($url);
	}
	return $xml;
}

function test_rss() {

	$xml = <<<XML
<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
	xmlns:content="http://purl.org/rss/1.0/modules/content/"
	xmlns:wfw="http://wellformedweb.org/CommentAPI/"
	xmlns:dc="http://purl.org/dc/elements/1.1/"
	xmlns:atom="http://www.w3.org/2005/Atom"
	xmlns:sy="http://purl.org/rss/1.0/modules/syndication/"
	xmlns:slash="http://purl.org/rss/1.0/modules/slash/"
	> 
 
<channel> 
	<title>Mobile Devices &#187; Android</title> 
	<atom:link href="http://blogs.kent.ac.uk/mobiledevices/category/android/feed/" rel="self" type="application/rss+xml" /> 
	<link>http://blogs.kent.ac.uk/mobiledevices</link> 
	<description></description> 
	<lastBuildDate>Tue, 05 Jul 2011 13:32:41 +0000</lastBuildDate> 
	<language>en</language> 
	<sy:updatePeriod>hourly</sy:updatePeriod> 
	<sy:updateFrequency>1</sy:updateFrequency> 
	<generator>http://wordpress.org/?v=3.2</generator> 
		<item> 
		<title>Android 2.2 live@edu</title> 
		<link>http://blogs.kent.ac.uk/mobiledevices/2011/06/09/android-2-2-liveedu/</link> 
		<comments>http://blogs.kent.ac.uk/mobiledevices/2011/06/09/android-2-2-liveedu/#comments</comments> 
		<pubDate>Thu, 09 Jun 2011 13:13:05 +0000</pubDate> 
		<dc:creator>Suzanne</dc:creator> 
				<category><![CDATA[Android]]></category> 
		<category><![CDATA[Live@edu]]></category> 
		<category><![CDATA[live@edu]]></category> 
		<category><![CDATA[student email]]></category> 
 
		<guid isPermaLink="false">http://blogs.kent.ac.uk/mobiledevices/?p=101</guid> 
		<description><![CDATA[Email Add Account enter kent email address enter kent password manual setup Exchange account username@kent.ac.uk exchange server is &#8211; podxxxx.outlook.com (sign into live@edu click on Help/About to confirm your server) use SSL Accept all SSLCertificates Next Ok to Remote Security Administration warning Edit the Account Options if you wish Next Name account Live@edu Done Activate [...]]]></description> 
			<content:encoded><![CDATA[<p><strong>Email<br /> 
Add Account</strong><br /> 
enter <strong>kent email </strong>address<br /> 
enter <strong>kent password </strong><br /> 
<strong>manual </strong>setup<br /> 
<strong>Exchange </strong>account<br /> 
<a href="mailto:username@kent.ac.uk">username@kent.ac.uk</a><br /> 
exchange server is &#8211; <strong>podxxxx.outlook.com </strong>(sign into live@edu click on Help/About to confirm your server)<br /> 
use <strong>SSL </strong><br /> 
<strong>Accept all SSL</strong>Certificates<br /> 
<strong>Next </strong><br /> 
Ok to Remote Security Administration warning<br /> 
Edit the Account Options if you wish<br /> 
<strong>Next </strong><br /> 
Name account Live@edu<br /> 
<strong>Done </strong><br /> 
Activate Device Administrator (makes your email account more secure in the event your device is stolen)</p> 
<p align="right"><a href="http://blogs.kent.ac.uk/mobiledevices/wp-content/plugins/report-concern/report.php?p=101&amp;_wpnonce=86182b0fd8">Report post</a></p>]]></content:encoded> 
			<wfw:commentRss>http://blogs.kent.ac.uk/mobiledevices/2011/06/09/android-2-2-liveedu/feed/</wfw:commentRss> 
		<slash:comments>0</slash:comments> 
		</item> 
		<item> 
		<title>Android 2.2 ConnectMail</title> 
		<link>http://blogs.kent.ac.uk/mobiledevices/2011/06/09/android-2-2-connectmail/</link> 
		<comments>http://blogs.kent.ac.uk/mobiledevices/2011/06/09/android-2-2-connectmail/#comments</comments> 
		<pubDate>Thu, 09 Jun 2011 13:10:28 +0000</pubDate> 
		<dc:creator>Suzanne</dc:creator> 
				<category><![CDATA[Android]]></category> 
		<category><![CDATA[ConnectMail]]></category> 
		<category><![CDATA[connectmail]]></category> 
		<category><![CDATA[staff email]]></category> 
 
		<guid isPermaLink="false">http://blogs.kent.ac.uk/mobiledevices/?p=99</guid> 
		<description><![CDATA[Email enter kent email address enter kent password manual setup Exchange account ukc\username exchange server is &#8211; sync.connect.kent.ac.uk use SSL Accept all SSL Certificates Next Ok to Remote Security Administration warning Edit the Account Options if you wish Next Name account ConnectMail Done Activate Device Administrator (makes your email account more secure in the event [...]]]></description> 
			<content:encoded><![CDATA[<p><strong>Email </strong><br /> 
enter <strong>kent email </strong>address<br /> 
enter <strong>kent password </strong><br /> 
<strong>manual setup</strong><br /> 
<strong>Exchange </strong>account<br /> 
<strong>ukc\username</strong><br /> 
exchange server is &#8211; <strong>sync.connect.kent.ac.uk<br /> 
</strong>use <strong>SSL </strong><br /> 
<strong>Accept all SSL </strong>Certificates<br /> 
<strong>Next </strong><br /> 
<strong>Ok </strong>to<br /> 
Remote Security Administration warning<br /> 
Edit the Account Options if you wish<br /> 
<strong>Next </strong><br /> 
Name account ConnectMail<br /> 
Done<br /> 
Activate Device Administrator (makes your email account more secure in the<br /> 
event your device is stolen)</p> 
<p align="right"><a href="http://blogs.kent.ac.uk/mobiledevices/wp-content/plugins/report-concern/report.php?p=99&amp;_wpnonce=c31a2fd533">Report post</a></p>]]></content:encoded> 
			<wfw:commentRss>http://blogs.kent.ac.uk/mobiledevices/2011/06/09/android-2-2-connectmail/feed/</wfw:commentRss> 
		<slash:comments>0</slash:comments> 
		</item> 
		<item> 
		<title>Android 2.2 Wifi</title> 
		<link>http://blogs.kent.ac.uk/mobiledevices/2011/06/08/android-2-2/</link> 
		<comments>http://blogs.kent.ac.uk/mobiledevices/2011/06/08/android-2-2/#comments</comments> 
		<pubDate>Wed, 08 Jun 2011 19:50:43 +0000</pubDate> 
		<dc:creator>Suzanne</dc:creator> 
				<category><![CDATA[Android]]></category> 
		<category><![CDATA[Wifi (eduroam)]]></category> 
		<category><![CDATA[eduroam]]></category> 
		<category><![CDATA[wifi]]></category> 
 
		<guid isPermaLink="false">http://blogs.kent.ac.uk/mobiledevices/?p=25</guid> 
		<description><![CDATA[From the home screen on your device go to .. Applications Settings Wireless and Network Wi-Fi Settings Turn on Wi-Fi Scan for networks eduroam eap method &#8211; Peap Phase2 authentication &#8211; MSChapV2 CA Certificate &#8211; Unspecified User Certificate &#8211; Unspecified Identity - yourkentusername@kent.ac.uk Anonymous idenity &#8211; (leave blank) Password &#8211; enter your kent password Connect Report [...]]]></description> 
			<content:encoded><![CDATA[<p>From the home screen on your device go to ..<br /> 
<strong>Applications</strong><br /> 
<strong>Settings<br /> 
Wireless and Network</strong><br /> 
<strong>Wi-Fi Settings</strong><br /> 
<strong>Turn on Wi-Fi</strong><br /> 
<strong>Scan for networks</strong><br /> 
<strong>eduroam</strong><br /> 
eap method &#8211; <strong>Peap</strong><br /> 
Phase2 authentication &#8211; <strong>MSChapV2</strong><br /> 
CA Certificate &#8211; <strong>Unspecified</strong><br /> 
User Certificate &#8211; <strong>Unspecified</strong><br /> 
Identity - <a href="mailto:yourkentusername@kent.ac.uk"><strong>yourkentusername@kent.ac.uk</strong><br /> 
</a>Anonymous idenity &#8211; <strong>(leave blank)</strong><br /> 
Password &#8211; enter <strong>your kent password</strong><br /> 
<strong>Connect</strong></p> 
<p align="right"><a href="http://blogs.kent.ac.uk/mobiledevices/wp-content/plugins/report-concern/report.php?p=25&amp;_wpnonce=4f017f7f4c">Report post</a></p>]]></content:encoded> 
			<wfw:commentRss>http://blogs.kent.ac.uk/mobiledevices/2011/06/08/android-2-2/feed/</wfw:commentRss> 
		<slash:comments>2</slash:comments> 
		</item> 
	</channel> 
</rss> 
XML;
	return $xml;
}