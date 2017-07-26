module.exports = function(connection) {
    let member_dbFind = (card_number, callback) => {
        let sql = 'SELECT student_number FROM member_db WHERE card_number=?';
        let params = [ card_number ];

        connection.query(sql, params, (err, result) => {
            if (err) {
                throw err;
            }

            callback(result);
        });
    };

    let reservation_dbFind = (card_number, callback) => {
        let sql = 'SELECT * FROM reservation_db WHERE student_number=?';
        let params = [ student_number ];

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
