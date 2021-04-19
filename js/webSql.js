

var db = openDatabase('eventi', '1.0', 'eventi', 2 * 1024 * 1024);


db.transaction(function (tx) {
    tx.executeSql("CREATE TABLE IF NOT EXISTS events (id int(11) NOT NULL AUTOINCREMENT, titoloEvento varchar(255) NOT NULL, dataEvento date NOT NULL)");
});