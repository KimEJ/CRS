module.exports = (connection) => {

    let find = (studentnumber, password, callback) => {
        let sql = 'SELECT * FROM member_tb WHERE student_number=? && password=?';
        let params = [student_number, password];

        connection.query(sql, params, (error, result) => {
            if (error) {
                throw error;
            }

            callback(result);
        });
    };

    return {
        find
    };
}
