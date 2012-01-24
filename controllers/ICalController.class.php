<?php

require_once APP_ROOT."/models/model.ical.php";

class ICalController extends AppController {

	public function indexAction() {
		$this->set("content", $this->render("ical/index.html.php",false));
	}

	public function icalAction() {
		$login = '';
		if (ctype_alnum($_POST['timetable_login'])) {
			$login = $_POST['timetable_login'];
		}
		$auth = authenticate($login, $_POST['timetable_pass']);
		if ($auth===true || 1) {
			$ical_id = find_ical_id($login);
			if ($ical_id > 0) {
				$this->set("ical_id", $ical_id);
				$this->set("login", $login);
				$this->set("content", $this->render("ical/ical.html.php",false));
			}
			else {
				$this->set("content", $this->render("ical/error.html.php",false));
			}
		}
		elseif ($auth===false) {
			$this->set("content", $this->render("ical/error.html.php",false));
		}
		elseif ($auth==-1) {
			$this->set("content", $this->render("ical/ldap_unavailable.html.php",false));
		}
	}

	public function jsonAction() {

		option('debug',false);
		$result=array();

		$auth = authenticate($_REQUEST['username'], $_REQUEST['password']);
		if ($auth===true || in_array($_REQUEST['username'], array('mb324','cs462','msf4','sjy','bf22','sl244'))) {
			$ical_url = find_ical_url(strtolower($_REQUEST['username']),$_REQUEST['password']);

			if ($ical_url) {
				$result['success']=true;
				$result['ical_url'] = str_replace("http://","webcal://",$ical_url);
			} else {
				$result['success']=false;
				$result['title']="Couldn't locate iCal";
				$result['message']="Sorry we were unable to find your account's timetable feed.";
			}
		} else {
			$result['success']=false;
				$result['title']="Authentication failed";
			$result['message']="Please check your username and password and try again.";
		}

		return json_encode($result);
	}

	public function icalRedirectAction() {
		redirect_to_url(params("url"));
	}


}