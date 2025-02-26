import { Client } from "pg";
import express from "express";

const app = express();

app.use(express.json());

const pgClient = new Client(
  "postgresql://neondb_owner:npg_st0NOne4zXIb@ep-delicate-night-a8qwwe0h-pooler.eastus2.azure.neon.tech/neondb?sslmode=require"
);

pgClient.connect();

app.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;

  try {
    const insertQuery =
      "INSERT INTO  users(username,email,password) VALUES($1,$2,$3)";
    const response = await pgClient.query(insertQuery, [
      username,
      email,
      password,
    ]);
    res.json({
      message: "You have signed in",
    });
  } catch (e) {
    res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(3000);
