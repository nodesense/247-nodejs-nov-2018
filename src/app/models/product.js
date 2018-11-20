// model/product.js

const uuidv1 = require('uuid/v1');
const cassandraClient = require('../config/cassandra');


module.exports = {
    getAllCB: function(cb) {

        cassandraClient
            .execute('SELECT * from workshop247.notexists', 
                    [], // parameter
        
                    function callback(err, result) {
                        if (cb && err) {
                            return cb(err, null);
                        }

                        if (cb) {
                            // result.rows is ersult
                            // is a list of products array
                            cb(null, result.rows)
                        }
                         //result.rows 
                    }
                )
    }

}