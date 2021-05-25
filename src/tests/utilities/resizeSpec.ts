import {resizeImage} from '../../utilities/resize';
import path from 'path';

describe('Resize Utility function', () => {
  afterAll(async() => {

  })
  it('Should call sharp module to resize image', async(done) => {
    const filename = "danceforme";
    const height = 200;
    const width =  300;
    await resizeImage(filename,width, height);
    const outputfile = `./public/thumbnail/${filename}${width}x${height}.jpg`;
    done()
  })
});