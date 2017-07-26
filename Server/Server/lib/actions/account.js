module.exports = (connection) => {
    let memberHandle = require('../handles/member')(connection);

    let signIn = (request, reply) => {
        try {
            if (!request.yar.get('user')) {
                let { student_number, password } = request.payload;

                memberHandle.find(student_number, password, (result) => {
                    if (result.length == 1) {
                        request.yar.set('user', { student_number, password });
                        reply(null).code(200);
                    } else {
                        reply(null).code(404);
                    }
                });
            } else {
                reply(null).code(403);
            }
        } catch (e) {
            console.error(e);
            reply(null).code(500);
        }
    };

    let signOut = (request, reply) => {
        try {
            let account = request.yar.get('user');

            if (account) {
                request.yar.reset();
                reply(null).code(200);
            } else {
                reply(null).code(401);
            }
        } catch (e) {
            console.error(e);
            reply(null).code(500);
        }
    };


    return {
        signIn, signOut
    };
};
