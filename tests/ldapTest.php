<?php

/**
*
* @backupGlobals disabled
* @backupStaticAttributes disabled
*/

require_once APP_ROOT."/lib/ldap.php";

class ldapTest extends PHPUnit_Framework_TestCase {
  
  public function testAuthenticateFailNoPassword() {
  	$auth = authenticate('at369', '');
  	$this->assertFalse($auth);
  }
  
  public function testAuthenticateFailWrongPassword() {
  	$auth = authenticate('at369', 'password');
  	$this->assertFalse($auth);
  }
  
  public function testAuthenticatePassRightPassword() {
  	$auth = authenticate('at369', 'Wednesday072011');
  	$this->assertTrue($auth);
  }
  
}


