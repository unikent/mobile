app.regSubApp({
	name: 'feedbackAlias',
	title: 'Feedback',
	iconTitle: 'Feedback',
	listeners: {
		launch: function () {
		},
		activate: function () {
			Ext.dispatch({
				controller: 'help',
				action: 'feedback',
				historyUrl: '/help/feedback'
			});
		}
	}
});

