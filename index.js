const express = require("express");

const server = express();

server.use(express.json());

server.get("/users", (req, res) => {
  res.status(200).json({ data: users });
});

let users = [
  {
    id: "a_unique_id", // hint: use the shortid npm package to generate it
    name: "Jane Doe",
    bio: "Not Tarzan's Wife, another Jane",
  },
];

const port = 5000;

server.listen(port, () => console.log("api running"));

// npm run server
