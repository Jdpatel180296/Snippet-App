const express = require("express");
const mongo = require("./mongo/mongo.js");

const app = express();
const PORT = 8080;
app.use(express.json());

const users = require("./api/Users/users.routes.js");
const snippets = require("./api/Snippets/snippets.routes");
const bookmarks = require("./api/Bookmarks/bookmarks.routes");

app.use("/users", users);
app.use("/snippets", snippets);
app.use("/bookmarks", bookmarks);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
  mongo.connectDB();
});
