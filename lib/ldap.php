<?php

if (!class_exists('LdapException')) {
  class LdapException extends Exception {}
}

/**
*
* ldap_authenticate
*
* do a simple ldap connection and bind to authenticate a user
*
* @return true|false
*/
function ldap_authenticate($ldap_username, $ldap_password='') {
  
  require APP_ROOT."/config/ldap.php";
  
  // connect to ldap server
  $ldap_conn = @ldap_connect($host, $port);
  if ($ldap_conn) {
    // bind to ldap server with the given username
    if ($ldap_username != '' && $ldap_password != '' && @ldap_bind($ldap_conn, 'uid='.$ldap_username.','.$ldap_dn, $ldap_password)) {
       return true;
    }
    else {
       return false;
    }
  }
  else {
    throw new LdapException("Could not connect to LDAP server, ".ldap_error($ldap_conn));
  }
  return false;
}
