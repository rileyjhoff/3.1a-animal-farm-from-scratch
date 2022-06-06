const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const { zodiacs } = require('../data/zodiacs');

describe('3.1a-zodiac-from-scratch routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/zodiac should return list of zodiacs data', async () => {
    const res = await request(app).get('/zodiac');
    const expected = zodiacs;
    expect(res.body).toEqual(expected);
  });

  // it('/zodiac/:id should return zodiac detail matching id in params', async () => {
  //   const res = await request(app).get('/zodiac');
  //   const expected
  //   expect(res.body).toEqual(expected);
  // });

  afterAll(() => {
    pool.end();
  });
});
