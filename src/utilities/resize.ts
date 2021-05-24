import sharp from "sharp";

interface ImageOptions {
  filename: string;
  width: number;
  height: number;
}

export const resizeImage = async (options: any) => {
  // if no image create a new file
  const buffer = `assets/full/${options.filename}.jpg`;
  const mfilepath = `assets/thumbnail/${options.filename}.jpg`;
  const heightx = parseInt(options.height, 10);
  const widthx = parseInt(options.width, 10);
  const image = await sharp(buffer);
  const resizedimage = await image.resize(widthx, heightx);

  return resizedimage
    .toFile(mfilepath, (err, info) => {
      return info;
    })
    .jpeg({
      quality: 100,
      chromaSubsampling: "4:4:4",
    })
    .toBuffer();
};
