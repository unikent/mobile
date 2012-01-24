<?php

/**
*
* @backupGlobals disabled
* @backupStaticAttributes disabled
*/

//require_once APP_ROOT."/models/model.availability.php";

class availabilityTest extends PHPUnit_Framework_TestCase {
  
  /**
  * Should return username for valid student number.
  */
  public function testTotalPCS() {
    
    $total_pcs_array = find_total_pcs();
    //echo $total_pcs_array[0]->clusterid;exit;
    
    //$this->assertEquals('at369', $ldap_login,"ldap_get_login Should return username for valid student number.");
    
  }
  
}
