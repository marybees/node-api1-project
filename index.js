const express = require("express");

const server = express();

server.use(express.json());

server.get("/users", (req, res) => {
  res.status(200).json({ data: users });
});

let ids = require("short-id");

let users = [];

server.post("/users", (req, res) => {
  const data = req.body;

  users.push({ id: ids.generate(), ...data });

  res.status(201).json({ data: users });
});

server.put("/users/:id", (req, res) => {
  const id = Number(req.params.id);

  const changes = req.body;

  const found = users.find((user) => user.id === id);

  if (found) {
    Object.assign(found, changes);

    res.status(200).json({ data: users });
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

server.delete("/users/:id", (req, res) => {
  const id = Number(req.params.id);

  lessons = users.filter((user) => user.id !== id);

  res.status(200).json({ data: users });
});

const port = 5000;

server.listen(port, () => console.log("api running"));

// npm run server
