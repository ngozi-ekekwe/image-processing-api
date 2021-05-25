import { Router, Request, Response } from "express";
import validateQuery from "../middleware/validateQueryParams";
import { resizeImage } from "../utilities/resize";

const router: Router = Router();

router.get("/api/images", validateQuery, async (req: Request, res: Response) => {
    const { filename, height, width } = req.query;
    const h: number | null = height ? parseInt(height as string, 10) : null;
    const w: number | null = width ? parseInt(width as string, 10) : null;
    const f: string = filename as unknown as string;

    if(req.body === 'Error, Input file missing') {
      res.status(403).send(req.body);
    } else {
        try {
          await resizeImage(f, h, w);
          const thumbnail = `/thumbnail/${f}${w}x${h}.jpg`;
          res.status(200).render("resize", {
            src: thumbnail,
          });
        } catch (e) {
          console.log(e, 'this is e');
        }
    }
  }
);

export default router;
