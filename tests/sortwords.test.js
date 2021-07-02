const app = require('../index')
const supertest = require('supertest')
const request = supertest(app)

process.env.NODE_ENV = 'test';

describe('Test cases for reverse api', () => {

    it('should test that results are fetching from get url /sort-words', async done => {

        const response = await request.get('/sort-words')
        expect(response.statusCode).toBe(200)
        done();

    })

    it('should test that error message is seen on get url /sort-words when string query param is absent', async done => {

        const response = await request.get('/sort-words')
        expect(response.body.result).toBe('Please provide a string query parameter in url.')
        done();

    })

    it('should test that error message is seen on get url /sort-words when string query param is empty', async done => {

        const response = await request.get('/sort-words?string=')
        expect(response.body.result).toBe('Please provide a string query parameter in url.')
        done();

    })

    it('should test that error message is seen on get url /sort-words when sort query param is wrong (should be either asc or desc)', async done => {

        const response = await request.get('/sort-words?string=asfg&sort=as')
        expect(response.body.result).toBe("The value of sort parameter can only be 'asc' or 'desc.'")
        done();

    })

    it('should test that sorted (ascending order by default) string object is seen on passing awdsAQWS', async done => {

        const response = await request.get('/sort-words?string=awdsAQWS')
        expect(response.body.result).toBe('AQSWadsw')
        expect(response.body.result.length).toBe('AQSWadsw'.length)
        done();

    })

    it('should test that sorted (ascending) string object is seen on passing  KNJHJYGihkbu!~234~ (with special characters and numbers)', async done => {

        const response = await request.get('/sort-words?string=KNJHJYGihkbu!~234~&sort=asc')
        expect(response.body.result).toBe('!234GHJJKNYbhiku~~')
        expect(response.body.result.length).toBe('!234GHJJKNYbhiku~~'.length)
        done();

    })

    it('should test that sorted (descending) string object is seen on passing  KNJHJYGihkbu!~234~ (with special characters and numbers)', async done => {

        const response = await request.get('/sort-words?string=KNJHJYGihkbu!~234~&sort=desc')
        expect(response.body.result).toBe('~~ukihbYNKJJHG432!')
        expect(response.body.result.length).toBe('~~ukihbYNKJJHG432!'.length)
        done();

    })

    it('should test that sorted (ascending) string object is seen on passing  123HAUYF7hukjknloi (upper case, lower case and numbers)', async done => {

        const response = await request.get('/sort-words?string=123HAUYF7hukjknloi')
        expect(response.body.result).toBe('1237AFHUYhijkklnou')
        expect(response.body.result.length).toBe('1237AFHUYhijkklnou'.length)
        done();

    })

    it('should test that sorted (descending) string object is seen on passing  123HAUYF7hukjknloi (upper case, lower case and numbers)', async done => {

        const response = await request.get('/sort-words?string=123HAUYF7hukjknloi&sort=desc')
        expect(response.body.result).toBe('uonlkkjihYUHFA7321')
        expect(response.body.result.length).toBe('uonlkkjihYUHFA7321'.length)
        done();

    })

})