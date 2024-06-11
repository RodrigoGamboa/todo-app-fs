import express, { Request, Response } from "express";
import cors from "cors";
import { v4 as generateId } from "uuid";
import * as db from "./db";
import { Todo, Todos } from "./ts/types";
const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM tasks");
    console.log(result.rows);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/todos", async (req: Request, res: Response) => {
  console.log("hey!");
  try {
    const result = await db.query("SELECT * FROM tasks");
    console.log(result.rows);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
  // res.status(200).send("It's working!");
});

app.post("/add", async (req: Request, res: Response) => {
  console.log(req.body);
  const { title, description, status } = req.body;
  if (!title || !description || !status) {
    res
      .status(400)
      .send("Title, Description and Status are required to create a new task.");
  }

  const dateNow = Date.now();
  const newTask: Todo = {
    id_task: generateId(),
    title,
    description,
    status,
    created_at: dateNow,
    updated_at: dateNow,
  };
  try {
    const result = await db.query(
      `INSERT INTO tasks (id_task, title, description, status, created_at, updated_at)
      VALUES ('${newTask.id_task}', '${newTask.title}', '${newTask.description}', '${newTask.status}', ${newTask.created_at}, ${newTask.updated_at});
      `
    );
    console.log(result.rows);
    res.status(200).send(newTask);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(PORT, () => console.log(`Listening to port ${PORT}!`));
