'use strict';
var expect = require('chai').expect;
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../bin/app');
var should = chai.should();
chai.use(chaiHttp);
var resHttpStatus = require('../index');
describe('#http_status_obj', () => {
  it('OK', function (done) {
    chai.request(server).get('/ok').end(function (err, res) {
      res.should.have.status(200);
      done();
    });
  });
  it('304 Not Modified', function (done) {
    chai.request(server).get('/notModified').end(function (err, res) {
      res.should.have.status(304);
      done();
    });
  });
  it('400 bad Request', function (done) {
    chai.request(server).get('/badRequest').end(function (err, res) {
      res.should.have.status(400);
      done();
    });
  });
  it('403 Forbidden', function (done) {
    chai.request(server).get('/forbidden').end(function (err, res) {
      res.should.have.status(403);
      done();
    });
  });
  it('404 not Found', function (done) {
    chai.request(server).get('/notFound').end(function (err, res) {
      res.should.have.status(404);
      done();
    });
  });
  it('406 Not Acceptable', function (done) {
    chai.request(server).get('/notAcceptable').end(function (err, res) {
      res.should.have.status(406);
      done();
    });
  });
  it('410 Gone', function (done) {
    chai.request(server).get('/gone').end(function (err, res) {
      res.should.have.status(410);
      done();
    });
  });
  it('420 enhanceYourCalm', function (done) {
    chai.request(server).get('/enhanceYourCalm').end(function (err, res) {
      res.should.have.status(420);
      done();
    });
  });
  it('422 Unprocessable Entity', function (done) {
    chai.request(server).get('/unprocessableEntity').end(function (err, res) {
      res.should.have.status(422);
      done();
    });
  });
  it('500 Internal Server Error', function (done) {
    chai.request(server).get('/internalServerError').end(function (err, res) {
      res.should.have.status(500);
      done();
    });
  });
  it('502 Bad Gateway Api', function (done) {
    chai.request(server).get('/badGatewayApi').end(function (err, res) {
      res.should.have.status(502);
      done();
    });
  });
});