Ext.regModel('PcRoom', {
	fields: [
		{name: 'id', type: 'int'},
		'name',
		'group',
		{name: 'lat', type: 'float'},
		{name: 'lng', type: 'float'},
		{name: 'total', type: 'int'},
		{name: 'free', type: 'int'},
	]
});