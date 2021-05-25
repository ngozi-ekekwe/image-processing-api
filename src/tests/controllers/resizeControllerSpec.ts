import supertest from 'supertest';
import app from '../../app';

const request = supertest(app);

describe('Resize Controller Endpoint', () => {
  it('Should return an 403 if parameters are missing', async (done) => {
    const response = await request.get('/api/images');
    expect(response.status).toBe(403)
    done();
  });

  it('Should display an error message to the client if parameters are missing', async(done) => {
    const response = await request.get('/api/images');
    expect(response.text).toBe('Error, Input file missing')
    done();
  });

  it('Should have a status of 200 if all parameters are valid', async(done) => {
    const response = await request.get('/api/images?filename=danceforme&width=800&height=600');
    expect(response.status).toBe(200);
    done();
  })
})