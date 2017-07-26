module.exports = (connection) => {
    let memberHandle = require('../handles/reservation')(connection);


    let checkAll = (request, reply) => {
      try {
          let account = request.yar.get('account');

          if (account) {
              let { email } = account;

              noteHandle.findAll(email, (result) => {
                  let notes = result.map((item) => {
                      let { id, title } = item;
                      return { id, title };
                  });

                  reply(notes).code(200);
              });
          } else {
              reply(null).code(401);
          }
      } catch (e) {
          reply(null).code(500);
      }
    };
