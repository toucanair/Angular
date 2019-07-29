
function ConnectString(username,password){
    var oracledb = require('oracledb');

    var mypw = "Toucanair2019."  // set mypw to the hr schema password

    async function run() {

    let connection;

    try {
        connection = await oracledb.getConnection(  {
        user          : "SYSTEM",
        password      : mypw,
        connectString : "localhost/TOUCANAIR"
        });
        alert("hola");
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