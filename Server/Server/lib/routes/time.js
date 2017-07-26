module.exports = (server) => {
    server.plugins['hapi-mysql'].pool.getConnection((err, connection) => {
        let timeAction = require('../actions/time')(connection);

        server.route({
            method: 'GET',
            path: '/time/view',
            handler: timeAction.checkAllTimes
        });

        server.route({
            method: 'POST',
            path: '/time/add',
            handler: timeAction.addTime
        });
    });
}
