import express from "express";
import path from "path";
import resizeController from "./controllers/resizeController";

const app = express();

app.use(express.static("public"));

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (_req: express.Request, res: express.Response) => {
  res.status(200).render("index");
});

app.use(resizeController);

export default app;
