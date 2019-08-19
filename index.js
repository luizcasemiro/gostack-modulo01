const express = require("express");

const server = express();

// Query Params = ?teste=1
// Route Params = /users/1
// Request body = { "name": "Luiz", "email": "casimirofelisaki@gmail.com" }

server.get("/users/:id", (req, res) => {
  const { id } = req.params;
  return res.json({ message: `Buscando o usuario ${id}` });
});

server.listen(3000);
