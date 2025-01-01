const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.get("/add", (req, res) => {
  if (req.query.num1 && req.query.num2) {
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);
    const result = addTwoNumbers(num1, num2);
    return res.status(200).json({
      result,
    });
  } else {
    return res.status(400).json({
        "error":"provide num1 and num2 in request query"
    })
  }
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

const addTwoNumbers = (num1, num2) => {
  return num1 + num2;
};
