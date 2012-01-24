Ext.regModel('Campus', {
	fields: [
		{name: 'id',type: 'int'},
		'name',
		{name: 'lat', type: 'float'},
		{name: 'lng', type: 'float'},
		{name: 'zoom', type: 'int'}
	]
});