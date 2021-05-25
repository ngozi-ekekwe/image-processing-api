import sharp from "sharp";

export const resizeImage = async (
  f: string | null,
  h: number | null,
  w: number | null
): Promise<void> => {
  const buffer = `assets/full/${f}.jpg`;
  const outputfile = `./public/thumbnail/${f}${w}x${h}.jpg`;
  const height = h;
  const width = w;
  const image = await sharp(buffer);
  const resizedimage = await image.resize(width, height);
  resizedimage.toFile(outputfile);
};
