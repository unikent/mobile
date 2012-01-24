CREATE TABLE `sessions` (
  `session_id` varchar(50) NOT NULL default '',
  `session_value` text,
  `session_expires` int(11) default NULL,
  PRIMARY KEY  (`session_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;