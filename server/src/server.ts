import express, { Request, Response } from "express";
import cors from "cors";
import { v4 as generateId } from "uuid";
import * as db from "./db";
import { Todo, Todos } from "./ts/types";
const app = express();
const PORT = 8080;

app.use(
  cors({
    origin: process.env.FE_ORIGIN,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);
app.use(express.json());

app.get("/todos", async (_, res: Response) => {
  try {
    const result = await db.query("SELECT * FROM tasks;");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
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
    res.status(200).send(newTask);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

app.patch("/updatetask/:id", async (req: Request, res: Response) => {
  let newStatus = "completed";
  const { id } = req.params;
  const { status } = req.body;
  if (!id) {
    res.status(400).send("Id not provided correctly.");
  }
  if (!status) {
    res.status(400).send("Status not provided correctly.");
  }
  if (status === "completed") {
    newStatus = "in-progress";
  } else if (status === "in-progress") {
    newStatus = "completed";
  }
  try {
    const result = await db.query(
      `UPDATE tasks SET status = '${newStatus}' WHERE id = ${id} RETURNING *;`
    );
    res.status(200).send(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

app.delete("/deletetask/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await db.query(
      `DELETE FROM tasks WHERE id = ${id} RETURNING *;`
    );
    res.status(200).send(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(PORT, () => console.log(`Listening to port ${PORT}!`));
