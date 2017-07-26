var Hapi = require('hapi');

var server = new Hapi.Server();


server.connection({
	host: 'localhost',
	port: 5000

});

server.route({

	method : 'GET',
	path : '/hello',
	handler : function(request,reply)
	{
		reply('Hello World');
	}
});


server.start(function(){
	console.log('server running at : ',server.info.uri);
});
