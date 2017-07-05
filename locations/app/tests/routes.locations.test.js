process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const server = require('../app');

describe('Locations API Routes', () => {

  describe('GET /locations', () => {
    it('should return all location', (done) => {
      chai.request(server)
      .get('/locations')
      .end((err, res) => {
        res.type.should.eql('application/json');
        res.body.status.should.eql('success');
        res.body.data.should.be.a('array');
        res.body.data.should.have.length(3);
        done();
      });
    });
  });

});
