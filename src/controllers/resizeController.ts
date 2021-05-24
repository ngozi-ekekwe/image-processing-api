import { Router, Request, Response } from "express";
import { validateQuery } from "../middleware/validateQueryParams"
import { resizeImage } from  "../utilities/resize";

const router : Router = Router();

router.get('/api/images', validateQuery, async (req: Request, res: Response) => {
  const { filename, heigth, width } = req.query;

  const h : number | null = heigth ? parseInt(heigth as string, 10) : null;
  const w : number | null = width ? parseInt(width as string, 10) : null;
  const f : string = (filename as unknown) as string;

  

  try{
    await resizeImage(f, h, w);
    const thumbnail = `assets/thumbnail/${f}.jpg`
    res.render('resize', {
      backgroundImage: thumbnail,
      src: req.url
    })
    
  }catch(e) {
    console.log(e)
  }
});

export default router;