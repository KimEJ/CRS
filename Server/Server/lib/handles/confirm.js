module.exports = function(connection) {
    let member_dbFind = (card_number, callback) => {
        let sql = 'SELECT student_number, stop_time FROM member_tb WHERE card_number=?';
        let params = [ card_number ];

        connection.query(sql, params, (err, result) => {
            if (err) {
                throw err;
            }

            callback(result);
        });
    };

    let reservation_dbFind = (student_number, callback) => {
        let sql = 'SELECT start_time FROM reservation_tb WHERE student_number=?, location';
        let params = [ student_number, location ];

        connection.query(sql, params, (err, result) => {
            if (err) {
                throw err;
            }

            callback(result);
        });
    };

    return {
        member_dbFind, reservation_dbFind
    };
}
