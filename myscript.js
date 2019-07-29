    /*var oracledb = require('oracledb');
    let connection;
    var oracledb = require('oracledb');

    console.log("Gian");
    ConnectString("A","B");*/

function ConnectString(username,password){
    console.log("HOLIS"+username+password);

    var mypw = "Toucanair2019."  // set mypw to the hr schema password

    async function run() {
    try {
        connection = await oracledb.getConnection(  {
        user          : "SYSTEM",
        password      : mypw,
        connectString : "localhost/TOUCANAIR"
        });
 
        let result = await connection.execute(
            'SELECT * FROM TOUCANAIR."TEST"'/*
        `SELECT manager_id, department_id, department_name
        FROM departments
        WHERE manager_id = :id`,
        [103],  // bind value for :id*/
        );
        console.log(result.rows);

    } catch (err) {
        console.error(err);
    } finally {
        if (connection) {
        try {
            await connection.close();
        } catch (err) {
            console.error(err);
        }
        }
    }
    }

    run();
}

