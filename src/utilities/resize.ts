import sharp from "sharp";

export const resizeImage = async (
  f: string | null,
  h : number | null,
  w: number | null
) => {
  const buffer = `assets/full/${f}.jpg`;
  const outputfile = `assets/thumbnail/${f}.jpg`;
  const height = h;
  const width = w;
  const image = await sharp(buffer);
  const resizedimage = await image.resize(width, height);
  return resizedimage
    .toFile(outputfile, (_err, info) => {
      return info;
    });
};
