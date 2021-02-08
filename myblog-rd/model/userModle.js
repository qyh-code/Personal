const db = require('../model/db')

module.exports = {

    saveUser(user) {
        return db.query("insert into t_user set ?", user);
    },
    getByNameAndPwd(username, password) {
        return db.query('select * from t_user where username=? and password=?', [username, password]);
    }
}