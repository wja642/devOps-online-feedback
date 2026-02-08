const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static("public"));

app.post("/feedback", (req, res) => {
  const data = JSON.parse(fs.readFileSync("feedback.json"));
  data.push(req.body);
  fs.writeFileSync("feedback.json", JSON.stringify(data, null, 2));
  res.send({ message: "Feedback submitted successfully" });
});

app.get("/feedback", (req, res) => {
  const data = JSON.parse(fs.readFileSync("feedback.json"));
  res.send(data);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
