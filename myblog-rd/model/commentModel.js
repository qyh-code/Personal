const db = require("../model/db");

module.exports = {
    saveComm(commenttext, blogId, userId) {
        console.log(userId)
        return db.query("insert into t_comment set content=?,blog_id=?,user_id=?", [commenttext, blogId, userId]);

    }
}