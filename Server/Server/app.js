const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({
    host: '192.168.43.200',
    port: 8080
});

server.register({
    register: require('hapi-mysql'),
    options: {
        host: 'localhost',
        database: 'CRS',
        user: 'root',    // set your database username
        password: 'Djwlsznzld5090'    // set your database password
    }

}, (error) => {
    if (error) {
        throw error;
    }
});

let timeRoute = require('./lib/routes/time');
timeRoute(server);

let confirmRoute = require('./lib/routes/confirm');
confirmRoute(server);

let accountRoute = require('./lib/routes/account');
accountRoute(server);


server.start(() => {
    console.log(`server was started at: ${server.info.uri}`);
});
