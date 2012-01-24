<?php

class AppBrowserController extends AppController {

	public function indexAction() {
	
		$list = new jQueryMobile\ListView();
		
		$freepcs = new jQueryMobile\ListItem();
		$freepcs->set('text',"Timetable iCal feed");
		$freepcs->set('url',url_for(array('ICal','index')));
		$freepcs->set('transition',"pop");
		$freepcs->set('icon',"false");
		$list->addListItem($freepcs);
		
		$freepcs = new jQueryMobile\ListItem();
		$freepcs->set('text',"PC Availability");
		$freepcs->set('url',url_for(array('FreePC','index')));
		$freepcs->set('transition',"pop");
		$freepcs->set('icon',"false");
		$list->addListItem($freepcs);
		
		$maps = new jQueryMobile\ListItem();
		$maps->set('text',"Maps");
		$maps->set('url',url_for(array('Maps','index')));
		$maps->set('transition',"pop");
		$maps->set('icon',"false");
		$list->addListItem($maps);
		
		$maps = new jQueryMobile\ListItem();
		$maps->set('text',"Connection setup help");
		$maps->set('url',url_for(array('Configurations','index')));
		$maps->set('transition',"pop");
		$maps->set('icon',"false");
		$list->addListItem($maps);
		
		$kent = new jQueryMobile\ListItem();
		$kent->set('text',"Kent web site");
		$kent->set('url',"http://www.kent.ac.uk");
		$kent->set('icon',"external");
		$kent->set('target','_blank');
		$list->addListItem($kent);
		
		$feedback = new jQueryMobile\ListItem();
		$feedback->set('text',"Feedback");
		$feedback->set('url',url_for(array('AppBrowser','feedback')));
		$list->addListItem($feedback);
		
		$list->set('filter',true);
		$bubble = "<script>kent.funcs.bubble();</script>";
		$this->set('content',$list.$bubble);
		
	}
	public function feedbackAction() {
		
		$this->get('header')->set('text','Feedback');
		
		$back = new jQueryMobile\Button();
		$back->set('text',"Back");
		$back->set('icon','arrow-l');
		$back->set('url',url_for(array('AppBrowser','index')));
		$back->set('direction','reverse');
		$this->get('header')->set('left_button',$back);
		
		
		if (isset($_POST['email'])) {
			$locals = array();
			$locals['email'] = htmlentities($_POST['email']);
			$locals['message'] = htmlentities($_POST['message']);
			$body = render('emails/feedback.txt.php',null,$locals);
		  send_mail(option('footprint_email'),'',$body);
		  $this->set("content", "Thank you for your feedback.",false);
		} else {
			$this->set("content", $this->render("app_browser/feedback.html.php",false));
		}
		
		
		
	}
	
	public function feedbackRemoteAction() {
		if (isset($_POST['email']) && isset($_POST['message']) && isset($_POST['info'])) {
			$locals = array();
			$locals['email'] = htmlentities($_POST['email']);
			$locals['message'] = htmlentities($_POST['message']);
			$locals['info'] = htmlentities($_POST['info']);
			$locals['appName'] = htmlentities($_POST['appName']);
			$body = render('emails/feedback.txt.php',null,$locals);
		  send_mail(option('footprint_email'),'',$body);
		  echo 'true';
		} else {
			echo 'false';
		}
		exit;
	}
	
	
}