'use strict';

var expect = require('chai').expect;

var chai = require('chai');
var chaiHttp = require('chai-http');
//var server = require('../server/app');
var should = chai.should();

chai.use(chaiHttp);

 
var resHttpStatus = require('../index');
 
describe('#http_status_obj',() => {
    it('ok',() => {
        var body = {"message" : "lalala"};
        var res = {"message" : "lalala"};
        var result = http_status_obj.ok(res, body);
        console.log("----------->>>", result);
        expect(result).to.equal('200');
    });
});