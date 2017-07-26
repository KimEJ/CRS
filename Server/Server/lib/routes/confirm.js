module.exports = (server) => {
    server.plugins['hapi-mysql'].pool.getConnection((err, connection) => {
        let confirmAction = require('../actions/confirm')(connection);

        server.route({
            method: 'GET',
            path: '/confirm/{card_number}',
            handler: confirmAction.check
        });
    });
}
