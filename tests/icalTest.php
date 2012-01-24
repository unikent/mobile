<?php

/**
*
* @backupGlobals disabled
* @backupStaticAttributes disabled
*/

require_once APP_ROOT."/models/model.ical.php";

class icalTest extends PHPUnit_Framework_TestCase {
  
  /**
  * A given username should return the correct id
  */
  public function testCorrectIdForUsername1() {
  	$ical_id = find_ical_id('zz1');
  	$this->assertEquals($ical_id, 1, "A given username should return the correct id");
  }
  public function testCorrectIdForUsername2() {
  	$ical_id = find_ical_id('zz2');
    $this->assertEquals($ical_id, 2, "A given username should return the correct id");
  }
  public function testCorrectIdForUsername3() {
  	$ical_id = find_ical_id('zz3');
    $this->assertEquals($ical_id, 3, "A given username should return the correct id");
  }
  public function testZeroIdForInvalidUsername() {
  	$ical_id = find_ical_id('zz4');
    $this->assertEquals($ical_id, 0, "A given username should return the correct id");
  }
  public function testZeroIdForBlankUsername() {
  	$ical_id = find_ical_id('');
    $this->assertEquals($ical_id, 0, "A given username should return the correct id");
  }
}
