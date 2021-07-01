const app = require('../index')
const supertest = require('supertest')
const request = supertest(app)

describe('Test cases for reverse api', () => {

    it('should test that posts are fetching from get url /reverse-words', async done => {
        const response = await request.get('/reverse-words')
        expect(response.statusCode).toBe(200)
        done()
    })

})