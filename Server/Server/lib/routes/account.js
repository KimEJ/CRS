module.exports = (server) => {
    server.plugins['hapi-mysql'].pool.getConnection((err, connection) => {
        let accountAction = require('../actions/account')(connection);

        server.route({
            method: 'POST',
            path: '/accounts/signin',
            handler: accountAction.signIn
        });

        server.route({
            method: 'DELETE',
            path: '/accounts/signout',
            handler: accountAction.signOut
        })
    });
}
