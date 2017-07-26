module.exports = (server) => {
    server.plugins['hapi-mysql'].pool.getConnection((err, connection) => {
        let accountAction = require('../actions/reservation')(connection);

        server.route({
            method: 'GET',
            path: '/check',
            handler: reservationAction.checkAll
        });

        server.route({
            method: 'POST',
            path: '/reservation',
            handler: reservationAction.enrollment
        });
    });
}
