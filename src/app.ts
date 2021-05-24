import express from "express";
import routes from "./routes";

const app = express();

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Image Processing API");
});

app.use(routes.imageRoute);

export default app;
