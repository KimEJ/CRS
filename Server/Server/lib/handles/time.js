module.exports = (connection) => {

    let findAll = (callback) =>{
      let sql = 'SELECT * FROM reservation_tb';

      connection.query(sql, (error, result) => {
            if (error) {
                throw error;
            }

            callback(result);
        });
    };

    let add = (sstart_time, stop_time, location, student_number, callback) =>{
      let sql =
      'INSERT INTO reservation_tb (start_time, stop_time, location, student_number) VALUES (?, ?, ?, ?)';
      let params = [start_time, stop_time, location, student_number]

      connection.query(sql, params, (error, result) => {
            if (error) {
                throw error;
            }

            callback(result);
        });
    };

    let find = (sstart_time, stop_time, location, callback) => {
        let sql = 'SELECT * FROM reservation_tb WHERE start_time=? && stop_time=? && location=?';
        let params = (start_time, stop_time, location, callback);

        connection.query(sql, params, (error, result) => {
            if (error) {
                throw error;
            }

            callback(result);
        });
    };
}
