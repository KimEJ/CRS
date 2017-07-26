module.exports = (server) => {
    server.plugins['hapi-mysql'].pool.getConnection((err, connection) => {
        let accountAction = require('../actions/certification')(connection);

        server.route({
            method: 'POST',
            path: '/certification',
            handler: reservationAction.register
        });
    });
}
