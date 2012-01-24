app.subapps.Social.views.Viewport = Ext.extend(Ext.Panel, {
	id: 'social_viewport',
	fullscreen: true,
	layout: 'card',
	bodyPadding: "0px",
	scroll: 'auto',
	dockedItems: [{
		id: 'social_toolbar',
		app: 'social',
		xtype: 'subapptoolbar',
		title: 'Connect'
	}],
	html: "<p>The University is using a range of different social services.</p> \
	<a href='http://www.facebook.com/UniversityofKent' class='social_links facebook'><div class='icon'></div>Facebook</a> \
	<a href='http://twitter.com/UniKent' class='social_links twitter'><div class='icon'></div>Twitter</a> \
	<a href='http://blogs.kent.ac.uk' class='social_links blogs'><div class='icon'></div>Kent Blogs</a> \
	<a href='http://www.youtube.com/universityofkent' class='social_links youtube'><div class='icon'></div>YouTube Channel</a> \
	<a href='http://m.flickr.com/photos/universityofkent/' class='social_links flickr'><div class='icon'></div>Flickr Photostream</a> \
	<a href='http://www.linkedin.com/company/11866?trk=saber_s000001e_1000' class='social_links linkedin'><div class='icon'></div>Linkedin</a> \
	"
	
});

