const app = require('../index')
const supertest = require('supertest')
const request = supertest(app)

process.env.NODE_ENV = 'test';

describe('Test cases for sort api', () => {

    it('should test that results are fetching from get url /sort-words', async done => {

        const response = await request.get('/sort-words')
        expect(response.statusCode).toBe(200)
        done();

    })

    it('should test that error message are seen on get url /sort-words when sentence query param is absent', async done => {

        const response = await request.get('/sort-words')
        expect(response.body.message).toBe('The request is invalid.')
        done();

    })

    it('should test that error message are seen on get url /sort-words when sentence query param is empty', async done => {

        const response = await request.get('/sort-words?sentence=')
        expect(response.body.message).toBe('The request is invalid.')
        done();

    })

    it('should test that sort string object is seen on passing iS my love puRE tHan MILk?', async done => {

        const response = await request.get('/sort-words?sentence=iS my love puRE tHan MILk?')
        expect(response.text).toBe("\"iS my elov EpRu aHnt IkLM?\"")
        expect(response.text.length).toBe("\"iS my elov EpRu aHnt IkLM?\"".length)
        done();

    })

    it('should test that sort string object is seen on passing " LX\'s head office is located in Sydney, Australia. "', async done => {

        const response = await request.get('/sort-words?sentence=LX\'s head office is located in Sydney, Australia.')
        expect(response.text).toBe("\"'LsX adeh ceffio is acdelot in denSyy, Aaailrstu.\"")
        expect(response.text.length).toBe("\"'LsX adeh ceffio is acdelot in denSyy, Aaailrstu.\"".length)
        done();

    })

    it('should test that sort string object is seen on passing " The sentance "Hello World!" is often used in programming examples? "', async done => {

        const response = await request.get('/sort-words?sentence=The sentance "Hello World!" is often used in programming examples?')
        expect(response.text).toBe("\"ehT aceennst \"eHllo dlorW!\" is efnot desu in aggimmnoprr aeelmpsx?\"")
        expect(response.text.length).toBe("\"ehT aceennst \"eHllo dlorW!\" is efnot desu in aggimmnoprr aeelmpsx?\"".length)
        done();

    })
})