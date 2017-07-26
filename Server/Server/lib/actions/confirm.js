module.exports = (connection) => {
    let confirmHandle = require('../handles/confirm')(connection);

    let check = (request, reply) => {
        try {
            let { card_number, location } = request.payload;

            confirmHandle.member_dbFind(card_number, (result) => {
                let time = result.map((item) => {
                    let { student_number, stop_time } = item

                    confirmHandle.reservation_dbFind(student_number, location, (result) => {
                        if (result.length == 1) {
                            let time2 = result.map((item2) => {
                                let { start_time } = item2
                                let d = new Date();
                                if( start_time >= d ){
                                  reply(stop_time).code(200);
                                }
                            });
                        }
                        else {
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
