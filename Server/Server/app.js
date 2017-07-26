const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 5000
});

server.register({
    register: require('hapi-mysql'),
    options: {
        host: 'localhost',
        database: 'CRS',
        user: 'your-database-username',    // set your database username
        password: 'your-database-password'    // set your database password
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
