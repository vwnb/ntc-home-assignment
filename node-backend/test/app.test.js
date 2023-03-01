const request = require('supertest');
const app = require('../app');

describe('Test the root path', () => {
  test('GET / should return 200', done => {
    request(app)
      .get('/')
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});

describe('Test country population > foo', () => {
  test('GET /countryByPopulation/foo should return an error', done => {
    request(app)
      .get('/countryByPopulation/foo')
      .then(response => {
        expect(response.statusCode).toBe(403);
        done();
      });
  });
});

describe('Test country population > 30000000', () => {
  test('GET /countryByPopulation/30000000 should return five countries', done => {
    request(app)
      .get('/countryByPopulation/30000000')
      .then(response => {
        expect(response.text).toBe('[{\"code\":\"ESP\",\"name\":\"Spain\",\"flag\":\"\\\\uD83C\\\\uDDEA\\\\uD83C\\\\uDDF8\",\"population\":47351567},{\"code\":\"DEU\",\"name\":\"Germany\",\"flag\":\"\\\\uD83C\\\\uDDE9\\\\uD83C\\\\uDDEA\",\"population\":83240525},{\"code\":\"POL\",\"name\":\"Poland\",\"flag\":\"\\\\uD83C\\\\uDDF5\\\\uD83C\\\\uDDF1\",\"population\":37950802},{\"code\":\"ITA\",\"name\":\"Italy\",\"flag\":\"\\\\uD83C\\\\uDDEE\\\\uD83C\\\\uDDF9\",\"population\":59554023},{\"code\":\"FRA\",\"name\":\"France\",\"flag\":\"\\\\uD83C\\\\uDDEB\\\\uD83C\\\\uDDF7\",\"population\":67391582}]');
        done();
      });
  });
});

describe('Test country population > 500000000', () => {
  test('GET /countryByPopulation/500000000 should return nothing', done => {
    request(app)
      .get('/countryByPopulation/500000000')
      .then(response => {
        expect(response.text).toBe('[]');
        done();
      });
  });
});