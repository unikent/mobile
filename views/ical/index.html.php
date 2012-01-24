Please enter your login details to subscribe to your personalised timetable iCal feed.
<form action="<?php echo option('ssl') ?><?php echo option('domain') ?><?php echo url_for(array('ICalController', 'ical')); ?>" method="post">
	<div data-role="fieldcontain">
		<label for="timetable_login">Username</label>
		<input type="text" id="timetable_login" name="timetable_login" value="" />
	</div>
	<div data-role="fieldcontain">
		<label for="timetable_pass">Password</label>
		<input type="password" id="timetable_pass" name="timetable_pass" value="" />
	</div>
	<input data-inline="true" type="submit" name="submit" value="Submit" />
</form>