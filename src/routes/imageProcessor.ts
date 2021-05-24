import express from "express";
import { errorMiddleware } from "../middleware/errorHandler";
import { resizeImage } from "../utilities/resize";

const route = express.Router();

interface ImageOptions {
  filename: string;
  width: number;
  height: number;
}

route.get(
  "/api/images",
  errorMiddleware,
  async (req: express.Request, res: express.Response) => {
    const { filename, width, height } = req.query;
    const options = {
      filename,
      width,
      height,
    };

    console.log(req.url);

    const r = await resizeImage(options);
    const url = window.URL.createObjectURL(new Blob([r]));
    const img = document.createElement("img");
    img.src = url;
    document.body.appendChild(img);

    // try {

    // }
    // catch {
    //   console.log('an error occured')
    // }
  }
);

export default route;
