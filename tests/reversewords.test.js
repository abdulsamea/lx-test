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

    it('should test that error message are seen on get url /reverse-words when sentence query param is absent', async done => {

        const response = await request.get('/reverse-words')
        expect(response.body.message).toBe('The request is invalid.')
        done();

    })

    it('should test that error message are seen on get url /reverse-words when sentence query param is empty', async done => {

        const response = await request.get('/reverse-words?sentence=')
        expect(response.body.message).toBe('The request is invalid.')
        done();

    })

    it('should test that reverse string object is seen on passing awdsAQWS', async done => {

        const response = await request.get('/reverse-words?sentence=awdsAQWS')
        expect(response.text).toBe("\"SWQAsdwa\"")
        expect(response.text.length).toBe("\"SWQAsdwa\"".length)
        done();

    })

    it('should test that reverse string object is seen on passing  KNJHJYGihkbu!~234~ (with special characters and numbers)', async done => {

        const response = await request.get('/reverse-words?sentence=KNJHJYGihkbu!~234~')
        expect(response.text).toBe("\"ubkhiGYJHJNK!~432~\"")
        expect(response.text.length).toBe("\"ubkhiGYJHJNK!~432~\"".length)
        done();

    })

    it('should test that reverse string object is seen on passing  123234 (only numbers)', async done => {

        const response = await request.get('/reverse-words?sentence=123234')
        expect(response.text).toBe("\"432321\"")
        expect(response.text.length).toBe("\"432321\"".length)
        done();

    })


})