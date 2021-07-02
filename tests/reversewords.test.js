const app = require('../index')
const supertest = require('supertest')
const request = supertest(app)

process.env.NODE_ENV = 'test';

describe('Test cases for reverse api', () => {

    it('should test that results are fetching from get url /reverse-words', async done => {

        const response = await request.get('/reverse-words')
        expect(response.statusCode).toBe(200)
        done();

    })

    it('should test that error message are seen on get url /reverse-words when string query param is absent', async done => {

        const response = await request.get('/reverse-words')
        expect(response.body.result).toBe('Please provide a query parameter in url.')
        done();

    })

    it('should test that error message are seen on get url /reverse-words when string query param is empty', async done => {

        const response = await request.get('/reverse-words?string=')
        expect(response.body.result).toBe('Please provide a query parameter in url.')
        done();

    })

    it('should test that reverse string object is seen on passing awdsAQWS', async done => {

        const response = await request.get('/reverse-words?string=awdsAQWS')
        expect(response.body.result).toBe('SWQAsdwa')
        expect(response.body.result.length).toBe('SWQAsdwa'.length)
        done();

    })

    it('should test that reverse string object is seen on passing  KNJHJYGihkbu!~234~ (with special characters and numbers)', async done => {

        const response = await request.get('/reverse-words?string=KNJHJYGihkbu!~234~')
        expect(response.body.result).toBe('~432~!ubkhiGYJHJNK')
        expect(response.body.result.length).toBe('~432~!ubkhiGYJHJNK'.length)
        done();

    })

    it('should test that reverse string object is seen on passing  123234 (only numbers)', async done => {

        const response = await request.get('/reverse-words?string=123234')
        expect(response.body.result).toBe('432321')
        expect(response.body.result.length).toBe('432321'.length)
        done();

    })


})