var express = require('express');
var router = express.Router();
var htt =    require('../../index');
router.get('/ok', function(req, res, next) {
	htt.ok(res,{ "title": '200 OK' });
});
router.get('/notModified', function(req, res, next) {
	htt.not_modified(res,{ "title": '304 Not Modified' });
});
router.get('/badRequest', function(req, res, next) {
	htt.bad_request(res,{ "title": '400 bad Request' });
});
router.get('/forbidden', function(req, res, next) {
	htt.forbidden(res,{ "title": '403 Forbidden' });
});
router.get('/notFound', function(req, res, next) {
	htt.not_found(res,{ "title": '404 Not Found' });
});
router.get('/notAcceptable', function(req, res, next) {
	htt.not_acceptable(res,{ "title": '406 Not Acceptable' });
});
router.get('/gone', function(req, res, next) {
	htt.gone(res,{ "title": '410 GONE' });
});
router.get('/enhanceYourCalm', function(req, res, next) {
	htt.enhance_your_calm(res,{ "title": '420 Enhance Your Calm' });
});
router.get('/unprocessableEntity', function(req, res, next) {
	htt.unprocessable_entity(res,{ "title": '422 Unprocessable Entity ' });
});
router.get('/internalServerError', function(req, res, next) {
	htt.internal_server_error(res,{ "title": '500 Internal Server Error' });
});
router.get('/badGatewayApi', function(req, res, next) {
	htt.bad_gateway_api(res,{ "title": '502 Bad Gateway Api' });
});
module.exports = router;
