const express = require("express");
const Controllers = require("./controllers");
const app = express();
const jsonParse = express.json();
const { db } = require("./db");

app.get("/api/question/:id", Controllers.getQuestion);
app.get("/api/questions", Controllers.getAllQuestions);
app.post("/api/question", jsonParse, Controllers.createQuestion);
app.put("/api/question/:id", jsonParse, Controllers.updateQuestion);
app.delete("/api/question/:id", Controllers.deleteQuestion);

const PORT = 3500;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

