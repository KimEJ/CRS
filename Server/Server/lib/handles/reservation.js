module.exports = (connection) => {
    let find = (clsNum, passwrd) =>{
      let sql = 'sql'
      let params = [clsNum, passwrd]

      connection.query(sql, params, (error, result) => {
            if (error) {
                throw error;
            }

            callback(result);
        });
    };

    let add = (time, id) =>{
      let sql = 'sql'
      let params = [time, id]

      connection.query(sql, params, (error, result) => {
            if (error) {
                throw error;
            }

            callback(result);
        });
    };
}
