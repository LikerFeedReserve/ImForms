const Model = require("./model");

class Controllers {
  static resHandler = (res, data) => {
    if (data) {
      res.send(data);
    } else {
      res.sendStatus(404);
    }
  };

  static getQuestion = async (req, res) => {
    await Model.getQuestionById(req.params).then((result) => {
      this.resHandler(res, result);
    });
  };

  static getAllQuestions = async (req, res) => {
    await Model.getQuestions().then((result) => {
      this.resHandler(res, result);
    });
  };

  static createQuestion = async (req, res) => {
    if (!req.body) return res.sendStatus(400);
    const id = Math.ceil(Math.random() * (100 - 1) * Math.random() * (100 - 1));
    await Model.postQuestion({ id, ...req.body })
      .then(() => Model.getQuestionById({ id }))
      .then((result) => {
        this.resHandler(res, result);
      });
  };

  static updateQuestion = async (req, res) => {
    if (!req.body) return res.sendStatus(400);
    await Model.updateQuestionById(req.params, req.body)
      .then(() => Model.getQuestionById(req.params))
      .then((result) => {
        this.resHandler(res, result);
      });
  };
  
  static deleteQuestion = async (req, res) => {
    await Model.deleteQuestionById(req.params).then((result) => {
      this.resHandler(res, result);
    });
  };
}

module.exports = Controllers;
