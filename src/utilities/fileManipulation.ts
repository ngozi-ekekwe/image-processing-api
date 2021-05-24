import { promises as fsPromises } from 'fs';

export const readImageFileContent = async (filePath: string) => {
  const mfilepath = `assets/full/${filePath}.jpg`;
  const myFile = await fsPromises.readFile(mfilepath, 'utf-8');
  return myFile;
}

export const writeFile = async (filePath: string, content: any) => {
  const myFile = await fsPromises.writeFile(filePath, content);
  console.log('done')
}