<?php

/**
* find_total_pcs - db results for total pcs in a cluster
*
* @return array $return
*/
function find_total_pcs() {
	$sql = "SELECT clusterid, count(*) as total, clusters.name as cluster_name, locationnames.name as building_name FROM data LEFT JOIN clusters ON clusters.id=data.clusterid LEFT JOIN locationnames ON locationnames.locationid=clusters.locationid WHERE enabled > 0 GROUP BY clusterid";
	$return = find_objects_by_sql($sql);
	return $return;
}

/**
* find_free_pcs - db results for free pcs in a cluster
* 'free' counts as when a user isn't logged in, or when it's been asleep for more than $sleep_time (5 mins by default)
*
* @params int $sleep_time
* @return array $return
*/
function find_free_pcs($sleep_time=300) {
	$date = date('Y-m-d H:i:s' , time() - $sleep_time);
	$sql = "SELECT clusterid, count(*) as free, clusters.name as cluster_name, locationnames.name as building_name FROM data LEFT JOIN clusters ON clusters.id=data.clusterid LEFT JOIN locationnames ON locationnames.locationid=clusters.locationid WHERE enabled > 0 AND (users = 0 OR date < :date) GROUP BY clusterid";
	$return = find_objects_by_sql($sql, array(":date" => $date));
	return $return;
}

/**
* find_availability - builds up an array of total pcs and free pcs for buildings and rooms
*
*/
function find_availability() {

	$availability = array();

	// get an array of total/free levels for each cluster id
	$total_pcs_array = find_total_pcs();
	$free_pcs_array = find_free_pcs();

	// room_cluster_map is a map of room names to the cluster ids used in the db. These are kept in config/options.php
	$room_cluster_map = option('room_cluster_map');

	// build up the availability array
	foreach ($room_cluster_map as $key => $cluster_id) {

		$room_total_count = 0;
		$room_free_count = 0;
		$room_label = '';
		$building_name = '';

		// need to loop through total and free arrays to look for the clusterid, because the clusterid isn't a key in that array
		foreach ($total_pcs_array as $obj) {
			if ($obj->clusterid == $cluster_id) {
				$room_total_count = $obj->total;
				// store the room label (the full name of the room)
				$room_label = $obj->cluster_name;
				// store the building label (the full name of the building)
				$building_name = $obj->building_name;
			}
		}
		foreach ($free_pcs_array as $obj) {
			if ($obj->clusterid == $cluster_id) {
				$room_free_count = $obj->free;
			}
		}

		// keep a running total of total and free PCs in each building
		$availability[$building_name]['free'] += $room_free_count;
		$availability[$building_name]['total'] += $room_total_count;
		// keep availability for each room in a building
		$availability[$building_name]['rooms'][$key] = array('total' => $room_total_count, 'free' => $room_free_count, 'label' => $room_label);
	}
	return $availability;
}

function find_room_availability($id,$sleep_time=300) {
	$room_cluster_map = option('room_cluster_map');
	$date = date('Y-m-d H:i:s' , time() - $sleep_time);
	$sql = "SELECT clusterid, count(*) as total, SUM((enabled > 0 AND (users = 0 OR date < :date))) as free, clusters.name as cluster_name, locationnames.name as building_name FROM data LEFT JOIN clusters ON clusters.id=data.clusterid LEFT JOIN locationnames ON locationnames.locationid=clusters.locationid WHERE clusterid = :id GROUP BY clusterid";
	$return = find_object_by_sql($sql, array(":date" => $date,':id'=>$room_cluster_map[$id]));
	return $return;
}

function find_pc_avaliability_for_json($campus='',$sleep_time=300) {
	$date = date('Y-m-d H:i:s' , time() + $sleep_time);
	if (!empty($campus)) {
		$campus = "AND `locationnames`.`campus` = $campus";
	}
	$rooms = find_objects_by_sql("SELECT `clusters`.id, `clusters`.`name`, `locationnames`.`name` AS `group`, SUM(`data`.enabled) AS total, SUM(`data`.`users` < 1 OR `data`.date > :date) AS free, `clusters`.latitude AS lat, `clusters`.longitude AS lng FROM `data` JOIN `clusters` ON `data`.clusterid = `clusters`.id JOIN `locationnames` ON `locationnames`.locationid = `clusters`.`locationid` WHERE `clusters`.`display` {$campus} GROUP BY `clusters`.id HAVING SUM(`data`.enabled) > 0",array(":date" => $date));

	return array('pcRooms'=>$rooms);
}
