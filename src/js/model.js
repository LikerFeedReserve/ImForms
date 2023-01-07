const { db } = require("./db");

class Model {
  static dbHandler = (sql) => {
    return new Promise((resolve) => {
      db.connect(function(err) {
        if (err) throw err;
        return db.query(sql, (err, result) => {
          if (err) throw err;
          resolve(result);
        });
      });
    });
  };

  static getQuestionById = ({ id }) => {
    const sql = `SELECT * FROM questions WHERE id = ${id}`;
    return this.dbHandler(sql);
  };

  static getQuestions = () => {
    const sql = `SELECT * from questions`;
    return this.dbHandler(sql);
  };

  static postQuestion = ({ id, name, description, title, help_text, required, quizes_id }) => {
    const sql = `INSERT INTO questions (id, name, description, title, help_text, required, quizes_id) VALUES (${id}, \"${name}\", \"${description}\", \"${title}\", \"${help_text}\", \"${required}\", ${quizes_id})`;
    return this.dbHandler(sql);
  };

  static updateQuestionById = ({ id }, { name, description, title, help_text, required, quizes_id }) => {
    const sql = `UPDATE questions SET name = \"${name}\", description = \"${description}\", title = \"${title}\", help_text = \"${help_text}\", required = \"${required}\", quizes_id = \"${quizes_id}\" WHERE id = ${id} `;
    return this.dbHandler(sql);
  };
  
  static deleteQuestionById = ({ id }) => {
    const sql = `DELETE FROM questions WHERE id = ${id}`;
    return this.dbHandler(sql).then(
      () => `Question with id: ${id} was deleted!`
    );
  };
}

module.exports = Model;
