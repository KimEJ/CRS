module.exports = (connection) => {
    let timeHandle = require('../handles/time')(connection);

    let checkAllTimes = (request, reply) => {
        try {

                noteHandle.findAll((result) => {
                    let time = result.map((item) => {
                        let { start_time, stop_time, location, student_number } = item;
                        return { start_time, stop_time, location, student_number };
                    });
                    reply(notes).code(200);
                });
        } catch (e) {
            reply(null).code(500);
        }
    };

    let addTime = (request, reply) => {
        try {
            let { start_time, stop_time, location, student_number } = request.payload;

            confirmHandle.find(start_time, stop_time, location, (result) => {
                if (result.length > 0) {
                    reply(null).code(403);
                } else {
                    confirmHandle.add(start_time, stop_time, location, student_number, (result) => {
                        reply(null).code(200);
                    });
                }
            });
        } catch (e) {
            console.error(e);
            reply(null).code(500);
        }
    };

    return {
        checkAllTimes, addTime
    }
};
