<li data-icon='<?php if(isset($icon)) echo $icon; ?>'>
	<?php if ($url): ?><a href="<?php echo $url; ?>" data-transition="<?php if (isset($transition)) echo $transition; ?>" data-direction="<?php if (isset($direction)) echo $direction; ?>" target="<?php if (isset($target)) echo $target; ?>"><?php endif; ?>
		<p class="ui-li-freepcs"><?php echo $free; ?></p>
		<?php if (isset($heading) && $heading): ?><h3 class="ui-li-heading"><?php endif; ?>
			<?php echo $text; ?>
		<?php if (isset($heading) && $heading): ?></h3><?php endif; ?>
		<?php if (isset($description)): ?><p class="ui-li-desc"><?php echo $description; ?></p><?php endif; ?>
	<?php if ($url): ?></a><?php endif; ?>
	<?php if ($hidden): ?><span style="display:none"><?php echo $hidden; ?></span><?php endif; ?>
</li>