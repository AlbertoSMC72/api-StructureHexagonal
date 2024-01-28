import express from "express";
import cors from "cors";
import indexRouter from "./src/shared/infraestructure/index.router";
import { db } from "./src/shared/application/mysqlConnection";

const app = express();
const PORT = "3000";

let corsOptions = {
  origin: 'http://localhost:5271', //donde esta desplegado el font
};

app.use(cors(corsOptions));

app.use(express.json());

app.use("/", indexRouter);

db.connect()
  .then(() => console.log("Database connected"))
  .catch((err) => console.error("Error connecting to database: " + err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
