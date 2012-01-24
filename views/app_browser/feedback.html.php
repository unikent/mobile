<p>The Kent Mobile web app is under active development and we're keen to get your feedback to help steer its direction in the future.</p>
<form action="<?php echo option('ssl') ?><?php echo option('domain') ?><?php echo url_for(array('AppBrowser', 'feedback')); ?>" method="post">
	<div data-role="fieldcontain">
		<label for="email">Email</label>
		<input type="email" id="email" name="email" value="" placeholder="Your email address"/>
	</div>
	<div data-role="fieldcontain">
		<label for="message">Message</label>
		<textarea type="password" id="message" name="message" value="" placeholder="Your message"></textarea>
	</div>
	<input data-inline="true" type="submit" name="submit" value="Submit" />
</form>