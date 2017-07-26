module.exports = (connection) => {
    let confirmHandle = require('../handles/confirm')(connection);

    let check = (request, reply) => {
        try {
            let { card_number } = request.payload;

            confirmHandle.member_dbFind(card_number, (result) => {
                let time = result.map((item) => {
                    let { student_number } = item

                    confirmHandle.member_dbFind(student_number, (result) => {
                        if (result.length == 1) {
                            reply(null).code(200);
                        } else {
                            reply(null).code(404);
                        }
                    });
            });
          });
        } catch (e) {
          reply(null).code(500);
        }
    };

    return {
        check
    };
}
