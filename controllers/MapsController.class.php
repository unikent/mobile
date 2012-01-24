<?php

class MapsController extends AppController {



	public function indexAction() {

		//$this->get('footer')->set('position','inline');

		$map = new jQueryMobile\Map();
		$instructions = <<< JS
			map.setView(new L.LatLng(51.29713479668796, 1.067519187927246),15);
JS;
		$map->set('instructions',$instructions);
		$map->set('locate',true);
		$map->set('bottom','37px');
		$this->set('content',$map);
	}

	public function buildingsAction() {
		option('debug',false);
		$output = <<< JS
{
	"buildings":[
JS;
			$dsn = "mysql:dbname=buildings;host=localhost";
		$pdo = new PDO($dsn, "root", "B0nes!");

			$sql = "SELECT * FROM `building`";
			$statement = $pdo->query($sql);
			if (!$statement) {
				$error = $this->pdo->errorInfo();
				throw new Exception(implode(", ",$error));
			}
			$results = $statement->fetchAll();
			$i=0;
			foreach($results as $result) {
				$i++;
				$output .= "\n		".json_encode((object) $result);
				if ($i != count($results)) {
					$output .= ",";
				}
			}
		$output .= <<< JS

	]
}
JS;
		echo $output;
		exit;
	}

	public function buildingMapAction() {

		$buildings_json = file_get_contents(APP_ROOT."/public/json/buildings.json");
		$buildings = (array) json_decode($buildings_json);

		$building = $buildings['building_'.params('id')];

		$back = new jQueryMobile\Button();
		$back->set('text',"Back");
		$back->set('icon','arrow-l');
		$back->set('url',url_for(array('Maps','buildingsAction')));
		$back->set('direction','reverse');
		$this->get('header')->set('left_button',$back);
		$map = new jQueryMobile\Map();

		$instructions = <<< JS
			map.setView(new L.LatLng({$building->location}),15);
			var marker = new L.Marker(new L.LatLng({$building->location}));

			//marker.setLatLng();
			map.addLayer(marker);
			marker.bindPopup("<h4>{$building->name}</h4>").openPopup();
			$(marker._popup._closeButton).attr('rel','external');

JS;
		$map->set('instructions',$instructions);
		$map->set('locate',true);
		$map->set('bottom','37px');
		$this->set('content',$map);

		$navBarItems = $this->get('footer')->vars;
		$navBarItem = $navBarItems['items'][1];
		$navBarItem->set('active',true);

	}

}