import chai from 'chai';
import supertest from 'supertest';
import app from '../index';

const { expect } = chai;
const server = supertest(app);

describe('App', () => {
  it('should return expected output', async () => {
    const response = await server.post('/most-word').send({
      words:
        'We believe that the future of Africa is digital therefore we are actively building tech companies with a tremendous potential to transform the continent',
    });
    expect(response.body.mostOccuringWord).to.equal('we');
  });
});

describe('App', () => {
  it('should indicate an error in input', async () => {
    const response = await server.post('/most-word').send({
      words: 'Trium1',
    });
    expect(response.body.error).to.equal('Only letters and spaces are allowed');
  });
});
