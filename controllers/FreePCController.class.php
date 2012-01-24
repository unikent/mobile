<?php

require_once APP_ROOT."/models/model.availability.php";

class FreePCController extends AppController {


	public function indexAction() {

		$this->get('header')->setText('PC Availability');

		$availability = find_availability();

		$list = new jQueryMobile\ListView();
		$list->set('filter',true);
		$list->addClass('free_pcs');

		$prototype = new jQueryMobile\ListItem();
		$prototype->setView(VIEWS_DIR."/free_pc/list_item.html.php");
		$prototype->set('heading',true);

		// put the building name in the list section header
		foreach ($availability as $building=>$building_data) {
			if ($building != '') {
				$list_section = new jQueryMobile\ListSection();
				$list_section->set('text',"{$building}");
				$list->addListSection($list_section);
				$list_section->set('bubble',$building_data['free']."/".$building_data['total']);
			}

			// put the room label and availability in each list item in the section

			foreach ($building_data['rooms'] as $room=>$value) {
				if ($availability[$building]['rooms'][$room]['total'] > 0) {
					$list_item = clone $prototype;
					$list_item->set('text',trim(preg_replace("/^$building/","",$availability[$building]['rooms'][$room]['label'])).":");
					$list_item->set('free', $availability[$building]['rooms'][$room]['free']);
					$list_item->set('description',"{$availability[$building]['rooms'][$room]['total']} total PCs");
					$list_item->set('url',url_for(array('FreePC','map'),array('id'=>$room)));
					$list_section->addListItem($list_item);
				}
			}

		}

		$this->set('content',$list);

	}

	public function jsonAction() {
		option('debug',false);
		switch(params('campus')) {
			case 'canterbury':
				$campus = 1;
				break;
			case 'medway':
				$campus = 58;
				break;
			default:
				$campus = false;
		}
		// echo '{"pcRooms":[{"id":"2","name":"Library Level 2 Extension","group":"Library","total":"8","free":"7","lat":null,"lng":null},{"id":"3","name":"Library Level 3 Extension","group":"Library","total":"12","free":"10","lat":null,"lng":null},{"id":"4","name":"Library Level 4 Extension","group":"Library","total":"12","free":"11","lat":null,"lng":null},{"id":"6","name":"Eliot College","group":"Other","total":8,"free":8,"lat":null,"lng":null},{"id":"7","name":"Rutherford College","group":"Other","total":8,"free":6,"lat":null,"lng":null},{"id":"8","name":"Keynes College","group":"Other","total":"8","free":"8","lat":null,"lng":null},{"id":"11","name":"Cornwallis","group":"Other","total":4,"free":4,"lat":null,"lng":null},{"id":"17","name":"Darwin College","group":"Other","total":"4","free":"4","lat":null,"lng":null},{"id":"21","name":"Library Level 2 (Group Study Area)","group":"Library","total":"3","free":"3","lat":null,"lng":null},{"id":"23","name":"Library Level 3 (TR301)","group":"Library","total":"2","free":"2","lat":null,"lng":null}]}';exit;
		$result = find_pc_avaliability_for_json($campus);

		$raw = file_get_contents("http://www.kent.ac.uk/infoscreen/opening/opening_generator.php");
		$opens = preg_match("/\<open\>(.+)\<\/open\>/",$raw,$matches);
		$opens = $matches[1];
		$closes = preg_match("/\<close\>(.+)\<\/close\>/",$raw,$matches);
		$closes = $matches[1];
		$result["pcRooms"][] = array('group'=>"Library",'closes'=>$closes,'opens'=>$opens);

		return json_encode($result);

	}

	public function mapAction() {

		$this->get('header')->setText('PC Room Location');

		$back = new jQueryMobile\Button();
		$back->set('text',"Back");
		$back->set('icon','arrow-l');
		$back->set('url',url_for(array('FreePC','index')));
		$back->set('direction','reverse');
		$this->get('header')->set('left_button',$back);

		$locations = $this->get_room_locations();

		$map = new jQueryMobile\Map();
		if (!isset($locations[params('id')]))
			throw new Halt("Computer room location could not be found",404);
		$lat = $locations[params('id')][0];
		$lng = $locations[params('id')][1];
		$room_availability = find_room_availability(params('id'));
		$instructions = <<< JS
			map.setView(new L.LatLng({$lat},{$lng}),16);
			var marker = new L.Marker(new L.LatLng({$lat},{$lng}));

			//marker.setLatLng();
			map.addLayer(marker);
			marker.bindPopup("<h4>{$room_availability->cluster_name}</h4><p>{$room_availability->free} free PCs of {$room_availability->total}</p>").openPopup();
			$(marker._popup._closeButton).attr('rel','external');

JS;
		$map->set('instructions',$instructions);
		$map->set('locate',true);
		$this->set('content',$map);
		$this->set('bottom','0px');

	}

	public function get_room_locations() {
		return $pc_room_locations = array(
			'CORNWALLIS_1'=>array(51.29889911003054, 1.0712635517120361),
			'CORNWALLIS_2'=>array(51.2987179859286, 1.0705554485321045),
			'CORNWALLIS_3'=>array(51.298590527798815, 1.0701477527618408),
			'CORNWALLIS_4'=>array(51.29873140255325, 1.0699331760406494),
			'CORNWALLIS_5'=>array(51.2987179859286, 1.0704803466796875),
			'DARWIN_1'=>array(51.29885886029188, 1.0730177164077759),
			'DARWIN_2'=>array(51.29885886029188, 1.0728836059570312),
			'RUTHERFORD_1'=>array(51.29722536195161, 1.071365475654602),
			'RUTHERFORD_2'=>array(51.29703752268725, 1.0709792375564575),
			'ELIOT_1'=>array(51.29611173222705, 1.0691231489181519),
			'ELIOT_2'=>array(51.295940660207066, 1.0690051317214966),
			'KEYNES_1'=>array(51.29530332746252, 1.065550446510315),
			'KEYNES_2'=>array(51.295222821644344, 1.065073013305664),
			'RDBUILDING'=>array(51.296752408049485, 1.067798137664795),
			'LEVEL_2_1'=>array(51.29785595957493, 1.0696488618850708),
			'LEVEL_2_2'=>array(51.2976245178364, 1.0691606998443604),
			'LEVEL_3_1'=>array(51.2976245178364, 1.0691606998443604),
			'LEVEL_4_1'=>array(51.29785595957493, 1.0696488618850708),
			'LEVEL_4_2'=>array(51.2976245178364, 1.0691606998443604),
		);
	}

}